<script setup lang="ts">
import { applicationTheme } from '@/stores/applicationTheme'
const ThemeDS = applicationTheme()

const ThemeStatus = computed<string>(() => {
    return ThemeDS.theme
})
</script>

<template>
    <div 
        :class="{
            'app-bg-dark': ThemeStatus === 'dark',
            'app-bg-light': ThemeStatus === 'light'
        }"
        class="defalut-layout-container"
    >
        <NuxtLoadingIndicator color="#fd7403" />
        
        <div class="router-container">
            <slot />
        </div>
       
    </div>
</template>

<style lang="scss" scoped>
.defalut-layout-container{
    width: 100%;
    height: 100vh;
}
</style>