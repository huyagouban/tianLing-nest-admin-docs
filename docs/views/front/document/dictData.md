# 字典组件

::: tip 提示
此组件仅可作为字典标签回显使用。
:::

## 基本使用

参考：[GitHub](https://github.com/huyagouban/tianLing-nest-admin-web/blob/main/src/views/monitor/operlog.vue)，[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-web/blob/main/src/views/monitor/operlog.vue)

```vue 
<dictData :dictDataOption="字典类型" :operType="字典键值" />
<script setup lang="ts">
import dictData from "@/components/dictData/dictData.vue"
import { useDict } from "@/hooks/dict";
//@ts-ignore 不加这一句ts会报错
const { 字典类型 } = useDict('字典类型')
</script>
```