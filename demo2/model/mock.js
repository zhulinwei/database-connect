
const { mongo } = require('../db');
const BaseModel = require('./base');

class Mock extends BaseModel {
  constructor () {
    super();
    this.coll = mongo.dbs.test1.collection('mock');
  }
}

module.exports = new Mock();
