# 本地开发

## 准备工作

- 安装 [Node.js](https://nodejs.org/zh-cn) 版本 >= v20.14.0 
- npm 版本 >= 10.7.0（node.js 默认自带npm）
- 安装[pnpm](https://www.pnpm.cn/) 版本 >= 9.1.4
- 安装[Mysql](https://www.mysql.com/downloads/) 版本 >= 8.0.37 for Win64 on x86_64
- 安装[Redis](https://github.com/tporadowski/redis/releases) 版本 >= 5.0.14 for Win64

## 文件结构

::: code-group

``` [前端]
tianLing-nest-admin-web
├── public            // 公开资源
├── src            // 前端代码入口
│       └── api          // 接口
│       └── assets        // 静态资源
│       └── components    // 组件
│       └── directives    // 自定义指令
│       └── hooks          // hooks函数
│       └── layout          // 布局
│       └── router          // 路由
│       └── store          // pinia 状态管理
│       └── type          // 类型声明
│       └── utils          // 工具函数
│       └── views          // 页面
│       ...
├── vite.config.ts      // 配置文件
├── ...
...
```

```[后端]
tianLing-nest-admin-api
├── public            // 公开资源
├── sql           // sql脚本初始化数据库所用
├── src            // 后端代码入口
│       └── api          // 接口
│       └── common          // 公共模块
│       └── utils          // 工具函数│     
│       ...
├── uploads          // 上传文件
...
```

:::

## 配置文件

::: warning 提示
前端之所以使用代理，是因为为了解决跨域。当然你在开发的时候也可以将后端允许跨域，不过切记正式环境下不要将后端允许跨域，否则会造成安全风险！！！！
:::

::: details  前端

::: code-group

```ts [vite.config.ts]
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      }
    }
  }
})
```

```ts [环境变量]
// .env.development
NODE_ENV=development
VITE_BASE_URL= '/api'
// .env.production
NODE_ENV=production
VITE_BASE_URL= '/api'
```

:::

::: details  后端

::: code-group

```ts [.env.local]
# 正式环境配置
NODE_ENV=production

# 数据库配置
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=admin123456
DB_DATABASE=tianling_system

# JWT配置
JWT_SECRET=tianLingJwtService
# 7天  1000*60*60*24*7
JWT_EXPIRES_IN=604800000

# Redis配置
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_DB=1
REDIS_PASSWORD=admin123
```

```ts [.env.prod]
# 正式环境配置
NODE_ENV=production

# 数据库配置
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=admin123456
DB_DATABASE=tianling_system

# JWT配置
JWT_SECRET=tianLingJwtService
# 7天  1000*60*60*24*7
JWT_EXPIRES_IN=604800000

# Redis配置
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_DB=1
REDIS_PASSWORD=admin123
```

:::

## 运行系统

::: danger 注意
后端使用的npm；前端使用的是pnpm；注意甄别！！！！后续会优化成统一使用pnpm。
:::

### 下载代码  

- 前端代码地址：[GitHub](https://github.com/huyagouban/tianLing-nest-admin-web)、[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-web) 
- 后端代码地址：[GitHub](https://github.com/huyagouban/tianLing-nest-admin-api)、[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-api)

### 导入数据库

- 手动执行SQL文件`sql/tianling_system.sql` [GitHub](https://github.com/huyagouban/tianLing-nest-admin-api/blob/main/sql/tianling_system.sql)/[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-api/blob/main/sql/tianling_system.sql)用于数据库初始化

### 下载依赖

::: code-group

```sh [npm]
$ npm i
```

```sh [pnpm]
$ pnpm i
```


:::

### 运行项目

后端端口号默认为[8080](http://localhost:8080)
::: code-group

```sh [后端]

$ npm run start:dev 
```

```sh [前端]
$ pnpm serve 
```


:::