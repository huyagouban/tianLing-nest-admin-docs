# 快速了解

## 项目简介

天凌系统是一款基于前端Vue+后端Nest.js的极速后台开发框架。

天凌系统是一个 企业级快速开发平台，基于前端所熟悉的技术组合（vue3、element-plus、TypeScript、Node.js、Nest.js，内置模块如：角色管理、用户管理、菜单及按钮授权、数据权限、日志管理等。

### 演示地址

正在搭建中......

### 前端代码地址  

[GitHub](https://github.com/huyagouban/tianLing-nest-admin-web)、[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-web) 

### 前端提问地址

[GitHub](https://github.com/huyagouban/tianLing-nest-admin-web/issues)

### 后端代码地址  

[GitHub](https://github.com/huyagouban/tianLing-nest-admin-api)、[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-api)

### 后端提问地址

[GitHub](https://github.com/huyagouban/tianLing-nest-admin-api/issues)

## 主要特性

- 完全响应式布局（支持电脑、平板、手机等所有主流设备）正在适配中....
- 支持按钮及数据权限，可自定义部门数据权限。
- 对常用js插件进行二次封装，使js代码变得简洁，更加易维护。
- 尽量松耦合，方便模块升级、增减模块。
- 国际化支持，服务端及客户端支持。
- 完善的操作记录以及登录记录。

## 技术选型

### 系统环境

- Node.js 版本 >= 20.14.0
- npm 版本 >= 10.7.0
- pnpm 版本 >= 9.1.4
- Mysql 版本 >= 8.0.37 for Win64 on x86_64
- Redis 版本 >= 5.0.14 for Win64


### 前端主要框架

- Vue 版本 >=3.4.21
- vite 版本 >=5.2.8
- element-plus 版本 >= 2.7.4
- typescript 版本 >= 5.4.0


### 后端主要框架

- Nest 版本 >=10.3.2
- typescript 版本 >=5.1.3

## 内置功能

- 用户管理：用户是系统操作者，该功能主要完成系统用户配置。
- 菜单管理：配置系统菜单，操作权限，按钮权限标识等。
- 角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。
- 字典管理：对系统中经常使用的一些较为固定的数据进行维护。。
- 操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
- 登录日志：系统登录日志记录查询包含登录异常。
- 在线用户：当前系统中活跃用户状态监控。
- 系统接口：apifox人工维护的接口文档。


::: warning 注意
天凌系统的默认口令 admin/admin123456，请大家在线上环境一定要修改超级管理员的密码。
:::