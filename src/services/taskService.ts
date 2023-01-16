import axios from "axios";
import { cookies, COOKIE_PROPS } from "./cookieService";
import { useDataStore } from "@/stores/data";
export default class TaskService {
  constructor() {
    this.tasks;
  }
  getTasks(): Promise<any> {
    return (async (): Promise<any> => {
      try {
        const dataStore = useDataStore();
        useDataStore.isLoading = true;
        const BASE_URL = "/dev/index.php/v1/tasks/select";
        const tokenType = cookies.get("token_type");
        const accessToken = cookies.get("access_token");
        const headers = {
          Authorization: `${tokenType} ${accessToken}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get<object[]>(BASE_URL, { headers });
        dataStore.localData = response.data;
        sessionStorage.setItem("localData", JSON.stringify(response.data));
        useDataStore.isLoading = false;
        return response.data;
      } catch (error: any) {
        console.error(`${error} ${error.message}`);
        return error.message;
      }
    })();
  }
}
export const taskService = new TaskService();
