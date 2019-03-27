const redis = require('redis');
const { promisify } = require('util');

class Redis {
  constructor (config) {
    const { url = '', options = {} } = config;
    this.url = url;
    this.options = options;
  }

  promisify () {
    this.client.get = promisify(this.client.get).bind(this.client);
    this.client.set = promisify(this.client.set).bind(this.client);
  }

  init () {
    return new Promise((resolve, reject) => {
      this.client = redis.createClient(this.url, this.options);
      this.client.on('ready', () => {
        this.promisify();
        resolve(this.client);
      });
      this.client.on('error', (error) => { reject(error); });
    });
  }
}
module.exports = Redis;
