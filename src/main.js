import { createApp } from 'vue'
import { DATA } from "@/constants/data";

import App from './App.vue'

import './assets/main.css'

const app = createApp(App);

app.provide("clothData", DATA);

app.mount('#app')
