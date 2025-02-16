const routes = [
  { path: "/", name: "home", component: () => import("@/pages/Home") },
  { path: "/task", name: "task", component: () => import("@/pages/Task") },
];

export default routes;
