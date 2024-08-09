# 权限使用

## 使用方法

::: code-group

```vue [单个权限验证]
<el-link v-hasPermi="['权限key']" ></el-link>
```

```vue [多个权限验证，满足一个则显示]
<el-link v-hasPermi="['权限key1','权限key2']" ></el-link>
```
```vue [多个权限验证，全部满足则显示]
<el-link v-hasPermi="['权限key1,权限key2']" ></el-link>
```
:::
