
const koa = require('koa');
const PORT = process.env.PORT;
const { mongo } = require('./db');

const app = new koa();
mongo.init()
  .then(data => {
    // 注意：require('./router')必须要在mongo.init()之后，否则model中无法获取到db
    const router = require('./router');
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(PORT);
    console.log('mongodb_demo2 running at ' + 'http://127.0.0.1:' + PORT);
  })
  .catch(err => {
    console.log(err);
  });
