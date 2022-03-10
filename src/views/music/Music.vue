<template>
  <div class="pl-5 pr-5 music">
    <h1 class="text-3xl font-bold pt-8 pb-4">音乐馆</h1>
    <el-affix target=".music" :offset="56">
      <div class="bg-view">
        <el-tabs v-model="currentMenu" @tab-click="onTabClick">
          <el-tab-pane v-for="menu in menus" :key="menu.name" :label="menu.label" :name="menu.name" class="text-main"/>
        </el-tabs>
      </div>
    </el-affix>
    <div class="mt-5">
      <RouterView/>
    </div>

  </div>
</template>

<script setup lang="ts">

import {useMusicMenu} from "@/views/music/MusicController";

const {menus, currentMenu, onTabClick} = useMusicMenu()
</script>

<style lang="scss">
.music {
  .el-tabs__nav-wrap::after {
    height: 0;
  }
  .el-tabs__header{
    @apply m-0;
  }
}

</style>
