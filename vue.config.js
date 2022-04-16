module.exports = {
    publicPath: '/',    // 启动页地址
    outputDir: 'dist', // 打包的目录
    lintOnSave: true, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        host: '0.0.0.0',
        port: 8080, // 服务端口
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        // 如果需要代理，如下写法
        // proxy:{
        //   "/myDouyu":{//设置自己的请求地址
        //     target:'https://m.douyu.com/api/room/list',//目标服务器路径
        //     changeOrigin:true,
        //     pathRewrite:{
        //       "^/myDouyu":''
        //     }
        //   }
        // },
        before: app => { }
    },
    // 下面是配置别名的代码段
    configureWebpack:{
      resolve:{
        alias:{
          //这里的@是脚手架默认定义的表示src的目录
          views:'@/views',
          assets:'@/assets',
          components:'@/components'
        }
      }
    },
  }