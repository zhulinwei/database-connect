const config = require('../config').mongodb;
const MongoClient = require('mongodb').MongoClient;

class MongoDB {
  constructor() {
    this.dbs = {};
  }
  db () {
    return this.dbs;
  }
  async init() {
    const keys = Object.keys(config);
    const connections = keys.map(key => {
      let url = config[key]['url'] || '';
      let options = config[key]['options'] || {};
      return MongoClient.connect(url, options);
    });
    const result = await Promise.all(connections);
    keys.forEach((name, index) => this.dbs[name] = result[index]);
    return this.dbs;
  }
}

module.exports = new MongoDB();