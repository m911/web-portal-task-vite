import { watch } from "vue";
import { defineStore } from "pinia";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";
import { taskService } from "@/services/taskService";
import { authService } from "@/services/authService";

export const useDataStore = defineStore({
  id: "data",
  state: () => ({
    isAuthenticated: false,
    // isAuthenticated: false,
    // localData: [] as object[],
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

watch(
  useDataStore.state,
  (state) => {
    // persist the whole state to the local storage whenever it changes
    localStorage.setItem("piniaState", JSON.stringify(state));
  },
  { deep: true }
);
