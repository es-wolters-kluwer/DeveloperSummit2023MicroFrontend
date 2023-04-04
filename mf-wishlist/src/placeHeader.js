import { createApp } from "vue";

import Login from "./App.vue";

export default function placeHeader(el) {
  createApp(Login).mount(el);
}
