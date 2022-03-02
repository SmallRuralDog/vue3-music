<template>
  <div class="flex flex-col items-stretch h-20">
    <PlayerSlider/>
    <div class="flex grow px-5 items-center">
      <div class="flex-1">
        <PlayerSong/>
      </div>
      <div class="flex-1">
        <PlayerController/>
      </div>
      <div class="flex-1">
        <PlayerAction/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import PlayerSlider from "@/components/layout/footer/PlayerSlider.vue";
import PlayerSong from "@/components/layout/footer/PlayerSong.vue";
import PlayerAction from "@/components/layout/footer/PlayerAction.vue";
import PlayerController from "@/components/layout/footer/PlayerController.vue";
</script>
<style lang="scss">

</style>
