# 系统日志
::: tip 提示
在管理系统中通常需要各种日志，也就有了不同的日志。
:::

## 登录日志

在实际开发中，对于某些关键业务，我们通常需要记录登录信息，不论成功或失败。

- 此功能系统已内置，无需做额外的配置。
- 如需关闭或拓展，请查看源码自行探索。
- 相关源码：[GitHub](https://github.com/huyagouban/tianLing-nest-admin-api/tree/main/src/api/monitor/login-log)/[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-api/tree/main/src/api/monitor/login-log)


## 操作日志

在实际开发中，对于某些关键业务，我们通常需要记录该操作的内容，一个操作调一次记录方法，每次还得去收集参数等等，会造成大量代码重复。我们希望代码中只有业务相关的操作，在项目中使用装饰器来完成此项功能。

### 基本使用

在需要被记录日志的请求方法上添加 `@Log` 装饰器，使用方法如下：

```ts
import { Log } from "src/utils/decorator/log.decorator";
import { OperType } from "src/common/class/oper-log-enums";
export class AppController {
   // @Log({ title: '操作名称', operType:操作类型 })
  @Log({ title: '用户管理', operType: OperType.INSERT })
  async add(){}
}
```

### 参数说明

```ts
export class LogOptions {
  /**
   * 日志标题
   */
  title: string

  /**
   * 操作类型
   */
  operType?: OperType = OperType.OTHER

  /**
   * 是否保存请求的参数
   */
  isSaveRequestData?: boolean = true

  /**
   * 是否保存响应的参数
   */
  isSaveResponseData?: boolean = true
}

```

### 自定义操作类型或拓展操作类型

1. 在 `OperType` 中新增业务操作类型。

```ts
enum OperType {
  // ...

  /**
   * 测试
   */
  TEST==11,
}

```
2. 在 `sys_dict_data` 字典数据表中添加操作类型。


3. 在 `Controller` 中使用注解。

```ts{3}
import { Log } from "src/utils/decorator/log.decorator";
import { OperType } from "src/common/class/oper-log-enums";
export class AppController {
  @Log({ title: '用户管理', operType: OperType.INSERT })
  async add(){}
}
```

### 相关源码

- 装饰器源码：[GitHub](https://github.com/huyagouban/tianLing-nest-admin-api/blob/main/src/utils/decorator/log.decorator.ts)/[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-api/blob/main/src/utils/decorator/log.decorator.ts)
- 操作类型枚举：[GitHub](https://github.com/huyagouban/tianLing-nest-admin-api/blob/main/src/common/class/oper-log-enums.ts)/[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-api/blob/main/src/common/class/oper-log-enums.ts)

