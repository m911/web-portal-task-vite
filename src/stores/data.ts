import { ref } from "vue";
import { defineStore } from "pinia";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";
import { taskService } from "@/services/taskService";

// const checkForCookie = () => {

//   cookies.isKey(COOKIE_PROPS.ACCESS_TOKEN)
//     ? (isAuthenticated = ref(true))
//     : (isAuthenticated = ref(false));
//   return isAuthenticated;
// };
// checkForCookie();

export const useDataStore = defineStore("data", () => {
  const isAuthenticated = ref(cookies.isKey(COOKIE_PROPS.ACCESS_TOKEN));
  let localData: object[] = [] as object[];
  let filteredData = [] as object[];
  const setUserData: void = (data: object[]) => (localData = data);
  // watch();
  return {
    isAuthenticated,
    localData,
    setUserData,
    filteredData,
  };
});

// export default useDataStore2 = useDataStore();
