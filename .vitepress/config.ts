import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'xieyezi ',
  description: 'blog',
  themeConfig: {
    repo: '/xieyezi/vitepress-blog',
    logo: '/me.svg',
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "此内容有错误？",
    nav: [
      { text: "javascript", link: "/frontend/" },
      { text: "typescript", link: "/life/" },
      { text: "flutter", link: "/life/" },
      { text: "other", link: "/life/" },
    ]
  }
})