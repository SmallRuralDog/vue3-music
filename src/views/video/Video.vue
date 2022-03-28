<template>
  <div class="p-5 video-page">
    <div class="flex items-center justify-between">
      <el-popover width="60%" placement="bottom-start" popper-style="padding:0;">
        <template #reference>
          <button class="button-outline px-5">
            <span class="mr-2">全部视频</span>
            <IconPark :icon="Right"/>
          </button>
        </template>
        <div>
          <div class="text-xl pt-5 pl-5 hover-text" @click="idChange(0)">全部视频</div>
          <div class="h-96 py-5 pl-5">
            <ElScrollbar>
              <div class="text-xs gap-5 grid grid-flow-row grid-cols-5">
                <div
                    class="hover-text"
                    :class="{'text-active':pageData.id===item.id}"
                    v-for="item in videoGroup"
                    :key="item.id"
                    @click="idChange(item.id)"
                >{{ item.name }}
                </div>
              </div>
            </ElScrollbar>
          </div>
        </div>
      </el-popover>

      <div class="text-xs flex gap-x-4">
        <div
            class="hover-text"
            @click="idChange(item.id)"
            :class="{'text-active':pageData.id===item.id}"
            v-for="item in videoGroup.slice(0, 8)"
            :key="item.id"
        >{{ item.name }}
        </div>
      </div>
    </div>
    <div class="grid grid-flow-row grid-cols-3 gap-5 mt-5">
      <div v-for="{data} in videoList" :key="data.vid">
        <CoverPlay :pic-url="data.coverUrl" video/>
        <div class="text-xs mt-3 truncate">{{ data.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Right} from "@icon-park/vue-next"
import {useVideoStore} from '@/stores/video';
import {onMounted, reactive, ref, toRefs} from 'vue';
import IconPark from '@/components/common/IconPark.vue';
import type {Video} from "@/models/video";
import {useVideoGroup} from "@/utils/api";
import CoverPlay from "@/components/common/CoverPlay.vue";


const {videoGroup} = toRefs(useVideoStore())
const {getVideoGroup} = useVideoStore()

const videoList = ref<Video[]>([])

const pageData = reactive({
  page: 1,
  id: 0,
})

const getData = async () => {
  videoList.value = await useVideoGroup(pageData.id, pageData.page - 1)
}

const idChange = (id: number) => {
  console.log(id)
  pageData.id = id
  pageData.page = 1
  getData()
}

onMounted(() => {
  getVideoGroup()

  getData()
})

</script>
<style lang="scss">
</style>
