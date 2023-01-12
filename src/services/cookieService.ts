import { useCookies } from "vue3-cookies";
const cookies1 = useCookies();
const cookies = cookies1.cookies;

const COOKIE_PROPS = {
  TOKEN_TYPE: "token_type",
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  EXPIRES_IN: "expires_in",
  EXPIRES_AT: "expires_at",
  CLIENT_ID: "client_id",
  CLIENT_SECRET: "client_secret",
  REDIRECT_URI: "redirect_uri",
  SCOPE: "scope",
  STATE: "state",
};

// (function useCookie() {
//   const cookies1 = useCookies();
//   const cookiesVar = cookies1.cookies;
//   COOKIE_PROPS.cookies = cookiesVar;
// })();

export { cookies, COOKIE_PROPS };
