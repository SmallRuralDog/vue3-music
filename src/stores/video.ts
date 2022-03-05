import { defineStore } from "pinia";
import { ref } from "vue";
import type { PersonalizedPrivateContent, Video, VideoGroup } from "@/models/video";
import { usePersonalizedMv, usePersonalizedPrivateContentList, useVideoGroupList, useVideoTimelineRecommend } from "@/utils/api";
import type { PersonalizedMv } from "@/models/personalized";

export const useVideoStore = defineStore('video', () => {

    const videoTimelineRecommend = ref<Video[]>([])
    const getVideoTimelineRecommend = async () => {
        if (videoTimelineRecommend.value.length) return;
        videoTimelineRecommend.value = await useVideoTimelineRecommend()
    }


    const personalizedPrivateContent = ref<PersonalizedPrivateContent[]>([])
    const getPersonalizedPrivateContent = async () => {
        if (personalizedPrivateContent.value.length) return;
        personalizedPrivateContent.value = await usePersonalizedPrivateContentList(4)
    }

    const personalizedMv = ref<PersonalizedMv[]>([])
    const getPersonalizedMv = async () => {
        if (personalizedMv.value.length) return;
        personalizedMv.value = await usePersonalizedMv()
    }

    const videoGroup = ref<VideoGroup[]>([])
    const getVideoGroup = async () => {
        if (videoGroup.value.length) return;
        videoGroup.value = await useVideoGroupList()
    }

    return {
        videoTimelineRecommend, getVideoTimelineRecommend,

        personalizedPrivateContent, getPersonalizedPrivateContent,

        personalizedMv, getPersonalizedMv,

        videoGroup, getVideoGroup,
    }

});
