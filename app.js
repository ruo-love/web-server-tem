const Koa = require('koa')
const serve = require('koa-static')
const { historyApiFallback } = require('koa2-connect-history-api-fallback') //历史模式配置模块
// const proxy = require('koa2-proxy-middleware') //代理模块
/* gzip压缩配置 start */
const compress = require('koa-compress')
const options = {
  threshold: 10 //数据超过1mb时压缩
}

const app = new Koa()

app.use(compress(options))
/* gzip压缩配置 end */

// 历史模式配置
app.use(
  historyApiFallback({
    whiteList: ['/api']
  })
)
// 代理
app.use(
  proxy({
    targets: {
      '/api/(.*)': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  })
)
// 静态资源配置
app.use(serve(__dirname + '/doc'))
app.listen(10005, () => {
  console.log('3333 start')
})
