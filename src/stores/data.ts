import { watch } from "vue";
import { defineStore } from "pinia";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";
import { taskService } from "@/services/taskService";
import { authService } from "@/services/authService";
// import { ModalData } from "@/models/ModalData";

export const useDataStore = defineStore({
  id: "data",
  state: () => ({
    isAuthenticated: false,
    isLoading: false,
    modalData: {
      title: "",
      data: "",
      saveButtonOn: true,
      saveButtoCallBack: Function,
    },
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
    toggleModal: () => {
      const newValue = !this.modalData.modalActive;
      this.modalData.modalActive = newValue;
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

interface ModalData {
  modalActive?: boolean;
  title?: "";
  // data?: "";
  data?: "My name is Mitko";
  extraButton: object;
}
