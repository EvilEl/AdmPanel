import { RoutesName } from "@/shared/constants/index";

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
    component: () => import("@/pages/Task"),
  },
  {
    path: "/passwordRecovery",
    name: RoutesName.PASSWORD_RECOVERY,
    component: () => import("@/pages/Task"),
  },
];

export default routes;
