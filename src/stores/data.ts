import { watch } from "vue";
import { defineStore } from "pinia";

export const useDataStore = defineStore({
  id: "data",
  state: () => ({
    isAuthenticated: false,
    isLoading: false,
    modalData: {
      title: "",
      data: "",
      saveButtonOn: true,
      optionalButton: {},
    },
    localData: [] as object[],
    filteredData: [] as object[],
    query: "",
    loginCredentials: {
      username: "365",
      password: "1",
    },
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
      if (state.filteredData.length > 0 || state.query.length > 0) {
        return state.filteredData;
      } else {
        return state.localData;
      }
    },
  },
});

// watch(
//   useDataStore.state,
//   (state) => {
//     // persist the whole state to the local storage whenever it changes
//     localStorage.setItem("piniaState", JSON.stringify(state));
//   },
//   { deep: true }
// );

// e
