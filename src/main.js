import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from "./components/UI/BaseButton.vue"
import TheHeader from "./components/layouts/TheHeader.vue"

const app = createApp(App)
app.component("base-button", BaseButton)
app.component("the-header", TheHeader)
app.mount('#app')