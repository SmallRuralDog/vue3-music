<template>
  <Title title="独家放送" class="mt-5"/>
  <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
    <div v-for="item in personalizedPrivateContent" :key="item.id" @click="router.push({name:Pages.mvDetail,query:{id:item.id}})">
      <CoverPlay :pic-url="item.sPicUrl" video :name="item.name"/>
      <div class="truncate text-xs mt-2">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Title from "@/components/common/Title.vue";
import {onMounted, toRefs} from "vue";
import {useVideoStore} from "@/stores/video";
import CoverPlay from "@/components/common/CoverPlay.vue";
import {useRouter} from "vue-router";
import {Pages} from "@/router/pages";

const {personalizedPrivateContent} = toRefs(useVideoStore())
const {getPersonalizedPrivateContent} = useVideoStore()
const router = useRouter()
onMounted(async () => {
  await getPersonalizedPrivateContent()
})

</script>
<style lang="scss">

</style>
