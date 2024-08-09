# 系统权限

::: tip 提示
在管理系统中通常需要不同的角色做不同的事情，也就有了不同的功能权限。项目实现了基于`JWT`的身份认证。
:::

## 公开权限

### @public()
公开：不需要认证就能进入该方法。

```ts

import { Public } from "src/utils/decorator/public.decorator";

export class AppController {
  @Public()
  getHello() {}
}

```
## 权限认证

### @RequirePermissions()

```ts

import { RequirePermissions } from "src/utils/decorator/require-permissions.decorator";

export class AppController {
    // 必须拥有 system:user:add 权限才可访问
  @RequirePermissions('system:user:add')
  getHello() {}

  // 必须拥有 system:user:add 和 system:user:edit 权限才可访问
  @RequirePermissions(['system:user:add', 'system:user:edit'])
  getHello() {}

  // 必须拥有 system:user:add 或 system:user:edit 权限才可访问
  @RequirePermissions(['system:user:add', 'system:user:edit'], Logical.OR)
  getHello() {}
}

```

