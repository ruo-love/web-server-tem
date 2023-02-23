const Koa = require('koa')//koa框架
const serve = require('koa-static')//静态资源处理
const { historyApiFallback } = require('koa2-connect-history-api-fallback') //历史模式配置模块
const proxy = require('koa2-proxy-middleware') //代理模块

const app = new Koa()//new 一个服务器对象
/* gzip压缩配置 start */
const compress = require('koa-compress')
const options = {
  threshold: 10 //数据超过1mb时压缩
}
app.use(compress(options))
/* gzip压缩配置 end */

// 历史模式配置  
app.use(
  historyApiFallback({
    whiteList: ['/api']
  })
)

// 代理,相当于我们使用Vue、React 中的Proxy 代理
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
app.use(serve(__dirname + '/dist')) //__dirname表示当前文件的绝对路径，此处的dist 就是我们前端打包完成后的资源文件夹

app.listen(10005, () => {//配置我们需要监听的服务器端口
  console.log('10005 start')
})
