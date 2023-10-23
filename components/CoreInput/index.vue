<template>
    <div class="d-flex flex-column">
        <span class="app-font-size-12">
         {{ label }}
        </span>
        <input
            class="mt-1 mb-1"
            :class="{
            'app-color-white': ThemeStatus === 'dark', 
            'core-input-error': error
            }"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :type="type"
        >
        <span
         v-if="error"
         class="app-font-size-12 app-color-danger"
        >
           {{ messageError }}
        </span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        default: '',
        required: false
    },
    type: {
        type: String,
        default: '',
        required: false
    },
    error: {
        type: Boolean,
        default: false,
        required: false,
    },
    messageError: {
        type: String,
        default: "",
        required: false,
    },
    modelValue: {
        type: String,
        default: "",
        required: false,
    },
})

import { applicationTheme } from '@/stores/applicationTheme'
const ThemeDS = applicationTheme()

const ThemeStatus = computed<string>(() => {
    return ThemeDS.theme
})
</script>

<style lang="scss" scoped>
input{
    width: 100%;
    height: 32px;
    outline: none;
    border-radius: 5px;
    padding: 5px 5px;
    background: #dfdede;
    color: #111111;
}    
.core-input-error{
    border: 1px solid #f30000;
    box-shadow: 0px 0px 0px 0px #fff;
}
</style>