# 内嵌组件

::: tip 提示
此组件基于iframe二次封装用作内嵌页面使用。
:::

## 基本使用

```vue 
<template>
    <div>
        <TLIFrame src="要内嵌的链接"></TLIFrame>
    </div>
</template>

<script setup lang="ts">
import TLIFrame from "@/components/iFrame/index.vue";
</script>
```