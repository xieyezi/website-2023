<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'



const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark(true)">
    <span class="i-carbon:moon inline-block text-lg" />
  </button>
  <button @click="toggleDark(false)">
     <span class="i-carbon:sun inline-block text-lg" />
  </button>
</template>