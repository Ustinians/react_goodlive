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

## 实现首页展示

1. 创建页面
   * Home
   * Shop
   * LifeService
   * User
   
2. 创建路由
   - 安装依赖: `npm install --save react-router-dom`
   - 配置AppRouter
   
3. 底部导航

4. iconfont

5. 顶部导航

   - REM配置 -> public.index.html加入REM的计算方案

6. 焦点轮播图

   * [参考文档](https://react-swipeable-views.com/)

   * 引入轮播图

     * 轮播图:  `npm install --save react-swipeable-views`
     * 自动轮播: `npm install --save react-swipeable-views-utils `

   * 指示器需独立实现

     ```
     npm install --save classnames
     ```

   * 引入轮播图代码

     ```jsx
     import React from 'react';
     import SwipeableViews from 'react-swipeable-views';
     import { autoPlay } from 'react-swipeable-views-utils';
     import Pagination from 'docs/src/modules/components/Pagination';
     
     const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
     
     const styles = {
       root: {
         position: 'relative',
       },
       slide: {
         padding: 15,
         minHeight: 100,
         color: '#fff',
       },
       slide1: {
         backgroundColor: '#FEA900',
       },
       slide2: {
         backgroundColor: '#B3DC4A',
       },
       slide3: {
         backgroundColor: '#6AC0FF',
       },
     };
     
     class DemoAutoPlay extends React.Component {
       state = {
         index: 0,
       };
     
       handleChangeIndex = index => {
         this.setState({
           index,
         });
       };
     
       render() {
         const { index } = this.state;
     
         return (
           <div style={styles.root}>
             <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
               <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
               <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
               <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
             </AutoPlaySwipeableViews>
             <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
           </div>
         );
       }
     }
     
     export default DemoAutoPlay;
     ```

7. Antd-mobile组件轮播图

   * 安装 `npm install --save antd-mobile`

   * 在需要的文件中引入`Swiper`组件

     ```js
     import {Swiper} from "antd-mobile"
     ```

8. 搭建服务器环境提供数据

   * 安装依赖
   
     ```npm
     npm install --save express
     npm install --save cors
     ```
   
   * 跨域
   
     使用`cors`后台解决
   
     数据来源于json文件
   
9. 首页列表数据显示

   - 组件分类
     - 智能组件(HomeHotList): 处理数据,获取数据,过滤数据
     - 木偶组件(HomeHotList): 视图适配

## 实现城市管理

1. 创建城市管理页面实现路由跳转: City

2. 实现路由嵌套,将共享四部导航的页面做成二级路由: Layout布局

3. 城市页面组件效果实现: hPubHeader,CurrentCity,cityList

4. 集成Redux: 通过它来存储城市页面,根据城市不同,UI会渲染不同的结果

   * Store Reducers Actions

   * 安装依赖

     ```npm
     npm install --save redux
     npm install --save react-redux
     npm install --save-dev redux-devtools-extension
     ```

   * 创建`Redux`流程

5. 关联Redux,存储城市数据

   - 修改Header城市文本,传递City组件中的城市文本

6. 页面数据需要根据城市进行切换

7. 城市列表的ABC形式

   * 安装依赖

     ```npm
     npm i react-city-select
     ```

### 实现搜索功能

1. 创建搜索页面,配置路由跳转

   1. 抽离搜索的input组件

   2. 配置路由

   3. 监听keyCode进行Enter跳转(keyCode === 13)

   4. 路由跳转携带参数

      Hook实现方式,React-Router提供的useParams

2. 实现搜索网络引擎的接口

   * 后台由于数据问题,每次都返回相同的测试内容

3. 前台访问接口,获取数据



















