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
        const oauth = dataStore.oauth;
        const getAccessToken = dataStore.getAccessToken;
        useDataStore.isLoading = true;
        const BASE_URL = "/dev/index.php/v1/tasks/select";
        const tokenType = oauth.token_type;
        const accessToken = oauth.access_token;
        const headers = {
          Authorization: `${tokenType} ${accessToken}`,
          "Content-Type": getAccessToken.headers[0],
        };
        const response = await axios.get<object[]>(BASE_URL, { headers });
        dataStore.localData = response.data;
        sessionStorage.setItem("localData", JSON.stringify(response.data));
        useDataStore.isLoading = false;
        return response;
      } catch (error: any) {
        console.error(`${error} ${error.message}`);
        return error.message;
      }
    })();
  }
}
export const taskService = new TaskService();
