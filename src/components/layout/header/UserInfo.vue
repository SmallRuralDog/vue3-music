<template>
  <div class="flex items-center cursor-pointer hover-text">
    <ElAvatar size="small" round class="bg-gray-200" :src="profile?.avatarUrl ?? ''"></ElAvatar>
    <span class="text-xs ml-1.5" v-if="isLogin">{{ profile.nickname }}</span>
    <span class="text-xs ml-1.5" @click="showLogin=true" v-else>点击登录</span>

  </div>
  <el-dialog v-model="showLogin" title="登录" width="330px" append-to-body>
    <div>
      <el-input size="large" placeholder="手机号码" :prefix-icon="Phone" v-model="phone"/>
      <el-input size="large" class="mt-5" placeholder="登录密码" :prefix-icon="Lock" v-model="password"/>

      <button @click="loginSubmit" class="button w-full mt-5 py-5" style="border-radius: 5px;">登录</button>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import {Lock, Phone} from '@icon-park/vue-next'
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {useUserStore} from "@/stores/user";
import {storeToRefs} from "pinia";


const router = useRouter()

const phone = ref('')
const password = ref('')
const {login, checkLogin} = useUserStore()
const {isLogin, profile, showLogin} = storeToRefs(useUserStore())

const loginSubmit = () => {
  login(phone.value, password.value)
}


onMounted(() => {
  checkLogin()
})

</script>

<style lang="scss">

</style>
