import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();

export const refreshTokenTimeout = (delay: number) => {
  setTimeout(() => {
    // authService.login(localCredentials);
    console.log("timeout function in auth service is run");
  }, delay);
};
