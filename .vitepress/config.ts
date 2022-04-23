import { defineConfig } from 'vitepress'
import { frontEnd, notes, other } from '../config'

export default defineConfig({
  title: 'xieyezi ',
  description: 'blog',
  themeConfig: {
    repo: "/xieyezi/vitepress-blog",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "此内容有错误？",
    lastUpdated: "最后更新时间",
    sidebar: {
      "/front-end/": [
        {
          text: "前端",
          children: [
            {
              text: "从CJS和ESM读懂package.json",
              link: "/front-end/从CJS和ESM读懂package.json.html",
            },
            {
              text: "快速开始",
              link: "/guide/",
            },
            {
              text: "特性",
              link: "/guide/features",
            },
            {
              text: "模拟对象",
              link: "/guide/mocking",
            },
            {
              text: "调试",
              link: "/guide/debugging",
            },
            /* TODO
            {
              text: 'Using Plugins',
              link: '/guide/using-plugins'
            },
            */
            {
              text: "源码内联测试",
              link: "/guide/in-source",
            },
            {
              text: "与其他测试框架对比",
              link: "/guide/comparisons",
            },
            {
              text: "迁移指南",
              link: "/guide/migration",
            },
          ],
        },
      ],
    },
    //sidebar: {
    //  "/":[
    //    {
    //      text: "开始",
    //      children: [

    //      ]
    //    }
    //  ]
    //  //"/notes/": notes.notes,
    //  //"/other/git/": other.git,
    //  //"/other/docker/": other.docker,
    //  //"/other/life/": other.life,
    //}
  }
})