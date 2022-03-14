<template>
  <div class="flex p-2.5 border-b border-b-stone-50 dark:border-b-stone-800 hover-bg-view" :class="{'active':active}">
    <el-image lazy :src="song.al?.picUrl+'?param=80y80'" class="aspect-square w-10 flex-shrink-0"/>
    <div class="ml-2 text-xs h-10 flex flex-1 w-1">
      <div class="flex flex-1 flex-col justify-between truncate">
        <div class="flex">
          <div class="truncate">{{ song.name }}</div>
          <IconPark v-if="song.mv>0" class="ml-2 text-orange-400 cursor-pointer" size="16"
                    :icon="Youtube" @click="router.push({name:Pages.mvDetail,query:{id:song.mv}})"/>
        </div>
        <div class="truncate">{{ song.ar.first().name }}</div>
      </div>
      <div class="flex-shrink-0 ml-5 flex items-center justify-end">
        <div class="truncate">
          <small>{{ useFormatDuring(song.dt / 1000) }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Song} from "@/models/song";
import IconPark from "@/components/common/IconPark.vue";
import {Youtube} from '@icon-park/vue-next'
import {useRouter} from "vue-router";
import {useFormatDuring} from '@/utils/number'
import {Pages} from "@/router/pages";

const router = useRouter()
defineProps<{
  song: Song,
  active: boolean
}>()
</script>
<style lang="scss" scoped>
.active {
  @apply border-l-2 border-l-emerald-400 text-emerald-400;
}
</style>
