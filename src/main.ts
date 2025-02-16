import "@mdi/font/css/materialdesignicons.css";
import { createApp } from "vue";
import vuetify from "./shared/plugins/vuetify";
import router from "./app/router";
import App from "./app";

const app = createApp(App);

app.use(vuetify).use(router);
app.mount("#app");
