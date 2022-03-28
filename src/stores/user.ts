import {defineStore} from "pinia";
import {useLogin, useLoginStatus} from "@/utils/api";
import type {UserProfile} from "@/models/user";

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            token: '',
            cookie: '',
            showLogin: false,
            profile: {} as UserProfile,
        }
    },
    getters: {
        isLogin: state => {
            return state.profile?.userId > 0
        }
    },
    actions: {
        async login(phone: string, password: string) {
            const res = await useLogin(phone, password)
            if (res.code == 200) {
                this.token = res.token
                this.cookie = res.cookie
                document.cookie = res.cookie
                localStorage.setItem("USER-TOKEN", this.token)
                localStorage.setItem("USER-COOKIE", this.cookie)
                this.checkLogin()
            }
        },
        async checkLogin() {
            const {data} = await useLoginStatus()
            if (data.code === 200) {
                this.profile = data.profile
                this.showLogin = false
            }

        }
    }
})
