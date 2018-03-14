# startvue

> A Vue.js project

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

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# startvue
Vue2+VueRouter2+Webpack+Axios 构建项目实战

WEB 项目开发模式：
1.设计师设计页面设计稿
2.前端工程师切成 html+css+js 的页面
3.后端工程师拿到前端工程师的做好的页面，利用模板引擎或其他技术嵌套进后端代码中，实现项目开发。

前后端分离的开发模式：
1.设计师设计页面设计稿
2.前端工程师和后端工程师以及其他技术人员约定项目开发接口规范
3.后端工程师按照约定接口规范开发相应接口
4.前端工程师开发页面，并对接后端接口（可能先期采用假接口）开发页面

SPA
是 single page web application 的缩写。中文翻译为 单页应用程序 或 单页Web应用。

所有的前端人员都应该明白我们的页面的 url 构成：
http://www.fengcms.com/index.html?name=fungleo&old=32#mylove/is/world/peace
如上的 url 由以下部分组成：

1.http:// 规定了页面采用的协议。
2.www.fengcms.com 为页面所属的域名。
3.index.html 为读取的文件名称。
4.?name=fungleo&old=32 给页面通过 GET 方式传送的参数
5.#mylove/is/world/peace 为页面的锚点区域

前面四个发生改变的时候，会触发浏览器的跳转亦或是刷新行为，而更改 url 中的锚点，并不会出现这种行为。
因此，几乎所有的 spa 应用都是利用锚点的这个特性来实现路由的转换。

RESTful 风格接口
实际情况是，我们在前后端在约定接口的时候，可以约定各种风格的接口，但是，RESTful 接口是目前来说比较流行的，并且在运用中比较方便和常见的接口。
虽然它有一些缺陷，目前 github 也在主推 GraphQL 这种新的接口风格，但目前国内来说还是 RESTful 接口风格比较普遍。
并且，在掌握了 RESTful 接口风格之后，会深入的理解这种接口的优缺点，到时候，你自然会去想解决方案，并且在项目中实行新的更好的理念

对数据库的四格操作 “增删改查” 对应到我们的接口操作分别是：
post 插入新数据
delete 删除数据
put 修改数据
get 查询数据

vue 是什么？
为了实现前后端分离的开发理念，开发前端 SPA 项目，实现数据绑定，路由配置，项目编译打包等一系列工作的技术框架
包含了一整套外围工具的完整系统。

具体如下：
vue.js 核心，不解释。
VueRouter2 实现路由组织工具。
webpack 项目打包以及编译工具。
nodejs 前端开发环境。
npm 前端包管理器。
axios ajax 接口请求工具。
sass-loader 和 node-sass css 预处理。
element 基于 vue 的后台组件库。
iview 基于 vue 的另一套后台组件库。
vue-cli vue 项目脚手架。一键安装 vue 全家桶的工具。

——————————————————————————————————————————————————————

---------------------------------------------------
项目搭建
---------------------------------------------------
1.nodejs （含有npm webpack 一次性解决）
2.vue-cli （脚手架 npm install -g vue-cli ，成功后vue -V ）
3.初始化（npm 镜像源 npm install -g cnpm --registry=https://registry.npm.taobao.org）
vue init webpack 项目名
cd vue-demo-cnodejs
npm install
npm run dev

standard 标准风格规范说明
我们在上面安装了代码校验，并且采用了 standard 标准风格规范。那么这到底是一个什么规范呢？其实我上文给出了它的官方 github 仓库地址：https://github.com/feross/standard 如下：

缩进使用两个空格。
字符串使用单引号，用双引号只是为了避免转义单引号。
无未使用变量。这能帮助发现大量的错误。
不使用分号。这么做，没问题，真的！
行首不能是 ( ，[ 或 ` 。 
这是省略分号时唯一陷阱—— standard 自动为你检查。
关键字后面放一个空格。if (condition) { ... }
函数名字后面放一个空格。function name (arg) { ... }
始终用 ===，不要用 ==。不过可以用 obj == null 检测 null || undefined。
始终处理 node.js 回调的 err 参数。
始终以 window 引用浏览器的全局变量。 document 和 navigator 除外。 
这是为了防止使用浏览器那些命名糟糕的全局变量，比如 open, length, event 和 name。
更多中文内容，请访问：http://hongfanqie.github.io/standardjs/ 这里查看。

初始文件解析
├── README.md                       // 项目说明文档
├── node_modules                    // 项目依赖包文件夹
├── build                           // 编译配置文件，一般不用管
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config                          // 项目基本设置文件夹
│   ├── dev.env.js              // 开发配置文件
│   ├── index.js                    // 配置主文件
│   └── prod.env.js             // 编译配置文件
├── index.html                      // 项目入口文件
├── package-lock.json           // npm5 新增文件，优化性能
├── package.json                    // 项目依赖包配置文件
├── src                             // 我们的项目的源码编写文件
│   ├── App.vue                 // APP入口文件
│   ├── assets                      // 初始项目资源目录，回头删掉
│   │   └── logo.png
│   ├── components              // 组件目录
│   │   └── Hello.vue           // 测试组件，回头删除
│   ├── main.js                 // 主配置文件
│   └── router                      // 路由配置文件夹
│       └── index.js            // 路由配置文件
└── static                          // 资源放置目录

配置 src 目录
先不要管这些文件的内容，我们先建立这些空的文件在这边。然后我们后面去完善它。
我们的这个项目是要做两个页面，一个是 cnodejs 的列表页面，一个是详情页面。
所以，把项目文件夹整理成如下的结构

├── App.vue                         // APP入口文件
├── api                             // 接口调用工具文件夹
│   └── index.js                    // 接口调用工具
├── components                      // 组件文件夹，目前为空
├── config                          // 项目配置文件夹
│   └── index.js                    // 项目配置文件
├── frame                           // 子路由文件夹
│   └── frame.vue                   // 默认子路由文件
├── main.js                         // 项目配置文件
├── page                                // 我们的页面组件文件夹
│   ├── content.vue             // 准备些 cnodejs 的内容页面
│   └── index.vue                   // 准备些 cnodejs 的列表页面
├── router                          // 路由配置文件夹
│   └── index.js                    // 路由配置文件
├── style                           // scss 样式存放目录
│   ├── base                        // 基础样式存放目录
│   │   ├── _base.scss          // 基础样式文件
│   │   ├── _color.scss     // 项目颜色配置变量文件
│   │   ├── _mixin.scss     // scss 混入文件
│   │   └── _reset.scss     // 浏览器初始化文件
│   ├── scss                        // 页面样式文件夹
│   │   ├── _content.scss       // 内容页面样式文件
│   │   └── _index.scss     // 列表样式文件
│   └── style.scss              // 主样式文件
└── utils                           // 常用工具文件夹
    └── index.js                    // 常用工具文件

配置 static 目录
这个目录比较简单，因为这个项目我们的资源不多，但是，为了我的这系列博文能够适合大多数的项目的开发，一般，我搞成下面这个样子：

├── css             // 放一些第三方的样式文件
├── font                // 放字体图标文件
├── image           // 放图片文件，如果是复杂项目，可以在这里面再分门别类
└── js              // 放一些第三方的JS文件，如 jquery


本项目学习与 http://blog.csdn.net/fungleo/article/details/77575077 博客内容。

