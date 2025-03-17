import { RoutesName } from "@/shared/constants";

const routes = [
  { path: "/", name: RoutesName.HOME, component: () => import("@/pages/Home") },
  {
    path: "/task",
    name: RoutesName.TASK,
    component: () => import("@/pages/Task"),
  },
  {
    path: "/login",
    name: RoutesName.LOGIN,
    component: () => import("@/pages/Login"),
  },
  {
    path: "/registration",
    name: RoutesName.REGISTRATION,
    component: () => import("@/pages/Registration"),
  },
  {
    path: "/passwordRecovery",
    name: RoutesName.PASSWORD_RECOVERY,
    component: () => import("@/pages/RecoveryPassword"),
  },
];

export default routes;
