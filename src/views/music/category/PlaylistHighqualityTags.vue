<template>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {PlaylistHighqualityTag} from "@/models/playlist";
import {usePlaylistHighqualityTags} from "@/utils/api";

const tags = ref<PlaylistHighqualityTag[]>()

onMounted(async () => {
  tags.value = await usePlaylistHighqualityTags()
})

</script>
<style lang="scss">

</style>
