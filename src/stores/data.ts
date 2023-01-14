import { ref, computed } from "vue";
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

  const data = taskService.getTasks();

  let localData: object[] = ref(
    ((isAuthenticated && JSON.parse(localStorage.getItem("localData"))) ||
      data) ??
      ([] as object[])
  );
  let filteredData = ref([] as object[]);
  const setUserData: void = (data: object[]) => (localData = ref(data));
  return {
    isAuthenticated,
    localData,
    setUserData,
    filteredData,
  };
});

// export default useDataStore2 = useDataStore();
