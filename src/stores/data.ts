import { toRef } from "vue";
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

// export const useDataStore = defineStore("data", () => {
//   const isAuthenticated = cookies.isKey(COOKIE_PROPS.ACCESS_TOKEN);
//   let localData: object[] = [] as object[];
//   let filteredData = [] as object[];
//   const setUserData: void = (data: object[]) => (localData = data);
//   let query = "";
//   // watch();
//   return {
//     isAuthenticated,
//     localData,
//     setUserData,
//     filteredData,
//     query,
//   };
// });
export const useDataStore = () => {
  const useDataStore = defineStore({
    id: "data",
    state: () => ({
      // isAuthenticated: cookies.isKey(COOKIE_PROPS.ACCESS_TOKEN),
      isAuthenticated: true,
      localData: [] as object[],
      filteredData: [] as object[],
      query: "",
    }),
    actions: {
      setUserData(data: object[]) {
        this.localData = data;
        this.filteredData = data;
      },
      getters: {
        changeAuthorization: (state) => {
          state.isAuthenticated = !state.isAuthenticated;
        },
      },
    },
  });

  return toRef(useDataStore);
};
