import { useDataStore } from "@/stores/data";
import { taskService } from "@/services/taskService";

export const refreshLocalData = (delay: number) => {
  const dataStore = useDataStore();
  setTimeout(async () => {
    try {
      const response = await taskService.getTasks();
      dataStore.remoteData = response.data;
    } catch (error) {
      console.log(error);
    }
  }, delay);
};
