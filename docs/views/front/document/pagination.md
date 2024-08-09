# 分页组件

::: tip 提示
此组件基于[element-plus Pagination 分页](https://element-plus.org/zh-CN/component/pagination.html)二次进行封装。更多信息和拓展请参考官网   
:::

## 基本使用

```vue 
<template>
    <div>
        <pagination :currentPage="seachForm.currentPage" :pageSize="seachForm.pageSize" :total="total"
                @paginationSizeChange="paginationSizeChange" @paginationCurrentChange="paginationCurrentChange">
        </pagination>
    </div>
</template>

<script setup lang="ts">
import pagination from "@/components/pagination/pagination.vue";
// 搜索数据
const seachForm = ref<seachFormType>({
    currentPage: 1,
    pageSize: 10,
});
/**	总条目数 */
const total = ref<number>(0);

/**page-size 每页显示条目个数改变时触发 */
const paginationSizeChange = (pageSize: number) => {
    seachForm.value.pageSize = pageSize;
    ...
}
/**current-page 当前页数改变时触发 */
const paginationCurrentChange = (currentPage:number) => {
    seachForm.value.currentPage = currentPage;
    ...
}
</script>
```

## 参数

| 参数名称    | 参数类型          | 是否必传 | 默认值                                    | 描述                         |
| ----------- | ----------------- | -------- | ----------------------------------------- | ---------------------------- |
| currentPage | number            | 否       | 1                                         | 当前页数                     |
| pageSize    | number            | 否       | 10                                        | 每页条数                     |
| pageSizes   | number[]          | 否       | [10, 20, 50, 100]                         | 每页显示个数选择器的选项设置 |
| small       | boolean           | 否       | true                                      | 是否使用小型分页样式         |
| disabled    | boolean           | 否       | false                                     | 是否禁用分页                 |
| background  | uploadFileOptions | 否       | true                                      | 是否为分页按钮添加背景色     |
| layout      | string            | 否       | "total, sizes, prev, pager, next, jumper" | 组件布局，子组件名用逗号分隔 |
| total       | number            | 否       | 0                                         | 总条目数                     |

## 方法


| 方法名称                | 描述                                  |
| ----------------------- | ------------------------------------- |
| paginationSizeChange    | page-size  每页显示条目个数改变时触发 |
| paginationCurrentChange | current-page 当前页数改变时触发       |
