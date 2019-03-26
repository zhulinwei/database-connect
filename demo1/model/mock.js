const { mongo } = require('../db');
const db = mongo.db();

const BaseModel = require('./base');
class Mock extends BaseModel {
  constructor () {
    super();
    this.coll = db.test1.collection('mock');
  }
}

module.exports = new Mock();
