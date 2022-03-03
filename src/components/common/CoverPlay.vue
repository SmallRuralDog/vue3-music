<template>
  <div class="cover-play-image" :class="{'aspect-square':!video,'aspect-video':video}">
    <el-image :src="picUrl" :alt="name" class="w-full bg-gray-50 object-cover"/>
    <div class="mask flex justify-center items-center">
      <IconPark :icon="PlayOne"
                theme="filled"
                class="text-white play-icon opacity-0 transition-opacity hover:text-teal-400" :size="50"
                @click="onPlay"/>
    </div>
    <div
        v-if="showPlayCount"
        class="play-count">
      <IconPark :icon="video?Play:Headset" class="mr-1" :size="12"/>
      <text>{{ useNumberFormat(playCount || 0) }}
      </text>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PlayOne, Play, Headset} from '@icon-park/vue-next'
import {useNumberFormat} from "@/utils/number";
import IconPark from "@/components/common/IconPark.vue";

defineProps<{
  picUrl: string
  playCount?: number
  name?: string
  showPlayCount?: boolean
  onPlay?: () => void,
  video?: boolean,
}>()
</script>

<style lang="scss">
.cover-play-image {
  @apply rounded-lg cursor-pointer transition-all relative overflow-hidden;
  @apply hover:-translate-y-1;
  .mask {
    @apply absolute inset-0 bg-black bg-opacity-0 transition-all duration-500;
  }

  .play-count {
    @apply absolute bottom-1 right-1 text-white text-xs bg-black bg-opacity-80 pl-2 pr-2 rounded-full pt-0.5 pb-0.5 flex items-center transition-all scale-90;
  }

  &:hover {
    .mask {
      @apply bg-opacity-50;
      .play-icon {
        @apply opacity-100;
      }
    }

    .play-count {
      @apply opacity-0;
    }
  }
}
</style>
