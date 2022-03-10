<template>
  <div class="flex items-center cursor-pointer hover-text">
    <ElAvatar size="small" round class="bg-gray-200"></ElAvatar>
    <span class="text-xs ml-1.5" @click="showModal=true">点击登录</span>
  </div>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {ref} from "vue";


const router = useRouter()
const showModal = ref(false)
const phone = ref('')
const password = ref('')


</script>

<style lang="scss">

</style>
