import axios from "axios";
import { useDataStore } from "@/stores/data";

const get2 = async function getTasks2(): Promise<any> {
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
};

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
  getTasks2(): Promise<any> {
    const dataStore = useDataStore();
    const oauth = dataStore.oauth;
    const getAccessToken = dataStore.getAccessToken;
    dataStore.isLoading = true;
    const BASE_URL = "/dev/index.php/v1/tasks/select";
    const tokenType = oauth.token_type;
    const accessToken = oauth.access_token;
    const headers = {
      Authorization: `${tokenType} ${accessToken}`,
      "Content-Type": getAccessToken.headers[0],
    };
    axios
      .get<object[]>(BASE_URL, { headers })
      .then((response) => {
        const data: object[] = response.data;
        dataStore.localData = response.data;
        sessionStorage.setItem("localData", JSON.stringify(response.data));
        dataStore.isLoading = false;
        return;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
}
export const taskService = new TaskService();
