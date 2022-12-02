<script setup lang="ts">
defineProps({
  imgSrc: String
})
</script>

<template>
  <div h-full w-full>
   <img :src="imgSrc" w-full h-full op-40 />
  </div>
</template>
