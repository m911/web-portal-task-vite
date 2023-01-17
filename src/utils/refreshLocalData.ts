import { useDataStore } from "@/stores/data";
import { taskService } from "@/services/taskService";
import { authService } from "@/services/authService";

export const refreshLocalData = (delay: number) => {
  const dataStore = useDataStore();
  setInterval(async () => {
    try {
      if (!dataStore.isAuthenticated) {
        await authService.login();
        const response = await taskService.getTasks();
        dataStore.localData = response.data;
      } else {
        const response = await taskService.getTasks();
        dataStore.localData = response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }, delay);
};
