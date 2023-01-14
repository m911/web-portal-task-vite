import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";

let isAuthenticated: boolean;

const checkForCookie = () => {
  cookies.isKey(COOKIE_PROPS.ACCESS_TOKEN)
    ? (isAuthenticated = true)
    : (isAuthenticated = false);
  return isAuthenticated;
};
checkForCookie();

export const useDataStore = defineStore("data", () => {
  let successResponse: boolean;
  let localData: object[] =
    (checkForCookie() && JSON.parse(localStorage.getItem("localData"))) ??
    ([] as object[]);
  const setUserData: void = (data: object[]) => (localData = data);

  return {
    isAuthenticated,
    successResponse,
    localData,
    setUserData,
  };
});

// export default useDataStore2 = useDataStore();
