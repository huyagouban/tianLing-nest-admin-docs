# 字典使用

## 基础使用

```vue 
<script setup lang="ts">
import { useDict } from "@/hooks/dict";
//@ts-ignore 不加这一句ts会报错
const { 字典类型 } = useDict('字典类型')
</script>
```