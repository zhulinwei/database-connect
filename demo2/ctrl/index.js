const { Mock } = require('../model');

module.exports = {
  async query (ctx) {
    const selector = {};
    const options = {};
    ctx.body = await Mock.query(selector, options);
  },
  async create () {},
  async update () {},
  async delete () {},
};
