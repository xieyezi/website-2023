<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"
import { useLocale } from "../hooks/useLocale"

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { locale, setLocale } = useLocale()
const isIndex = window.location.pathname === "/" || window.location.pathname === "/index_CN.html"
</script>

<template>
  <div text-right pl-4>
    <span v-if="isIndex">
      <span v-if="locale === 'en'" class="i-icon-park-outline-english inline-block text-lg mr-3" @click="setLocale('cn')" />
      <span v-else class="i-icon-park-outline-chinese inline-block text-lg mr-3" @click="setLocale('en')" />
    </span>
    <span v-if="isDark" class="i-carbon:moon inline-block text-lg" @click="toggleDark()" />
    <span v-else class="i-carbon:sun inline-block text-lg" @click="toggleDark()" />
  </div>
</template>
