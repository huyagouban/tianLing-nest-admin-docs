# 响应拦截器

::: tip 提示
在业务开发中，通常需要对服务器返回的数据进行一些处理，例如：成功响应、异常响应、响应体格式化等。我们不希望在业务中重复的处理，因此我们使用拦截器进行统一处理。
:::

## 基本使用

::: code-group

```ts [成功响应]
import { AjaxResult } from "src/common/ajaxResult";

return AjaxResult.success();
```

```ts [异常响应]
import { AjaxResult } from "src/common/ajaxResult";

return AjaxResult.error()
```
:::


## 参数说明


```ts
export class AjaxResult<T = any> {
    /** 状态码 */
    status: number

    /** 响应数据 */
    data?: T

    /** 响应消息 */
    message?: string

    /** 响应状态 */
    success?: boolean
}

```

## 拦截器

::: code-group

```ts [成功拦截器]
// src/common/response.ts
import { Injectable, NestInterceptor, CallHandler, HttpStatus } from '@nestjs/common'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { AjaxResult } from "./ajaxResult";
@Injectable()
export class Response<T = any> implements NestInterceptor {
    intercept(context, next: CallHandler): Observable<AjaxResult<T>> {
        return next.handle().pipe(map(dataOf => {
            if (dataOf) {
                // 设置统一的成功状态码    
                const data = dataOf.data;
                const message = dataOf.message;
                const success = dataOf.success;
                const status = dataOf.status=='1'?200:dataOf.status;
                // 设置响应体
                return AjaxResult.success(data, message, success, status)
            }

        }))
    }
}
```

```ts [异常拦截器]
// src/common/catch.ts
/**
 *  定义捕获所有异常（Exception）和 错误（Error）
 *  的全局异常/错误过滤器，需在 app.module.ts 中注册该过滤器
 */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { Request, Response } from "express";
import { AjaxResult } from "./ajaxResult";

@Catch()
export class HttpFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) { }
    catch(exception: any, host: ArgumentsHost) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const code =  exception?.status
        const statusCode = exception instanceof HttpException ? (exception as HttpException).getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;              
        const resContents=AjaxResult.error(exception?.message,code?code:statusCode)
        // 使用不特定于平台（express 或 fastify）的方式（httpAdapter）返回响应内容
        httpAdapter.reply(response, resContents, statusCode);
    }
}

```
:::

## 相关源码

- 响应体格式化：[GitHub](https://github.com/huyagouban/tianLing-nest-admin-api/blob/main/src/common/ajaxResult.ts)/[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-api/blob/main/src/common/ajaxResult.ts)
- 成功拦截器：[GitHub](https://github.com/huyagouban/tianLing-nest-admin-api/blob/main/src/common/response.ts)/[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-api/blob/main/src/common/response.ts)
- 异常拦截器：[GitHub](https://github.com/huyagouban/tianLing-nest-admin-api/blob/main/src/common/catch.ts)/[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-api/blob/main/src/common/catch.ts)