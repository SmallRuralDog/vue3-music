<template>
  <Title title="推荐电台" class="mt-5"/>
  <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-6 gap-5">
    <div v-for="item in djProgram" :key="item.id" @click="router.push({name:'video',query:{id:item.id}})">
      <CoverPlay :pic-url="item.picUrl" :name="item.name" :play-count="0"/>
      <div class="truncate text-xs mt-2">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, toRefs} from "vue";
import {useVideoStore} from "@/stores/video";
import CoverPlay from "@/components/common/CoverPlay.vue";
import {useRouter} from "vue-router";
import {usePersonalizedStore} from "@/stores/personalized";

const {djProgram} = toRefs(usePersonalizedStore())
const {getDjProgram} = usePersonalizedStore()

const router = useRouter()

onMounted(async () => {
  await getDjProgram()
})
</script>
<style lang="scss">

</style>
