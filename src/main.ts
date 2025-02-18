import "@mdi/font/css/materialdesignicons.css";
import { createApp } from "vue";
import vuetify from "./shared/plugins/vuetify";
import router from "./app/router";
import App from "./app";
import { sentryInit } from "@/shared/api/sentryInit";
import { globalErrorHandler } from "@/shared/api/errorHandler";
const app = createApp(App);

app.config.errorHandler = globalErrorHandler;

sentryInit(app, router);
app.use(vuetify).use(router);
app.mount("#app");
