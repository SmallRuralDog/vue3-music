<template>
  <div class="mt-5">
    <div class="grid grid-flow-row gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5">
      <div v-for="(item,index) in list" :key="index" :class="{'item-1':index===0}"
           @click="router.push({name:Pages.mvDetail,query:{id:item.id}})">
        <CoverPlay :name="item.name" :pic-url="item.imgurl16v9" video :play-count="item.playCount" show-play-count/>
        <div class="mt-2 text-xs truncate hover-text">{{ item.name }}</div>
      </div>
    </div>
    <div class="flex justify-center py-5" v-if="list.length>0 && !pageData.noMore">
      <el-button :loading="pageData.loading" type="text" class="text-center  w-full" @click="loadMore">加载更多</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, reactive, ref} from "vue";
import {useArtistMv} from "@/utils/api";
import CoverPlay from "@/components/common/CoverPlay.vue";
import type {Mv} from "@/models/artist";
import {useRouter} from "vue-router";
import {Pages} from "@/router/pages";

const props = defineProps<{ id: number }>()
const list = ref<Mv[]>([]);

const router = useRouter();

const pageData = reactive({
  limit: 40,
  page: 1,
  loading: false,
  noMore: false,
})
const offset = computed(() => {
  if (pageData.page === 1) return 0;
  return list.value.length + pageData.limit
})

const getData = async () => {
  try {
    pageData.loading = true
    const {mvs} = await useArtistMv(props.id, pageData.limit, offset.value)
    if (pageData.page === 1) {
      list.value = mvs
    } else {
      list.value.push(...mvs)
    }
    if (mvs.length < pageData.limit) pageData.noMore = true;

  } catch (e) {
    pageData.page--
  }
  pageData.loading = false

}

const loadMore = () => {
  pageData.page++
  getData()
}


onMounted(async () => {
  await getData()
})

</script>
<style lang="scss">

</style>
