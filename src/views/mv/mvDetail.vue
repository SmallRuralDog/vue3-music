<template>
  <div class="p-5" v-if="mvUrl">
    <div class="flex gap-x-5">
      <div class="flex-1">
        <video class="aspect-video w-full" :src="mvUrl?.url" autoplay controls/>
      </div>
      <div class="hidden w-80 flex-shrink-0 xl:block">
        <div>大家都在看</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useMvUrl} from "@/utils/api";
import {useRoute} from "vue-router";
import {onMounted, onUnmounted, ref} from "vue";
import type {MvUrl} from "@/models/mv";
import {usePlayerStore} from "@/stores/player";

const route = useRoute()

const id = Number(route.query.id)

const {setPlay, setPause} = usePlayerStore()

const mvUrl = ref<MvUrl>()

onMounted(async () => {
  mvUrl.value = await useMvUrl(id)

  setPause()
})

onUnmounted(() => {
  setTimeout(() => {
    setPlay()
  }, 1000)
})


</script>
<style lang="scss">

</style>
