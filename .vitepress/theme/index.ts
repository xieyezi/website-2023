
import DefaultTheme from 'vitepress/theme'
import Layout from '../../src/components/Layout.vue'
import '../../main.css'
import 'uno.css'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that injects the slots
  Layout
}