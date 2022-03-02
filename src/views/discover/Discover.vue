<template>
  <div class="px-5">
    <Title class="text-3xl font-bold mb-2" title="推荐"/>
    <Banner :per-page="3"/>
    <Personalized/>
    <PersonalizedNewSong/>
  </div>
</template>

<script setup lang="ts">
import Personalized from "@/views/discover/Personalized.vue";
import PersonalizedNewSong from "@/views/discover/PersonalizedNewSong.vue";
import Banner from "@/components/common/Banner.vue";
import Title from "@/components/common/Title.vue";

</script>

<style lang="scss">

</style>
