<template>
  <div class="mt-5">
    <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-5 gap-5 2xl:grid-cols-8">
      <div v-for="(item,index) in list" :key="index" :class="{'item-1':index===0}"
           @click="router.push({name:'album',query:{id:item.id}})">
        <CoverPlay :name="item.name" :pic-url="item.picUrl" :play-count="0"/>
        <div class="mt-2 text-xs truncate">{{ item.name }}</div>
        <div class="mt-1 text-xs text-slate-400 truncate">{{ item.publishTime.toDate() }}</div>
      </div>
    </div>
    <div class="flex justify-center py-5" v-if="list.length>0 && !pageData.noMore">
      <el-button :loading="pageData.loading" type="text" class="text-center  w-full" @click="loadMore">加载更多</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, reactive, ref} from "vue";
import {useArtistAlbum} from "@/utils/api";
import type {Album} from "@/models/album";
import CoverPlay from "@/components/common/CoverPlay.vue";
import {useRouter} from "vue-router";

const router = useRouter()


const props = defineProps<{ id: number }>()
const list = ref<Album[]>([]);

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
    const {hotAlbums} = await useArtistAlbum(props.id, pageData.limit, offset.value)
    if (pageData.page === 1) {
      list.value = hotAlbums
    } else {
      list.value.push(...hotAlbums)
    }
    if (hotAlbums.length < pageData.limit) {
      pageData.noMore = true
    }
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
