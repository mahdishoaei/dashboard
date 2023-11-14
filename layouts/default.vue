<script setup lang="ts">
import { applicationTheme } from "@/stores/applicationTheme";
import { getLoacalStorage } from "@/utils/localStorageServices";
import { applicationUserData } from "@/stores/applicationUserData";

const ThemeDS = applicationTheme();
const userDataSource = applicationUserData();

const ThemeStatus = computed<string>(() => {
  return ThemeDS.theme;
});

onMounted(() => {
  const token = getLoacalStorage("token");
  userDataSource.token = token;
});
</script>

<template>
  <div
    :class="{
      'app-bg-dark': ThemeStatus === 'dark',
      'app-bg-light': ThemeStatus === 'light',
    }"
    class="defalut-layout-container"
  >
    <NuxtLoadingIndicator color="#fd7403" />
    <div class="default-layout-container">
      <Sidebar />
      <div class="router-container">
        <TopBar />
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-layout-container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
  .router-container {
    width: 100%;
    height: 100vh;
    .top-bar {
      width: 100%;
      height: 50px;
    }
  }
}
</style>
