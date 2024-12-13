import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createVuetify } from 'vuetify'
import router from './router'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import {
  VApp,
  VAppBar,
  VContainer,
  VMain,
  VNavigationDrawer,
  VList,
  VListItem,
  VForm,
  VTable,
  VFileInput,
  VRow,
  VCol,
  VTextField,
  VBtn,
  VIcon,
  VCard,
  VCardActions,
  VDialog,
} from 'vuetify/components'

const app = createApp(App)

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi', // 'mdi' is Material Design Icons; use 'md' for Material Icons
    aliases: {
      cancel: 'mdi-cancel', // Example alias
    },
  },
  components: {
    VApp,
    VAppBar,
    VContainer,
    VMain,
    VNavigationDrawer,
    VList,
    VListItem,
    VForm,
    VTable,
    VFileInput,
    VRow,
    VCol,
    VTextField,
    VCard,
    VCardActions,
    VIcon,
    VBtn,
    VDialog,
  },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
