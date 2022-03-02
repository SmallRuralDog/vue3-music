import {defineStore} from "pinia";
import {ref} from "vue";
import {usePersonalized, usePersonalizedNewSong, useTopListDetail} from "@/utils/api";
import type {Personalized, PersonalizedNewSong} from "@/models/personalized";
import type {TopListDetail} from "@/models/toplist_detail";

export const useMusicStore = defineStore('music', () => {

    const topListDetailData = ref<TopListDetail[]>([])
    const getTopListDetailData = async () => {
        if (topListDetailData.value.length) return;
        topListDetailData.value = await useTopListDetail()
    }


    const personalized = ref<Personalized[]>([]);
    const getPersonalized = async () => {
        if (personalized.value.length) return;
        personalized.value = await usePersonalized()
    }


    const personalizedNewSong = ref<PersonalizedNewSong[]>([]);
    const getPersonalizedNewSong = async () => {
        if (personalizedNewSong.value.length) return;
        personalizedNewSong.value = await usePersonalizedNewSong()
    }


    return {
        topListDetailData,
        getTopListDetailData,

        personalized,
        getPersonalized,

        personalizedNewSong,
        getPersonalizedNewSong
    }
})
