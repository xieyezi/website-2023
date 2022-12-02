import { defineConfig } from "vitepress"
import config from "../config"

export default defineConfig({
  title: "xieyezi",
  description: "blog",
  themeConfig: {
    repo: "/xieyezi/vitepress-blog",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "此内容有错误？",
    lastUpdated: "最后更新时间",
    sidebar: {
      "/": config
    }
  }
})
