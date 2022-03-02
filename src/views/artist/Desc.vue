<template>
  <div v-loading="!artistDesc" style="min-height: 200px;">
    <div v-if="artistDesc && artistDesc?.introduction?.length>0" v-for="item in artistDesc?.introduction">
      <div class="py-5 font-bold text-sm">{{ item.ti }}</div>
      <div class="text-xs text-slate-500 leading-7" style="white-space: pre-wrap" v-html="item.txt"/>
    </div>
    <el-empty description="暂无数据" v-else/>
  </div>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useArtistDesc} from "@/utils/api";
import type {ArtistDesc} from "@/models/artist_detail";

const props = defineProps<{ id: number }>()

const artistDesc = ref<ArtistDesc>()

onMounted(async () => {
  artistDesc.value = await useArtistDesc(props.id)
})
</script>
<style lang="scss">

</style>
