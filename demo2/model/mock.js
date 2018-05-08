
const { mongo } = require('../db');
const BaseModel = require('./base');
console.log(mongo)
class Mock extends BaseModel {
  constructor() {
    super();
    // console.log(mongo.test1)
    this.coll = mongo.dbs.test1.collection("mock");
  }
}

module.exports = new Mock();
