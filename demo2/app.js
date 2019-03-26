
const Koa = require('koa');
const PORT = process.env.PORT;
const { mongo } = require('./db');

const app = new Koa();
// 注意：一旦存在多个需要初始化的对象时，mong.init().then()...的写法将不再合适，改进方法可以参考demo1
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
