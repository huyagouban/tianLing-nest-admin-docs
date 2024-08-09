# 图标使用

::: tip 提示
项目集成了两种字体图标：`本地字体图标`和`element-plus 图标库`，这两种图标都可以在项目中自由的使用。当然，你也可以自行拓展。
:::

## 本地字体图标

```vue 
<svg-icon :iconClass="字体图标名称" className="icon"></svg-icon>

```

## element-plus 图标库

参考官网[element-plus 图标库](https://element-plus.org/zh-CN/component/icon.html)

## 同时使用本地字体图标和 element-plus
                                
```vue 
<tl-icon  :iconName="字体图标名称" :iconType="字体图标类型"></tl-icon>

```
::: warning 提示
常见问题可参考：我的[csdn](https://blog.csdn.net/shoping110/article/details/140887177?spm=1001.2014.3001.5501)
:::
