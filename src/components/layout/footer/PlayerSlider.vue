<template>
  <div class="player-slider">
    <el-slider :show-tooltip="false" :min="0" v-model="currentTime" :max="duration" @change="onSliderChange"
               @input="onSliderInput"/>
  </div>
</template>

<script setup lang="ts">


import {usePlayerStore} from "@/stores/player";
import {toRefs} from "vue";

const {duration, currentTime, onSliderInput, onSliderChange} = toRefs(usePlayerStore());

</script>

<style lang="scss">
.player-slider {
  .el-slider {
    height: 10px;

    .el-slider__runway, .el-slider__bar {
      height: 2px;
      border-radius: 0;
    }

    .el-slider__runway {
      //@apply bg-slate-50 dark:bg-stone-700 transition-all;
      //@apply hover:bg-stone-200 dark:hover:bg-stone-600;
    }

    .el-slider__button-wrapper {
      @apply opacity-0 transition-opacity;
      width: 10px;
      height: 10px;
      top: -10.5px;
    }

    &:hover {
      .el-slider__button-wrapper {
        @apply opacity-100;
      }


    }

    .el-slider__button {
      width: 8px;
      height: 8px;
      @apply bg-emerald-400;
    }
  }
}
</style>
