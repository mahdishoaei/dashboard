<template>
  <div
    :class="{
      'close-sidebar-status': !isOpen,
      'app-bg-primary': ThemeStatus === 'light',
      'app-bg-secondary': ThemeStatus === 'dark',
    }"
    class="sidebar-container"
  >
    <div class="d-flex w-100 justify-end px-2 py-2">
      <BootstrapIconArrowLeft
        @click="changeSidebarStatus"
        v-if="isOpen"
        class="app_pointer"
      />
      <BootstrapIconArrowRight
        @click="changeSidebarStatus"
        v-else
        class="app_pointer"
      />
    </div>
    <div class="w-100 d-flex flex-column justify-center align-center mt-3">
      <img
        src="/images/profile-men.jpg"
        class="profile-img"
      />
      <span class="app-font-size-14 app-font-weight-600 pt-2" v-if="isOpen"
        >admin@yahoo.com</span
      >
    </div>
    <div class="w-100 d-flex flex-column px-2 mt-10">
      <div
        v-for="item in sidebarItems"
        :key="item.id"
        class="d-flex mt-5 px-2 py-1 rounded app_pointer align-center"
        :class="{ 'app-bg-gray': Route.name === `${item.path}` }"
        @click="navigateTo(`${item.path}`)"
      >
        <img style="width: 25px; height: 25px" :src="`${item.icon}`" />
        <span
          class="app-font-size-12 app-font-weight-400 px-2 pt-1"
          v-if="isOpen"
          >{{ item.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { applicationTheme } from "@/stores/applicationTheme";
import { useRoute } from "vue-router";

const Route = useRoute();
const ThemeDS = applicationTheme();

const isOpen = ref(true);

const sidebarItems = ref([
  {
    id: "0",
    name: "Dashboard",
    path: "dashboard",
    icon: "icons/dashboard.svg",
  },
  {
    id: "1",
    name: "Tasks",
    path: "tasks",
    icon: "icons/task.svg",
  },
  {
    id: "2",
    name: "Employes",
    path: "employes",
    icon: "icons/employes.svg",
  },
  {
    id: "3",
    name: "Payment",
    path: "payment",
    icon: "icons/payment.svg",
  },
  {
    id: "4",
    name: "Products",
    path: "products",
    icon: "icons/product.svg",
  },
  {
    id: "5",
    name: "warehouse",
    path: "warehouse",
    icon: "icons/warehouse.svg",
  },
  {
    id: "6",
    name: "Setting",
    path: "setting",
    icon: "icons/setting.svg",
  },
]);

const changeSidebarStatus = () => {
  isOpen.value = !isOpen.value;
};

const ThemeStatus = computed<string>(() => {
  return ThemeDS.theme;
});
</script>

<style lang="scss" scoped>
.sidebar-container {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  transition: 0.3s;
}

.close-sidebar-status {
  display: flex;
  flex-direction: column;
  width: 65px;
  height: 100vh;
  transition: 0.3s;
}
.profile-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
