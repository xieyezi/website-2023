import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'xieyezi ',
  description: 'blog',
  themeConfig: {
    repo: '/xieyezi/vitepress-blog',
    logo: "https://s2.loli.net/2022/04/23/RZI1d4K3fQgESx8.png",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "此内容有错误？",
    nav: [
      { text: "前端", link: "/frontend/" },
      { text: "生活", link: "/life/" },
    ]
  }
})