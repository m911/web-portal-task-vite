import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const currentRouter = useRoute();

export function loginRedirect() {
  router.replace("/login");
}
export function loginComplete() {
  router.replace("/LoginSuccess");
}

export function dataRedirect() {
  currentRouter.replace("/data");
}
