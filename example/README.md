# vue-tpl

依赖node >= 7.4.0

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 技术栈

vue + vue-router + vuex

#### 数据加载

使用fetch() 获取数据    
配合async + await 的异步解决方案

## 文件说明

+ assets: 存放静态fonts,img
+ mock: mock 数据
+ components : 组件
+ examples : 案例
+ pages : 页面
+ router : 路由
+ store ： 状态管理 Vuex
+ util : 全局修改文件

配置相关的案例说明：

```
npm install webpack-dev-server --save-dev
```

## 配置说明

### CDN

通过改变externals的选项，是否走CDN加载,上线的时候，需要把externals打开

```js
// 指定采用外部 CDN 依赖的资源，不被webpack打包, 这部分可以通过<script>方式引入
externals: {
  'vue': 'Vue',
  'vue-router': 'VueRouter'
},
```

### 启动本地mock数据

```js
npm run mock
```
使用express路由作为服务端的API接口分发


### 支持px2rem

详情见 `doc/px2rem`

### 去除eslint开发环境的检测
build/webpack.base.conf.js

### 增加对less支持

```js
npm i less-loader css-loader style-loader --save-dev

{
  test: /\.less$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'less-loader',
      options: {
        lint: true
      }
    }
  ]
},
```
