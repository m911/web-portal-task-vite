import axios from "axios";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";
import { useDataStore } from "@/stores/data";
import { refreshLocalData } from "@/utils/refreshLocalData";

export const authService = {
  BASE_URL: "/index.php/login",
  TASK_URL: "/dev/index.php/v1/tasks/select",
  // BASE_URL: "https://api.baubuddy.de/dev/index.php/v1/login",
  login: async function login(credentials2?: object): Promise<boolean> {
    const dataStore = useDataStore();
    const { credentials, headers } = dataStore.getAccessToken;
    try {
      dataStore.isLoading = true;
      const response = await axios.post(this.BASE_URL, credentials, {
        // const response = await axios.post(this.BASE_URL, credentials2, {
        headers,
      });
      const oauth = response.data.oauth;
      dataStore.oauth = oauth;
      dataStore.isAuthenticated = true;
      // refreshLocalData(oauth.expires_in * 60 * 60);
      dataStore.isLoading = false;
      return true;
    } catch (error) {
      console.error(`Error ${error} ${error.message}`);
      dataStore.isAuthenticated = false;
      return false;
    }
  },
  getAccessToken: async function getAccessToken() {
    try {
      const oauth = dataStore.oauth;
      // await axios.post();
    } catch (error) {
      console.error(`Error ${error} ${error.message}`);
    }
  },
};
