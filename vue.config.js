module.exports = {
  transpileDependencies: true,
  lintOnSave:false,  //检查命名规范
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}