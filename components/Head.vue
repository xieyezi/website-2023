<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()">
    <!--<carbon-moon v-if="isDark" class="align-middle" />
    <carbon-sun v-else class="align-middle" />-->

    <span>{{ isDark ? 'Dark': 'Light' }}</span>
  </button>
</template>