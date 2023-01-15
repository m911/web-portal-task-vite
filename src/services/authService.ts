import axios from "axios";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";
import { useDataStore } from "@/stores/data";

let localCredentials: object = {};
export const authService = {
  BASE_URL: "/index.php/login",
  // TASK_URL: "/dev/index.php/v1/tasks/select",
  // BASE_URL: "https://api.baubuddy.de/dev/index.php/v1/login",
  login: async function login(credentials: object): Promise<boolean> {
    try {
      const response = await axios.post(this.BASE_URL, credentials, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic QVBJX0V4cGxvcmVyOjEyMzQ1NmlzQUxhbWVQYXNz",
        },
      });
      const { token_type, access_token } = response.data.oauth;
      const dataStore = useDataStore();
      cookies.set(COOKIE_PROPS.TOKEN_TYPE, token_type);
      cookies.set(
        COOKIE_PROPS.ACCESS_TOKEN,
        access_token,
        new Date(Date.now() + 1200 * 60 * 60)
      );
      localCredentials = credentials;
      dataStore.isAuthenticated = true;
      // dataStore.changeAuthorization();
      return true;
    } catch (error) {
      console.error(`Error ${error} ${error.message}`);
      const dataStore = useDataStore();
      dataStore.isAuthenticated = false;
      // dataStore.changeAuthorization();
      return false;
    }
  },
  // getToken: async function getPromise(): Promise<void> {
  //   try {
  //     const tokenType = cookies.get("token_type");
  //     const refreshToken = cookies.get(COOKIE_PROPS.REFRESH_TOKEN);
  //     const headers = {
  //       Authorization: `${tokenType} ${refreshToken}`,
  //       "Content-Type": "application/json",
  //     };
  //     const response = await axios.post(TASK_URL, {
  //       headers,
  //     });
  //     // localStorage.setItem("localData", JSON.stringify(data));
  //   } catch (error: any) {
  //     throw new Error("Error: " + error.message);
  //     router.replace("/login");
  //     console.error(error);
  //   }
  // },
};

(() => {
  setTimeout(() => {
    authService.login(localCredentials);
  }, 1200 * 60 * 60 - 40);
})();
