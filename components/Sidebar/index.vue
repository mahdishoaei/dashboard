<template>
    <div
    :class="{'close-sidebar-status': !isOpen,'app-bg-primary': ThemeStatus === 'light','app-bg-secondary': ThemeStatus === 'dark'}" 
    class="sidebar-container">
        <div class="d-flex w-100 justify-end px-2 py-2">
            <BootstrapIconArrowLeft 
            @click="changeSidebarStatus"
            v-if="isOpen" 
            class="app_pointer" />
            <BootstrapIconArrowRight 
            @click="changeSidebarStatus"
            v-else 
            class="app_pointer" />
        </div>
        <div class="w-100  d-flex flex-column justify-center align-center mt-3">
            <img src="https://static01.nyt.com/images/2023/06/11/magazine/11mag-Sheldrake/11mag-Sheldrake-articleLarge.jpg?quality=75&auto=webp&disable=upscale" 
              class="profile-img"
            >
            <span class="app-font-size-12 pt-2" v-if="isOpen">mohhaad21@gmail.com</span>
        </div>
        <div class="w-100  d-flex flex-column px-2 mt-10">
            <div 
            class="d-flex px-2 py-1 rounded app_pointer " 
            :class="{'app-bg-gray': Route.name === 'dashboard'}"
            @click="navigateTo('/dashboard')"
            >
                <img src="icons/dashboard.svg">
                <span 
                class="app-font-size-12 app-font-weight-400 px-2 " 
                v-if="isOpen"
                >Dashboard</span>
            </div>
            <div 
            class="d-flex px-2 py-1 mt-1 rounded app_pointer  " 
            :class="{'app-bg-gray': Route.name === 'tasks'}"
            @click="navigateTo('/tasks')"
            >
                <img src="icons/task.svg">
                <span 
                class="app-font-size-12 app-font-weight-400 px-2 " 
                v-if="isOpen"
                >Tasks</span>
            </div>
            <div 
            class="d-flex px-2 py-1 mt-1 rounded app_pointer" 
            :class="{'app-bg-gray': Route.name === 'employes'}"
            @click="navigateTo('/employes')"
            >
               <img src="icons/employes.svg">
                <span 
                class="app-font-size-12 app-font-weight-400 px-2 " 
                v-if="isOpen"
                >Employes</span>
            </div>
            <div 
            class="d-flex px-2 py-1 mt-1 rounded app_pointer" 
            :class="{'app-bg-gray': Route.name === 'payment'}"
            @click="navigateTo('/payment')"
            >
                <img src="icons/payment.svg">
                <span 
                class="app-font-size-12 app-font-weight-400 px-2 " 
                v-if="isOpen"
                >Payment</span>
            </div>
            <div 
            class="d-flex px-2 py-1 mt-1 rounded app_pointer" 
            :class="{'app-bg-gray': Route.name === 'products'}"
            @click="navigateTo('/products')"
            >
             <img src="icons/product.svg">
                <span 
                class="app-font-size-12 app-font-weight-400 px-2 " 
                v-if="isOpen"
                >Products</span>
            </div>
            <div 
            class="d-flex px-2 py-1 mt-1 rounded app_pointer" 
            :class="{'app-bg-gray': Route.name === 'wareHouse'}"
            @click="navigateTo('/wareHouse')"
            >
                <img src="icons/wareHouse.svg">
                <span 
                class="app-font-size-12 app-font-weight-400 px-2 " 
                v-if="isOpen"
                >Ware House</span>
            </div>
            <div 
            class="d-flex px-2 py-1 mt-1 rounded app_pointer" 
            :class="{'app-bg-gray': Route.name === 'permissions'}"
            @click="navigateTo('/permissions')"
            >
                <img src="icons/premision.svg">
                <span 
                class="app-font-size-12 app-font-weight-400 px-2 " 
                v-if="isOpen"
                >Permissions</span>
            </div>
            <div 
            class="d-flex px-2 py-1 mt-1 rounded app_pointer" 
            :class="{'app-bg-gray': Route.name === 'setting'}"
            @click="navigateTo('/setting')"
            >
               <img src="icons/setting.svg">
                <span 
                class="app-font-size-12 app-font-weight-400 px-2 " 
                v-if="isOpen"
                >Setting</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { applicationTheme } from '@/stores/applicationTheme'
import { useRoute } from 'vue-router'

const Route = useRoute()
const ThemeDS = applicationTheme()

const isOpen = ref(false)

const changeSidebarStatus = () => {
    isOpen.value = !isOpen.value
}

const ThemeStatus = computed<string>(() => {
    return ThemeDS.theme
})
</script>

<style lang="scss" scoped>
.sidebar-container{
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100vh;
    transition: 0.3s;
}

.close-sidebar-status{
    display: flex;
    flex-direction: column;
    width: 55px;
    height: 100vh;
    transition: 0.3s;
}
.profile-img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
</style>