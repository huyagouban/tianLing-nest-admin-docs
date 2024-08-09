# 通用方法

## 通用方法

### 获取在线浏览文件路径前缀 
```vue
<script setup lang="ts">
import { getFileUrl } from "@/hooks/url";
getFileUrl()//如：http://localhost:8080
</script>
```

### 下载文件
```vue
<script setup lang="ts">
import { downloadExcel } from "@/hooks/index"
downloadExcel(要下载的Buffer文件流, '自定义的文件名')
</script>
```

### 时间格式化 
```vue
<script setup lang="ts">
import { parseTime } from "@/hooks/index"
parseTime(要格式化的时间)
</script>
```

## 令牌方法

### 设置令牌


```vue
<script setup lang="ts">
import { setToken } from "@/hooks/auth";
setToken(令牌)
</script>
```

### 获取令牌


```vue
<script setup lang="ts">
import { getToken } from "@/hooks/auth";
getToken()
</script>
```

### 删除令牌


```vue
<script setup lang="ts">
import { removeToken } from "@/hooks/auth";
removeToken()
</script>
```

## 提示方法

### 轻提示

::: tip 提示
以下方法基于 [element-plus Message 消息提示](https://element-plus.org/zh-CN/component/message.html)二次封装，详细使用方法请参照官网
:::

::: code-group

```vue [成功提示]
<script setup lang="ts">
import { msgSuccess } from "@/hooks/modal";
msgSuccess(提示信息)
</script>
```

```vue [失败提示]
<script setup lang="ts">
import { msgError } from "@/hooks/modal";
msgError(提示信息)
</script>
```

:::

### 弹窗提示

::: tip 提示
以下方法基于 [element-plus MessageBox 消息弹框](https://element-plus.org/zh-CN/component/message-box.html)二次封装，详细使用方法请参照官网
:::

::: code-group

```vue [确认提示]
<script setup lang="ts">
import { confirm } from "@/hooks/modal";
 confirm(提示标题).then(() => {})
</script>
```

```vue [提交弹窗]
<script setup lang="ts">
import { prompt } from "@/hooks/modal";
prompt(提示信息标题, 提示标题, 正则表达式, 校验提示).then(() => { })
</script>
```
```vue [登录过期提示]
<script setup lang="ts">
import { expireElMessageBox } from "@/hooks/modal";
expireElMessageBox()
</script>
```

:::

## 校验方法

### 判断path是否为外链

```vue 
<script setup lang="ts">
import { isExternal } from "@/utils/validate";
isExternal(链接地址)
</script>
```

## 请求方法

::: tip 提示
相关代码请看 [GitHub](https://github.com/huyagouban/tianLing-nest-admin-web/tree/main/src/api),[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-web/tree/main/src/api)
:::

### 示例

::: code-group

```ts [请求封装]
import request from "@/utils/request";

/**
 * 
 * @returns 获取验证码
 */
export function getCaptchaSvg() {
    return request({
        url: 'auth/captcha',
        method: 'get',
    })
}
```

```vue [使用方法]
<script setup lang="ts">
import { getCaptchaSvg } from "@/api/common/code";
 getCaptchaSvg().then(res => { })
</script>
```

:::