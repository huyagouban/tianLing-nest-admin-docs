# 富文本组件

::: tip 提示
此组件基于[wangEditor 5](https://www.wangeditor.com/)二次进行封装。更多信息和拓展请参考官网   
:::

## 基本使用

```vue 
<template>
    <div>
        <el-card>
            <wangEditor :modelValue="modelValue" :editorHeight="400" @modelValueChange="modelValueChange"></wangEditor>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import wangEditor from "@/components/wangEditor/index.vue";
// 富文本内容
const modelValue = ref("123");
/**
 * @param value 富文本内容
 * @returns 富文本内容改变时的回调
 */
const modelValueChange = (value: string) => {
    modelValue.value = value;
}
</script>
```

## 参数

| 参数名称     | 参数类型 | 是否必传 | 默认值 | 描述             |
| ------------ | -------- | -------- | ------ | ---------------- |
| modelValue   | string   | 否       |        | 富文本内容       |
| editorHeight | number   | 否       | 400    | 富文本编辑器高度 |


## 方法


| 方法名称                | 描述                                  |
| ----------------------- | ------------------------------------- |
| modelValueChange    | 富文本内容改变时触发 |
