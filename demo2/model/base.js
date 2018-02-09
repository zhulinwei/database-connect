const { mongo } = require('../db');
const client = mongo.client();

class BaseModel {
  constructor() {
    this.db = client.db('test1');
  }
  query(selector, options, callback) {
    let cursor = this.coll.find(selector);
    if (options) {
      cursor = options.sort ? cursor.sort(options.sort) : cursor;
      cursor = options.skip ? cursor.skip(options.skip) : cursor;
      cursor = options.limit ? cursor.limit(options.limit) : cursor;
      cursor = options.fields ? cursor.project(options.fields) : cursor;
    }
    return cursor.toArray(callback);
  }
}

module.exports = BaseModel;