<template>
  <div class="text-xl text-gray-800 py-3 mt-2">{{ title }}</div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style lang="scss">

</style>
