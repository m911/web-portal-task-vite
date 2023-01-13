import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";
import { onMounted } from "vue";

let isAuthenticated: boolean;

onMounted(() => {
  cookies.isKey(COOKIE_PROPS.ACCESS_TOKEN)
    ? (isAuthenticated = true)
    : (isAuthenticated = false);
});
export const useDataStore = defineStore("data", () => {
  let successResponse: boolean;
  let localData: object[] =
    JSON.parse(localStorage.getItem("localData")) ?? ([] as object[]);
  const setUserData: void = (data: object[]) => (localData = data);

  return {
    isAuthenticated,
    successResponse,
    localData,
    setUserData,
  };
});

// export default useDataStore2 = useDataStore();
