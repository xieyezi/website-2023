<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'



const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div text-right>
    <span v-if="isDark" class="i-carbon:moon inline-block text-xl" @click="toggleDark()" />
    <span v-else class="i-carbon:sun inline-block text-xl" @click="toggleDark()" />
  </div>
</template>