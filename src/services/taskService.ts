import axios from "axios";
import { cookies, COOKIE_PROPS } from "./cookieService";
import { useDataStore } from "@/stores/data";

export const taskService = (function () {
  // const dataStore = useDataStore();
  return { getTasks };

  function getTasks(): object[] {
    if (!cookies.isKey(COOKIE_PROPS.ACCESS_TOKEN)) {
      return;
    }
    let data: object[] = [];
    async function getPromise(): Promise<void> {
      const BASE_URL = "/dev/index.php/v1/tasks/select";
      const tokenType = cookies.get("token_type");
      const accessToken = cookies.get("access_token");
      const headers = {
        Authorization: `${tokenType} ${accessToken}`,
        "Content-Type": "application/json",
      };
      try {
        const response = await axios.get<object[]>(BASE_URL, {
          headers,
        });
        const responseData: object[] = response.data;
        data = response.data;
        localStorage.setItem("localData", JSON.stringify(data));
      } catch (error: any) {
        throw new Error("Error: " + error.message);
        console.error(error);
      }
    }
    // getPromise();
    return data;
  }
})();
