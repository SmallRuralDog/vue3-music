<template>
  <div class="flex items-stretch">
    <img :src="album.picUrl" alt="" class="w-44 h-44 object-cover rounded-xl flex-shrink-0">
    <div class="pl-5 flex flex-col justify-between py-1 flex-1">
      <div class="flex flex-col justify-between flex-1">
        <div class="text-2xl font-bold ">{{ album.name }}</div>
        <div class="flex items-center text-xs text-gray-600">
          <span class="">{{ album.artist.name }}</span>
        </div>
        <div class="text-xs text-gray-500 leading-normal">
          {{ album.publishTime.toDate() }}
        </div>
      </div>
      <div class="justify-self-stretch mt-5 gap-x-2 flex items-center">
        <button class="w-32 button">
          <IconPark :icon="PlayOne" size="22" class="mr-1"/>
          <span>播放全部</span>
        </button>
        <button class="w-32 button-outline">
          <IconPark :icon="Like" size="18" class="mr-1"/>
          <span>收藏</span>
        </button>
        <button class="button-outline w-8">
          <IconPark :icon="More"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Like, More, PlayOne} from '@icon-park/vue-next'
import IconPark from "@/components/common/IconPark.vue";
import type {Album} from "@/models/album";

defineProps<{
  album: Album,
}>()
</script>
