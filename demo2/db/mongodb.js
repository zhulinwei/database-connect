const config = require('../config').mongodb;
const MongoClient = require('mongodb').MongoClient;

class MongoDB {
  constructor() {
    this.mongo = {};
  }
  client () {
    return this.mongo;
  }
  async init() {
    const url = config['url'] || '';
    const options = config['options'] || {};
    try {
      this.mongo = await MongoClient.connect(url, options);
    } catch (err) {
      console.log(err);
    }
    return this.mongo;
  }
}

module.exports = new MongoDB();