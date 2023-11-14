import { applicationPath } from "@/services/applicationPath";

export const updateUser = async (id: any, param: any) => {
  const response = await $fetch(
    `${applicationPath.BASE_URL}${applicationPath.USERS.PUT}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(param),
    }
  );
  return response;
};
