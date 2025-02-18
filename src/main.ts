import "@mdi/font/css/materialdesignicons.css";
import { createApp } from "vue";
import vuetify from "./shared/plugins/vuetify";
import router from "./app/router";
import App from "./app";
import { sentryInit } from "@/shared/api/sentryInit";

const app = createApp(App);

sentryInit(app, router);
app.use(vuetify).use(router);
app.mount("#app");
