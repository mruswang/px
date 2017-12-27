const Koa = require('koa');
const serve = require('koa-static');
// const mongoose = require ('mongoose');
var Router = require('koa-router');
const onerror = require('koa-onerror');
const convert = require('koa-convert')
const historyApiFallback = require('./historyApiFallback');
const app = new Koa();
var router = new Router();
app.use(serve(__dirname + '/views'));

onerror(app);

// router.get('/admin/index', (ctx, next) => {
//   ctx.body= 'hello workd'
//   //console.log(ctx)
//   //ctx.render('index')
// });
// 对路由admin直接走historyApiFallback,而不是用服务端渲染
app.use(convert(historyApiFallback({
  verbose: true,
  index: '/admin.html',
  rewrites: [
    { from: /^\/admin$/, to: '/admin.html' },
    { from: /^\/admin\/login/, to: '/admin.html' },
  ],
  path: /^\/admin/
})))
//mongoose.Promise = Promise;
// connect mongodb
// mongoose.connect('mongodb://localhost/koa');
// const db = mongoose.connection;
// db.once('error',() => console.log('Mongo connection error'));
// db.once('open',() => console.log('Mongo connection successed'));
app
  .use(router.routes())
  .use(router.allowedMethods());

if (!module.parent) app.listen(3000, () => {
  console.log('The server is running at http://localhost:3000');
});
