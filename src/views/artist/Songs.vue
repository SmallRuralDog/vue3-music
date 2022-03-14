<template>
  <div class="mt-5 flex items-center justify-between">
    <div class="flex gap-x-2">
      <button class="w-28 button-outline button-sm" @click="playAll">
        <IconPark :icon="PlayOne" class="mr-1" size="14"/>
        播放全部
      </button>
      <button class="w-28 button-outline button-sm">
        <IconPark :icon="Download" class="mr-1" size="12"/>
        下载
      </button>
      <button class="w-28 button-outline button-sm">
        <IconPark :icon="FullSelection" class="mr-1" size="12"/>
        批量操作
      </button>
    </div>
    <div class="gap-x-5 flex mr-10 text-xs">
      <div class="hover-text" :class="{'text-emerald-400':pageData.order==='hot'}" @click="setOrder('hot')">最热</div>
      <div class="hover-text" :class="{'text-emerald-400':pageData.order==='time'}" @click="setOrder('time')">最新</div>
    </div>
  </div>
  <div class="mt-2">
    <div class="flex text-xs text-gray-400 py-2">
      <div class="flex-auto">歌曲</div>
      <div class="w-1/3">专辑</div>
      <div class="w-20">时长</div>
    </div>
    <div class="text-sm">
      <template v-for="song in songList" :key="song.id">
        <song-list-item :show-ar-name="false" show-al-name :song="song"/>
      </template>
    </div>
    <div class="flex justify-center py-5" v-if="songList.length>0 && !pageData.noMore">
      <el-button :loading="pageData.loading" type="text" class="text-center  w-full" @click="loadMore">加载更多</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PlayOne, Download, FullSelection} from '@icon-park/vue-next'
import {computed, onMounted, reactive, ref} from "vue";
import type {Song} from "@/models/song";
import {useArtistSongs} from "@/utils/api";
import SongListItem from "@/components/common/SongListItem.vue";
import IconPark from "@/components/common/IconPark.vue";
import {usePlayerStore} from "@/stores/player";

const props = defineProps<{ id: number }>()

const songList = ref<Song[]>([]);

const {pushPlayList, play} = usePlayerStore()

const playAll = () => {
  pushPlayList(false, ...songList.value)
  play(songList.value.first().id)
}

const pageData = reactive({
  order: 'hot',
  limit: 20,
  page: 1,
  loading: false,
  noMore: false,
})

const offset = computed(() => {
  if (pageData.page === 1) return 0;
  return songList.value.length + pageData.limit
})

const getData = async () => {
  try {
    pageData.loading = true
    const {songs} = await useArtistSongs(props.id, pageData.order, pageData.limit, offset.value)
    if (pageData.page === 1) {
      songList.value = songs
    } else {
      songList.value.push(...songs)
    }
    if (songs.length < pageData.limit) pageData.noMore = true
  } catch (e) {
    pageData.page--
  }
  pageData.loading = false

}

const loadMore = () => {
  pageData.page++
  getData()
}

const setOrder = (o: 'time' | 'hot') => {
  pageData.page = 1
  pageData.order = o
  getData()
}

onMounted(async () => {
  await getData()
})

</script>
<style lang="scss">

</style>
