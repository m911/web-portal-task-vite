import { useDataStore } from "@/stores/data";
import { taskService } from "@/services/taskService";
import { authService } from "@/services/authService";

export const refreshLocalData = (delay: number) => {
  const dataStore = useDataStore();
  setTimeout(() => {
    dataStore.isAuthenticated = !dataStore.isAuthenticated;
  }, delay);
  console.log("component did update?");
};
// export const refreshLocalData = (delay: number) => {
//   const dataStore = useDataStore();
//   setTimeout(async () => {
//     try {
//       if (!dataStore.isAuthenticated) {
//         authService.login();
//       } else {
//         const response = await taskService.getTasks();
//         dataStore.localData = response.data;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }, delay);
// };
