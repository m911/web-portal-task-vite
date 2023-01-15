import axios from "axios";
import { cookies, COOKIE_PROPS } from "./cookieService";
import { useDataStore } from "@/stores/data";

// export const taskService = {
//   getTasks(): boolean {
//     const dataStore = useDataStore();
//     let getTaskSuccessfull: boolean;
//     if (!cookies.isKey(COOKIE_PROPS.ACCESS_TOKEN)) {
//       dataStore.isAuthenticated = false;
//       return false;
//     } else {
//       (async function getPromise(): Promise<boolean> {
//         try {
//           useDataStore.isLoading = true;
//           const BASE_URL = "/dev/index.php/v1/tasks/select";
//           const tokenType = cookies.get("token_type");
//           const accessToken = cookies.get("access_token");
//           const headers = {
//             Authorization: `${tokenType} ${accessToken}`,
//             "Content-Type": "application/json",
//           };
//           const response = await axios.get<object[]>(BASE_URL, {
//             headers,
//           });
//           dataStore.localData = response.data;
//           sessionStorage.setItem("localData", JSON.stringify(response.data));
//           useDataStore.isLoading = false;
//           return true;
//         } catch (error: any) {
//           console.error(`${error} ${error.message}`);
//           dataStore.isAuthenticated = false;
//           return false;
//         }
//       })();
//     }
//   },
// };
export default class TaskService {
  constructor() {
    this.tasks = this.getTasks();
  }
  getTasks(): Promise<any> {}
}

export const taskService = new TaskService();

promiseResolve.bind(taskService.getTasks);
async function promiseResolve(): Promise<any> {
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
  } catch (error: any) {
    console.error(`${error} ${error.message}`);
  }
}
