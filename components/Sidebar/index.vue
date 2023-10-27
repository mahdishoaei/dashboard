<template>
    <div
    :class="{'close-sidebar-status': !isOpen}" 
    class="sidebar-container bg-red">
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
    </div>
</template>

<script setup lang="ts">
import { applicationTheme } from '@/stores/applicationTheme'
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
    width: 200px;
    height: 100vh;
    transition: 0.3s;
}

.close-sidebar-status{
    width: 45px;
    height: 100vh;
    transition: 0.3s;
}
</style>