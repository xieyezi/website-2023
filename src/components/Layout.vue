<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme"
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #navbar-search>
      <Head />
    </template>
  </Layout>
</template>
