const fs = require('fs');
const Ctrl = require('../ctrl');
const Router = require('koa-router');
const router = new Router();

router.get('/', ctx => {
  ctx.body = 'hello world';
});

router.get('/query', Ctrl.query);

router.get('/_/readme.md', ctx => {
  ctx.set({ 'Content-Type': 'text/markdown' });
  ctx.body = fs.createReadStream('./README.md');
})

module.exports = router;