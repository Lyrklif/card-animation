import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "./assets/styles/base.scss";
import "virtual:svg-icons-register";

const app = createApp(App);
app.mount("#app");
