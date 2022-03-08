<template>
  <div class="p-5" v-if="albumData">
    <Info :album="albumData" />

    <el-tabs class="mt-3" v-model="tab">
      <el-tab-pane lazy :label="`歌曲 ${songList.length}`" name="songs">
        <div class="flex text-xs text-gray-400 py-2">
          <div class="flex-auto">歌曲</div>
          <div class="w-1/3">歌手</div>
          <div class="w-20">时长</div>
        </div>
        <template v-for="song in songList" :key="song.id">
          <SongListItem :song="song" show-ar-name/>
        </template>
      </el-tab-pane>
      <el-tab-pane lazy label="评论" name="comments"/>
      <el-tab-pane lazy label="专辑详情" name="desc">
        <div class="text-xs text-slate-500 leading-7" style="white-space: pre-wrap" v-html="albumData?.description"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import type {Album} from "@/models/album";
import {useAlbum} from "@/utils/api";
import Info from "./Info.vue";
import {useRoute} from "vue-router";
import type {Song} from "@/models/song";
import SongListItem from "@/components/common/SongListItem.vue";

const albumData = ref<Album>()
const songList = ref<Song[]>([])
const tab = ref('songs')
const route = useRoute()

const id = Number(route.query.id)

onMounted(async () => {

  const {album, songs} = await useAlbum(id)
  albumData.value = album
  songList.value = songs
})

</script>
<style lang="scss">

</style>
