<template>
  <div class="px-5">
    <h1 class="text-3xl font-bold pt-8 pb-4">推荐</h1>
    <Banner :per-page="3"/>
    <Personalized/>
    <PersonalizedNewSong/>
    <Mv/>
  </div>
</template>

<script setup lang="ts">
import Personalized from "@/views/discover/Personalized.vue";
import PersonalizedNewSong from "@/views/discover/PersonalizedNewSong.vue";
import Banner from "@/components/common/Banner.vue";
import Title from "@/components/common/Title.vue";
import Mv from "./Mv.vue";

</script>

<style lang="scss">

</style>
