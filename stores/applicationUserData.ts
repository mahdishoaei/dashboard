import { defineStore } from "pinia";
import { applicationUsersData } from "@/stores/applicationUsersData";
import { errorToast } from "@/utils/toasMessage";
import { generateToken } from "@/utils/generateToken";
import { updateUser } from "@/client/api/users.ts";
import { setLocalStorage } from "@/utils/localStorageServices.ts";
export const applicationUserData = defineStore("user", {
  state: () => ({
    authenticated: false,
    token: '',
    user: {},
  }),

  actions: {
    checkUserAuthentication(param: any) {
      const usersDataSource = applicationUsersData();
      const users = usersDataSource.users;
      const result: any = users.find((user: any) => {
        return user.email == param.email;
      });
      if (result) {
        if (result.password == param.password) {
          this.authenticated = true;
          this.user = result;
          this.user.token = generateToken(30);
          updateUser(this.user.id, this.user);
          setLocalStorage("token", this.user.token);
          navigateTo("/dashboard");
        } else {
          this.authenticated = false;
          errorToast("bottom-center", "Password is incorect!!!");
        }
      } else {
        errorToast("bottom-center", "User is not exist!!!");
      }
    },
  },
});
