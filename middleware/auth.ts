import { applicationUserData } from "@/stores/applicationUserData";

export default defineNuxtRouteMiddleware(async () => {
  const userDataSource = applicationUserData();
  setTimeout(() => {
    if(!userDataSource.token) {
      navigateTo('/auth/login')
    }
  }, 100);
});
