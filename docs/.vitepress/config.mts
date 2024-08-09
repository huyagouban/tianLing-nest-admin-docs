import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  base: '/tianLing-nest-admin-docs/',
  title: "天凌后台管理系统文档",
  description: "使用天凌系统快速构建后台管理系统",
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/public/logo.png' }]
  ],
  themeConfig: {
    logo: '/public/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '系统文档', link: '/views/about', activeMatch: '/views' },
      { text: 'Gitee', link: 'https://gitee.com/lutianling/tianLing-nest-admin-api',},
      { text: 'GitHub', link: 'https://gitee.com/lutianling/tianLing-nest-admin-api',},
    ],

    sidebar: [
      {
        text: '系统介绍',
        items: [
          { text: '介绍', link: '/views/about' },
          { text: '快速了解', link: '/views/know' },
          { text: '本地开发', link: '/views/development' },
          { text: '环境部署🚧', link: '/views/deploy' },
          { text: '贡献指南🚧', link: '/views/contribution' },
          { text: '更新日志', link: '/views/changelog' },
        ]
      },
      {
        text: '前端手册',
        items: [
          { text: '通用方法', link: '/views/front/generic' },
          { text: '权限使用', link: '/views/front/power' },
          { text: '字典使用', link: '/views/front/dict' },
          { text: '图标使用', link: '/views/front/icon' },
          { text: '字典组件', link: '/views/front/document/dictData' },
          { text: '内嵌组件', link: '/views/front/document/iFrame' },
          { text: '上传组件', link: '/views/front/document/upload' },
          { text: '分页组件', link: '/views/front/document/pagination' },   
          { text: '富文本组件', link: '/views/front/document/wangEditor' },                   
        ]
      },
      {
        text: '后端手册',
        items: [
          { text: '系统权限', link: '/views/backend/power' },                   
          { text: '系统日志', link: '/views/backend/logger' },                   
          { text: '系统接口🚧', link: '/views/backend/apifox' },                   
          { text: '参数校验🚧', link: '/views/backend/validator' }, 
          { text: '响应拦截器', link: '/views/backend/response' }, 
          { text: '异步上下文', link: '/views/backend/context' }, 
          { text: '导入导出', link: '/views/backend/excel' }, 
          { text: '上传下载', link: '/views/backend/upload' },           
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    // ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level:'deep'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 陆天凌`
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
