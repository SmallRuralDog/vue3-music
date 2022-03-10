<template>
  <div class="flex items-stretch">
    <img :src="playlist.coverImgUrl" alt="" class="w-44 h-44 object-cover rounded-xl flex-shrink-0">
    <div class="pl-5 flex flex-col justify-between py-1 flex-1">
      <div>
        <div class="text-2xl font-bold">{{ playlist.name }}</div>
        <div class="flex items-center text-xs text-dc pb-2 pt-3">
          <el-avatar :src="playlist.creator.avatarUrl" size="small" round/>
          <span class="ml-2">{{ playlist.creator.nickname }}</span>
          <div class="ml-5 flex text-dc">
            <div class="ml-2 hover-text" v-for="tag in playlist.tags" :key="tag">#{{ tag }}</div>
          </div>
        </div>
        <div class="text-xs text-gray-500 leading-normal">
          <MoreText :text=" playlist.description" :end="90"/>
        </div>
      </div>
      <div class="justify-self-stretch mt-5 gap-x-2 flex items-center">
        <el-button class="w-32 border-0 text-white" round type="primary">
          <IconPark :icon="PlayOne" size="22" class="mr-1"/>
          <span>播放全部</span>
        </el-button>
        <el-button class="w-32" plain secondary round>
          <IconPark :icon="Like" size="18" class="mr-1"/>
          <span>收藏</span>
        </el-button>
        <el-button circle class="bg-gray-100" plain secondary :icon="More">
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PlayOne, Like, More} from '@icon-park/vue-next'

import MoreText from "@/components/common/MoreText.vue";
import IconPark from "@/components/common/IconPark.vue";
import type {PlayListDetail} from "@/models/playlist";

defineProps<{
  playlist: PlayListDetail,
}>()
</script>
