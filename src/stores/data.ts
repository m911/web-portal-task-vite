import { watch } from "vue";
import { defineStore } from "pinia";

export const useDataStore = defineStore({
  id: "data",
  state: () => ({
    isAuthenticated: false,
    oauth: {
      access_token: "",
      expires_in: 1200,
      token_type: "Bearer",
      scope: null,
      refresh_token: "",
    },
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
    getAccessToken: {
      credentials: {
        username: "365",
        password: "1",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic QVBJX0V4cGxvcmVyOjEyMzQ1NmlzQUxhbWVQYXNz",
      },
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

export default useDataStore(useDataStore);

// export default useDataStore(useDataStore);
// watch(
//   useDataStore.state,
//   (state) => {
//     // persist the whole state to the local storage whenever it changes
//     localStorage.setItem("piniaState", JSON.stringify(state));
//   },
//   { deep: true }
// );

// e
