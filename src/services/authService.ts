import axios from "axios";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";

export const authService = {
  isAuthenticated: false,
  BASE_URL: "/index.php/login",
  login: async function login(credentials: object): Promise<void> {
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
      this.isAuthenticated = true;
    } catch (error) {
      console.error(error);
      this.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", "false");
    }
  },
};
