import { globalErrorHandler } from '@/shared/api/errorHandler'
import { sentryInit } from '@/shared/api/sentryInit'
import { createApp } from 'vue'
import App from './app'
import router from './app/router'
import vuetify from './shared/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

app.config.errorHandler = globalErrorHandler

sentryInit(app, router)
app.use(vuetify).use(router)
app.mount('#app')
