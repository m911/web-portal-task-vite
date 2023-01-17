import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();

export const refreshTokenTimeout = (delay: number) => {
  setTimeout(() => {
    // authService.login(localCredentials);
  }, delay);
};
