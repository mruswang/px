const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
//log工具
var log4js = require('log4js');
var log = log4js.getLogger("app");
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));

if(app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        log.error("Something went wrong:", err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    log.error("Something went wrong:", err);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// logger
// app.use(async (ctx, next) => {
//   //响应开始时间
//   const start = new Date();
//   //响应间隔时间
//   var ms;
//   try {
//     //开始进入到下一个中间件
//     await next();

//     ms = new Date() - start;
//     //记录响应日志
//     logUtil.logResponse(ctx, ms);

//   } catch (error) {
    
//     ms = new Date() - start;
//     //记录异常日志
//     logUtil.logError(ctx, error, ms);
//   }
// });

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
