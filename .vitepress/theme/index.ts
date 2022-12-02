import DefaultTheme from "vitepress/theme"
// @ts-ignore:next-line
import Layout from "../../src/components/Layout.vue"
import Year from "../../src/components/Year.vue"
import "../../main.css"
import "uno.css"

export default {
  ...DefaultTheme,
  Layout,
  Year
}
