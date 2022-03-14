<template>
  <div class="flex justify-end items-center  gap-x-2.5">
    <span class="text-xs">
      {{ useFormatDuring(currentTime) }} / {{ useFormatDuring(duration) }}
    </span>
    <IconPark :icon="TextMessage" size="18" :stroke-width="3" class="hover-text" title="歌词"/>
    <div class="flex items-center hover-text" @click="showPlayList=true">
      <IconPark :icon="MusicList" size="18" :stroke-width="3" class="hover-text" title="播放列表"/>
      <span class="text-xs">{{ playListCount }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {MusicList, TextMessage} from '@icon-park/vue-next'
import {useFormatDuring} from "@/utils/number";
import {usePlayerStore} from "@/stores/player";
import IconPark from "@/components/common/IconPark.vue";
import {storeToRefs} from "pinia";

const {currentTime, duration, playListCount, showPlayList} = storeToRefs(usePlayerStore())
</script>

<style lang="scss">

</style>
