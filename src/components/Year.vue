<script setup lang="ts">
import { useNow, useDateFormat } from "@vueuse/core"

const year = useDateFormat(useNow(), "YYYY")
</script>

<template>
  <div absolute left--1rem top--2rem h30 pointer-events-none>
    <span text-8em op10 font-bold>
      {{ year }}
    </span>
  </div>
</template>
