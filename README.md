# react GoodLive

## 技术栈

React + ReactHook + ReactRouter + Axios + Less + 第三方

## 技术完成功能

1. 首页展示
2. 城市管理
3. 搜索功能
4. 上拉加载
5. 详情页
6. 收藏功能
7. 订单评价

## 初始化环境构建

1. 项目环境: `create-react-app 脚手架构建项目环境`
2. 集成网络请求`Axios`
3. 支持`Less`语法

## Less支持的配置

在`React`脚手架构建的环境中,默认支持的是`CSS`和`Sass/Scss`,所以需要自己配置`Less`

1. 执行命令: `npm run eject`(创建完项目不要进行任何操作,直接执行命令),如果修改了文件,则删除隐藏文件`.git`,然后再执行该命令

2. 安装依赖

   ```npm
   npm install --save-dev less less-loader
   ```

3. 在webpack.config.js中修改配置

   配置一

   ```js
   // style files regexes
   const cssRegex = /\.css$/;
   const cssModuleRegex = /\.module\.css$/;
   const sassRegex = /\.(scss|sass)$/;
   const sassModuleRegex = /\.module\.(scss|sass)$/;
   + const lessRegex = /\.less$/;
   + const lessModuleRegex = /\.module\.less$/;
   ```

   配置二

   ```js
   // 配置less
   {
     test: lessRegex,
     exclude: lessModuleRegex,
     use: getStyleLoaders(
       {
         importLoaders: 3,
         sourceMap: isEnvProduction
           ? shouldUseSourceMap
           : isEnvDevelopment,
         modules: {
           mode: 'icss',
         },
       },
       'less-loader'
     ),
     sideEffects: true,
   },
   
   {
     test: lessModuleRegex,
     use: getStyleLoaders(
       {
         importLoaders: 3,
         sourceMap: isEnvProduction
           ? shouldUseSourceMap
           : isEnvDevelopment,
         modules: {
           mode: 'local',
           getLocalIdent: getCSSModuleLocalIdent,
         },
       },
       'less-loader'
     ),
   },
   ```

## 配置网络请求

1. 安装依赖

   ```npm
   npm install --save axios
   ```

2. 配置相关文件

## 配置初始化样式

1. 初始化css文件
2. 引入字体图标库: iconfont





























