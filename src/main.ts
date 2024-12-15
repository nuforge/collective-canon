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
  VAppBarNavIcon,
  VAppBarTitle,
  VContainer,
  VMain,
  VLayout,
  VResponsive,
  VNavigationDrawer,
  VList,
  VListItem,
  VForm,
  VTable,
  VFileInput,
  VRow,
  VCol,
  VTextField,
  VImg,
  VBtn,
  VAvatar,
  VBadge,
  VIcon,
  VCard,
  VCardItem,
  VCardTitle,
  VCardText,
  VCardActions,
  VSheet,
  VDialog,
  VCheckbox,
  VSpacer,
  VDivider,
  VFooter,
  VBottomSheet,
  VChip,
  VChipGroup,
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
    VAppBarNavIcon,
    VAppBarTitle,
    VContainer,
    VMain,
    VLayout,
    VResponsive,
    VNavigationDrawer,
    VList,
    VListItem,
    VForm,
    VTable,
    VFileInput,
    VRow,
    VCol,
    VTextField,
    VImg,
    VCard,
    VCardItem,
    VCardTitle,
    VCardText,
    VCardActions,
    VSheet,
    VIcon,
    VBtn,
    VAvatar,
    VBadge,
    VDialog,
    VCheckbox,
    VSpacer,
    VDivider,
    VBottomSheet,
    VFooter,
    VChip,
    VChipGroup,
  },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
