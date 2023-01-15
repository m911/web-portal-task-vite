import axios from "axios";
import { cookies, COOKIE_PROPS } from "./cookieService";
import { useDataStore } from "@/stores/data";

export const taskService = {
  getTasks() {
    const dataStore = useDataStore();
    if (!cookies.isKey(COOKIE_PROPS.ACCESS_TOKEN)) {
      dataStore.isAuthenticated = false;
      return;
    } else {
      (async function getPromise(): Promise<void> {
        try {
          const BASE_URL = "/dev/index.php/v1/tasks/select";
          const tokenType = cookies.get("token_type");
          const accessToken = cookies.get("access_token");
          const headers = {
            Authorization: `${tokenType} ${accessToken}`,
            "Content-Type": "application/json",
          };
          const response = await axios.get<object[]>(BASE_URL, {
            headers,
          });
          dataStore.localData = response.data;
          sessionStorage.setItem("localData", JSON.stringify(response.data));
        } catch (error: any) {
          console.error(`${error} ${error.message}`);
        }
      })();
    }
  },
};
