# 异步上下文

在 Node.js 服务开发中，把用户信息保存在请求对象上是一种常见的方式。为了不在类之间传递请求对象，所以集成了 [Async Local Storage](https://docs.nestjs.com/recipes/async-local-storage) 便于获取请求信息。

## 请求上下文

获取当前请求和响应对象。

```ts
import { Injectable } from '@nestjs/common'
import { RequestContext } from "src/utils/context/request.context";

@Injectable()
export class AppService {
  constructor(private requestContext: RequestContext) {}

  getHello() {
    this.requestContext.getRequest()
    this.requestContext.getResponse()
  }
}
```

## 安全上下文

获取当前已认证的用户信息。

```ts
import { Injectable } from '@nestjs/common'
import { SecurityContext } from "src/utils/context/security.context";

@Injectable()
export class AppService {
  constructor(private securityContext: SecurityContext) {}

  getHello() {
    this.securityContext.getToken()
  }
}
```

## 相关源码

- [GitHub](https://github.com/huyagouban/tianLing-nest-admin-api/tree/main/src/utils/context)/[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-api/blob/main/src/utils/context)
