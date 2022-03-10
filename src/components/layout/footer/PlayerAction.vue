<template>
  <div class="flex justify-end items-center  gap-x-2.5">
    <span class="text-xs">
      {{ useFormatDuring(currentTime) }} / {{ useFormatDuring(duration) }}
    </span>
    <IconPark :icon="TextMessage" size="18" :stroke-width="3" class="hover-text" title="歌词"/>
    <div class="flex items-center hover-text">
      <IconPark :icon="MusicList" size="18" :stroke-width="3" class="hover-text" title="播放列表"/>
      <span class="text-xs">40</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {MusicList, TextMessage} from '@icon-park/vue-next'
import {toRefs} from "vue";
import {useFormatDuring} from "@/utils/number";
import {usePlayerStore} from "@/stores/player";
import IconPark from "@/components/common/IconPark.vue";

const {currentTime, duration} = toRefs(usePlayerStore())
</script>

<style lang="scss">

</style>
