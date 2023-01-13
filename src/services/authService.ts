import axios from "axios";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";

export const authService = {
  BASE_URL: "/index.php/login",
  // BASE_URL: "https://api.baubuddy.de/dev/index.php/v1/login",
  login: async function login(credentials: object): Promise<boolean> {
    try {
      const response = await axios.post(this.BASE_URL, credentials, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic QVBJX0V4cGxvcmVyOjEyMzQ1NmlzQUxhbWVQYXNz",
        },
      });
      const { token_type, access_token } = response.data.oauth;
      cookies.set(COOKIE_PROPS.TOKEN_TYPE, token_type, 1200);
      cookies.set(COOKIE_PROPS.ACCESS_TOKEN, access_token, 1200);
      return true;
    } catch (error) {
      console.error(error);
      console.log("auth failed");
      return false;
    }
  },
};
