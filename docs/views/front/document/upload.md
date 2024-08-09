# 上传组件

::: tip 提示
此组件暂时仅可用于上传Excel文件，并且文件大小不能超过10M。后续会逐步增加功能，包括文件大小限制、文件类型限制、大文件上传等等。敬请期待...    
:::

## 基本使用

```vue 
<template>
    <div>
        <el-button  plain type="info" @click="handleImport">导入</el-button>
        <importUpload :dialogVisible="uploadOptions.dialogVisible" :title="uploadOptions.title" :isTemlate="uploadOptions.isTemlate"
            :uploadFile="uploadOptions.uploadFile" @importClose="handleImportClose"></importUpload>
    </div>
</template>

<script setup lang="ts">
import importUpload from "@/components/importUpload/importUpload.vue";
// 导入组件需要的参数
const uploadOptions = ref<UploadDialogProps>({
    dialogVisible: false,
    title: '',
    isTemlate: true,
    uploadFile: {
        temlateUrl: '',
        uploadUrl: '',
        autoUpload: false,
    }
})

/**
 * 导入按钮操作
 */
const handleImport = () => {
    uploadOptions.value.dialogVisible = true;
    uploadOptions.value.title = '导入组件示例';
}

/**
 * 导入组件关闭
 */
const handleImportClose = () => {
    uploadOptions.value.dialogVisible = false;
    uploadOptions.value.title = '';
}
</script>
```

## 参数

| 参数名称      | 参数类型          | 是否必传 | 默认值 | 描述                                            |
| ------------- | ----------------- | -------- | ------ | ----------------------------------------------- |
| dialogVisible | boolean           | 是       | false  | 显示状态                                        |
| title         | string            | 是       |        | 显示标题                                        |
| draggable     | boolean           | 否       | false  | 是否可拖拽                                      |
| width         | string            | 否       | 680px  | 弹窗宽度                                        |
| isTemlate     | boolean           | 否       | true   | 是否显示下载模板                                |
| uploadFile    | uploadFileOptions | 是       |        | 上传所需配置，参见下面uploadFileOptions详细说明 |

## uploadFileOptions

| 参数名称   | 参数类型 | 是否必传 | 默认值       | 描述               |
| ---------- | -------- | -------- | ------------ | ------------------ |
| temlateUrl | string   | 是       |              | 下载模板路径       |
| uploadUrl  | string   | 是       |              | 上传路径           |
| multiple   | boolean  | 否       | false        | 是否支持多选文件   |
| accept     | string   | 否       | '.xls,.xlsx' | 接受上传的文件类型 |
| autoUpload | boolean  | 否       | true         | 是否自动上传文件   |


## 方法


| 方法名称    | 描述               |
| ----------- | ------------------ |
| importClose | 导入组件关闭时触发 |

## 类型定义
::: details  类型定义

```ts
export interface UploadDialogProps {
    // 显示状态
    dialogVisible: boolean;
    // 显示标题
    title: string;
    // 是否可拖拽
    draggable?: boolean;
    // 弹窗宽度
    width?: string;
    //是否显示下载模板
    isTemlate?:boolean;
    uploadFile: uploadFileOptions;
}

export interface uploadFileOptions {
    // 下载模板路径
    temlateUrl: string;
    // 上传路径
    uploadUrl: string;
    // 是否支持多选文件
    multiple?: boolean;
    // 接受上传的文件类型
    accept?: string;
    // 是否自动上传文件
    autoUpload?:boolean;
}

```

:::