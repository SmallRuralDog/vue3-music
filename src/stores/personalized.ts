import {defineStore} from "pinia";
import {ref} from "vue";
import {usePersonalizedDjProgram} from "@/utils/api";
import type {DjProgram} from "@/models/personalized";

export const usePersonalizedStore = defineStore('personalized', () => {

    const djProgram = ref<DjProgram[]>([])
    const getDjProgram = async () => {
        if (djProgram.value.length) return;
        djProgram.value = await usePersonalizedDjProgram()
    }


    return {
        djProgram, getDjProgram,
    }

});
