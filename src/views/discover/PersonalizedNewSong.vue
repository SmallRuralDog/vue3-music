<template>
  <Title title="推荐新音乐"/>
  <div class="grid grid-flow-row grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-y-2.5 gap-x-5 cursor-pointer">
    <div v-for="(item,index) in personalizedNewSong" :key="index"
         class="hover:bg-gray-100 transition-all flex items-center" @click="play(item.id)">
      <img :src="item.picUrl" alt="" class="w-12 h-12 object-cover rounded "/>
      <div class="ml-2 text-xs flex-auto">
        <div class="text-xs">
          <span class="overflow-ellipsis text-gray-600">{{ item.name }}</span>
        </div>
        <div class="mt-1.5">
          <small class="text-gray-400">{{ item.song.artists[0].name }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, toRefs} from "vue";
import Title from "@/components/common/Title.vue";
import {usePlayerStore} from "@/stores/player";
import {useMusicStore} from "@/stores/music";


const {play} = usePlayerStore()
const router = useRouter();
const {personalizedNewSong} = toRefs(useMusicStore())
const {getPersonalizedNewSong} = useMusicStore()

onMounted(async () => {
  await getPersonalizedNewSong()
})
</script>

<style lang="scss">

</style>
