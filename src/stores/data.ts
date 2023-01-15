import { toRef } from "vue";
import { defineStore } from "pinia";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";
import { taskService } from "@/services/taskService";

export const useDataStore = defineStore({
  id: "data",
  state: () => ({
    isAuthenticated: cookies.isKey(COOKIE_PROPS.ACCESS_TOKEN),
    // isAuthenticated: false,
    localData: [] as object[],
    filteredData: [] as object[],
    query: "",
  }),
  actions: {
    setLocalData(data: object[]) {
      this.localData = data;
      this.filteredData = data;
    },
    changeAuthorization: () => {
      const newValue = !this.isAuthenticated;
      this.isAuthenticated = newValue;
    },
  },
  getters: {
    showFilter: (state) => {
      return state.filteredData.lenght > 0
        ? state.filteredData
        : state.localData;
    },
  },
});
