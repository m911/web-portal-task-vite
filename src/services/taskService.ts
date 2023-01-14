import axios from "axios";
import { cookies, COOKIE_PROPS } from "./cookieService";
import { useDataStore } from "@/stores/data";
import { useRouter } from "vue-router";

export const taskService = {
  getTasks(): object[] {
    const dataStore = useDataStore();
    if (!cookies.isKey(COOKIE_PROPS.ACCESS_TOKEN)) {
      return;
    }
    let data: object[] = [];
    async function getPromise(): Promise<void> {
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
        data = response.data;
        useDataStore().localData = data;
        console.log(useDataStore().localData);
        localStorage.setItem("localData", JSON.stringify(data));
      } catch (error: any) {
        console.error(error);
        // error.message<string>.includes("";
        useRouter().replace("/login");
      }
    }
    getPromise();
    return data;
  },
};
