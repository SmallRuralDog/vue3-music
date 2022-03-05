import type { DJBanner } from "@/models/dj";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDJStore = defineStore("dj", () => {

    const djBanners = ref<DJBanner[]>([])

})