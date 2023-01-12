import axios from "axios";
import { cookies, COOKIE_PROPS } from "./cookieService";

export const taskService = (function () {
  return { getTasks };

  async function getTasks() {
    try {
      const BASE_URL = "https://api.baubuddy.de/dev/index.php/v1/tasks/select";
      const tokenType = cookies.get("token_type");
      const accessToken = cookies.get("access_token");
      const headers = {
        Authorization: `${tokenType} ${accessToken}`,
        "Content-Type": "application/json",
      };
      const response = await axios.get(`/dev/index.php/v1/tasks/select`, {
        headers,
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
})();
