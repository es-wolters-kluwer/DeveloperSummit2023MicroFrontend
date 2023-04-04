import Vue from 'vue'
import App from './App.vue'

import { createApp } from 'vue'

let featured = createApp({
  /*...*/
}).mount('.featured--vue_js')


export class MfeVue extends HTMLElement {
  connectedCallback() {
    // new Vue(App).mount(this)

    let featured = createApp(App).mount(this)

  }
}

customElements.define('vue-element', MfeVue);