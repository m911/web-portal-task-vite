import axios from "axios";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";
import { useDataStore } from "@/stores/data";
import { refreshTokenTimeout } from "@/utils/auth";

export const authService = {
  // BASE_URL: "/index.php/login",
  // TASK_URL: "/dev/index.php/v1/tasks/select",
  BASE_URL: "https://api.baubuddy.de/dev/index.php/v1/login",
  login: async function login(credentials: object): Promise<boolean> {
    const { headers } = useDataStore().getAccessToken;
    try {
      useDataStore.isLoading = true;
      const response = await axios.post(this.BASE_URL, credentials, {
        headers,
      });
      // const { token_type, access_token } = response.data.oauth;

      const oauth = response.data.oauth;
      useDataStore().oauth = oauth;
      // cookies.set(COOKIE_PROPS.TOKEN_TYPE, token_type);
      // cookies.set(
      //   COOKIE_PROPS.ACCESS_TOKEN,
      //   access_token,
      //   new Date(Date.now() + 1000 * 60 * 60)
      // );
      useDataStore().isAuthenticated = true;
      refreshTokenTimeout(oauth.expires_in * 60 * 60);
      useDataStore().isLoading = false;
      return true;
    } catch (error) {
      console.error(`Error ${error} ${error.message}`);
      useDataStore().isAuthenticated = false;
      return false;
    }
  },
  getAccessToken: async function getAccessToken() {
    try {
      const oauth = useDataStore().oauth;
      // await axios.post();
    } catch (error) {
      console.error(`Error ${error} ${error.message}`);
    }
  },
};
