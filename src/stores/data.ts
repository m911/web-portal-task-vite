import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";

let isAuthenticated = ref(false);

const checkForCookie = () => {
  cookies.isKey(COOKIE_PROPS.ACCESS_TOKEN)
    ? (isAuthenticated = ref(true))
    : (isAuthenticated = ref(false));
  return isAuthenticated;
};
checkForCookie();

export const useDataStore = defineStore("data", () => {
  let localData: object[] = ref(
    (isAuthenticated && JSON.parse(localStorage.getItem("localData"))) ??
      ([] as object[])
  );
  const setUserData: void = (data: object[]) => (localData = ref(data));
  let filteredData = ref([] as object[]);

  return {
    isAuthenticated,
    localData,
    setUserData,
    filteredData,
  };
});

// export default useDataStore2 = useDataStore();
