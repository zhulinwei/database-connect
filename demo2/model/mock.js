

const BaseModel = require('./base');
class Mock extends BaseModel {
  constructor() {
    super();
    this.coll = this.db.collection("mock");
  }
}

module.exports = new Mock();