import {defineStore} from "pinia";
import {useSearchSuggest} from "@/utils/api";
import type {SearchSuggest} from "@/models/search";

export const useSearchStore = defineStore("search", {
    state: () => {
        return {
            showSearchView: false,
            searchKeyword: '',
            suggestData: {} as SearchSuggest,
        }
    },
    getters: {
        showHot: state => {
            return state.searchKeyword == ''
        }
    },
    actions: {
        async suggest() {
            this.suggestData = await useSearchSuggest(this.searchKeyword)
        }
    }
})
