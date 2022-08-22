<template>
  <ElScrollbar>
    <div class="mt-10 pl-6 pr-6 space-y-1.5" v-for="menuItem in menus">
      <div class="menu-title text-main">{{ menuItem.name }}</div>
      <div
          class="menu-item hover-bg-main text-main"
          v-for="menu in menuItem.menus"
          :key="menu.key"
          :class="{ 'active': currentKey === menu.key }"
          @click="click(menu)"
      >
        <IconPark :icon="menu.icon" size="18" :theme="menu.theme"/>
        <span class="ml-1">{{ menu.name }}</span>
      </div>
    </div>
  </ElScrollbar>
</template>

<script setup lang="ts">


import {useMenu} from "@/components/layout/menu/useMenu";
import IconPark from "@/components/common/IconPark.vue";

const {menus, currentKey, click} = useMenu()

</script>


<style lang="scss" scoped>
.menu-title {
  @apply text-xs pl-4 pr-4 pb-2;
}

.menu-item {
  @apply text-sm pl-4 pr-4 pt-1.5 pb-1.5 rounded cursor-pointer transition-colors flex items-center;
}

.active {
  @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}
</style>
