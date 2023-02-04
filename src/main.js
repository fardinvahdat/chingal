import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import Loading from "@/components/loading/Loading.vue";
import ToastService from "primevue/toastservice";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.component("Dialog", Dialog);
app.component("Loading", Loading);

app.mount("#app");
