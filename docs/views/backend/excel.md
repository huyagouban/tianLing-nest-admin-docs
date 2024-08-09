# 导入导出

在实际开发中经常需要使用导入导出功能来加快数据的操作。在项目中可以使用装饰器来完成此项功能。在需要被导入导出的实体类属性添加装饰器。基于 [exceljs](https://github.com/exceljs/exceljs) 封装。

## 基本使用流程

### 前端

::: code-group

```ts [导出]

//导出接口
export function getUserExcelDownload(params?: userExcelDownloadType) {
    return request({
        url: '/user/excel/download',
        method: 'get',
        params
    })
}

// 调用
 getUserExcelDownload(data).then((res) => {
     downloadExcel(res.data.data, '用户信息')
 })

```

```md [导入]

请参考：前端手册[上传组件](/views/front/document/upload)

```

:::

### 后端


::: code-group
```ts [导出]
import { DownloadExcelService } from "src/utils/ExcelService/ExcelService.utils";
 /**导出excel */
async downloadExcel(userId: number[]): Promise<AjaxResult> {    
    //1.查询数据
    //2.导出excel    
    const list = await this.user.find({
      where: {
        userId: In(userId)
      }
    });
    const excelList = list.map(item => {
      delete item.createDate
      delete item.updateDate
      delete item.userId
      item.sex = item.sex === '1' ? '男' : item.sex === '1' ? '女' : ''
      item.status = item.status === '1' ? '正常' : '停用'
      return Object.values(item)
    })
    const excelService = new DownloadExcelService();
    const excelFile = await excelService.exportDataToExcel(excelList, 'Sheet1', 表格表头, '文件名');
    return AjaxResult.success(excelFile)
}

```

```ts [导入]

 // 导入excel 
  async importExcel(file: Express.Multer.File): Promise<AjaxResult> {
    try {
      // 确保文件是Excel文件
      if (!file.originalname.endsWith('.xlsx') && !file.originalname.endsWith('.xls')) {
        AjaxResult.error('请上传excel文件');
      }
      // 将上传的文件临时保存到磁盘
      const tempFilePath = `./uploads/files/${file.originalname}`;
      await fs.move(file.path, tempFilePath);
      // 导入Excel数据
      const excelService = new DownloadExcelService()
      const result = await excelService.importExcel(tempFilePath);

      // 处理数据或保存到数据库...
      const importExcelList = result.map(item => {
        return {
          nickName: item[0],
          phoneNumber: item[1],
          email: item[2].text ? item[2].text : item[2],
          sex: item[3] === '男' ? '1' : item[3] === '女' ? '0' : item[4],
          userName: item[4],
          password: item[5],
          status: item[6] === '正常' ? '1' : item[6] === '停用' ? '0' : '',
          remark: item[7],
        }
      })
      const data = await this.user.save(importExcelList)
      // 清理临时文件（根据实际情况调整）
      await fs.remove(tempFilePath);
      return AjaxResult.success();
    } catch (error) {
      return AjaxResult.error(error.message);
    }
}

```

:::


### 参数说明

::: code-group

```ts [导出]
class exportDataToExcel={
    //要导出的数据数组，格式为[['1', '2']]。
    data: any[];
    //工作表的名称，默认为 'Sheet1'。
    sheetName: string = 'Sheet1';
    //表头数组，定义每列的标题，格式为为 ['id','name']。
    header: string[];
    //导出文件的名称（不含扩展名）。
    fileName: string;
}

```

```ts [导入]
class importExcel={
    // 文件路径
    filePath:string
}

```

:::

## 相关源码

- [GitHub](https://github.com/huyagouban/tianLing-nest-admin-api/blob/main/src/utils/ExcelService/ExcelService.utils.ts)/[Gitee](https://gitee.com/lutianling/tianLing-nest-admin-api/tree/main/src/utils/ExcelService/ExcelService.utils.ts)
