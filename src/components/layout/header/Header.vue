<template>
  <div class="flex items-center justify-between drag h-14">
    <div class="flex items-center pl-5">
      <IconPark :icon="Left" :size="iconSize" :stroke-width="2" class="icon-button" @click="router.back()"/>
      <IconPark :icon="Right" :size="iconSize" :stroke-width="2" class="icon-button"/>
      <div class="search no-drag ml-2">
        <SearchPop/>
      </div>
    </div>
    <div class="flex items-center mr-5">
      <UserInfo class="mr-2"/>
      <IconPark :icon="Mail" :stroke-width="2" class="icon-button"/>
      <IconPark :icon="Platte" :stroke-width="2" class="icon-button"/>
      <IconPark :icon="HamburgerButton" :stroke-width="2" class="icon-button"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {HamburgerButton, Left, Mail, Platte, Right, Search} from '@icon-park/vue-next'
import {useRouter} from "vue-router";
import IconPark from "@/components/common/IconPark.vue";
import UserInfo from "@/components/layout/header/UserInfo.vue";
import {useSearchStore} from "@/stores/search";
import {storeToRefs} from "pinia";
import SearchPop from "@/components/layout/header/SearchPop.vue";

const iconSize = 22;

const router = useRouter();

const {showSearchView, searchKeyword} = storeToRefs(useSearchStore())

</script>
<style lang="scss" scoped>
.search {
  @apply text-xs;
  :deep(.el-input__inner) {
    @apply rounded-full text-xs bg-gray-100;
  }
}

.icon-button {
  @apply text-slate-500 p-2 cursor-pointer;
  @apply hover:text-emerald-400 ;
}
</style>
