<template>
  <PlaylistHot @cat-change="catChange"/>
  <div class="py-5 text-xl ">{{pageData.cat}}歌单</div>

  <div class="gap-5  grid grid-flow-row grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7">
    <div v-for="(item,index) in list" :key="index" :class="{'item-1':index===0}"
         @click="router.push({name:Pages.playlist,query:{id:item.id}})">
      <CoverPlay :name="item.name" :pic-url="item.coverImgUrl" :play-count="item.playCount" show-play-count/>
      <div class="mt-2 text-xs text-main  leading-5 ">{{ item.name }}</div>
      <div class="mt-2 text-xs text-main  truncate text-dc">{{ item.creator.nickname }}</div>
    </div>
  </div>
  <div class="py-10" v-if="pageData.more">
    <el-button type="text" class="text-center  w-full" @click="loadMore" :loading="pageData.loading">加载更多</el-button>
  </div>
</template>

<script setup lang="ts">
import PlaylistHot from "@/views/music/category/PlaylistHot.vue";
import {onMounted, reactive, ref} from "vue";
import type {PlayListDetail} from "@/models/playlist";
import {useTopPlaylistHighquality} from "@/utils/api";
import CoverPlay from "@/components/common/CoverPlay.vue";
import {useRouter} from "vue-router";
import {Pages} from "@/router/pages";

const list = ref<PlayListDetail[]>()

const router = useRouter()

const pageData = reactive({
  init: false,
  loading: false,
  limit: 35,
  before: 0,
  more: false,
  cat: "全部"
})

const catChange = (cat: string) => {
  pageData.cat = cat
  pageData.before = 0;
  pageData.more = false;

  getData()
}

const getData = async () => {
  pageData.loading = true
  try {
    const {playlists, lasttime, more} = await useTopPlaylistHighquality({
      limit: pageData.limit,
      before: pageData.before,
      cat: pageData.cat,
    })
    if (pageData.before <= 0) {
      list.value = playlists;
    } else {
      list.value?.push(...playlists)
    }
    pageData.init = true
    pageData.loading = false

    pageData.before = lasttime;
    pageData.more = more;
  } catch (e) {

  }
}

const loadMore = () => {
  getData()
}

onMounted(getData)

</script>
<style lang="scss">

</style>
