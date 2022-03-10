<template>
  <div class="text-xl pb-5 font-bold">官方榜</div>
  <div class="grid grid-flow-row grid-cols-2 2xl:grid-cols-4 gap-5">
    <div v-for="item in topListDetailData.slice(0,4)" :key="item.id"
         class="flex bg-dc rounded-lg items-center cursor-pointer" @click="toPlaylist(item)">
      <CoverPlay :name="item.name" :pic-url="item.coverImgUrl" :play-count="item.playCount" class="w-36 flex-shrink-0"
                 show-play-count/>
      <div class="px-5 flex-1 flex-shrink-0 flex flex-col">
        <div class="text-xl font-bold">{{ item.name }}</div>
        <div class="text-xs text-main mt-2">
          <div v-for="(track,index) in item.tracks" class="mt-2">
            <div class="flex">
              <span class="mr-1">{{ index + 1 }}</span>
              <div class="flex-auto w-20 truncate">
                {{ track.first }} - {{ track.second }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-xl py-5 font-bold">特色榜</div>
  <div class="grid grid-flow-row grid-cols-5 2xl:grid-cols-10 gap-5">
    <div v-for="item in topListDetailData.slice(4)" :key="item.id" @click="toPlaylist(item)">
      <CoverPlay :name="item.name" :pic-url="item.coverImgUrl" :play-count="item.playCount"/>
      <div class="text-xs mt-2">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, toRefs} from "vue";
import {useRouter} from "vue-router";
import CoverPlay from "@/components/common/CoverPlay.vue";
import {useMusicStore} from "@/stores/music";
import type {TopListDetail} from "@/models/toplist_detail";

const {topListDetailData} = toRefs(useMusicStore());
const {getTopListDetailData} = useMusicStore();
const router = useRouter()
onMounted(async () => {
  await getTopListDetailData()
})
const toPlaylist = (topListDetail: TopListDetail) => {
  router.push({name: 'playlist', query: {id: topListDetail.id}})
}
</script>

<style lang="scss">

</style>
