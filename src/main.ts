import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createVuetify } from 'vuetify'
import { mdi } from 'vuetify/iconsets/mdi'
import { md } from 'vuetify/iconsets/md'
import router from './router'

import 'vuetify/styles'
import '@fontsource/material-symbols-outlined'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

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
  VTextarea,
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
  VSelect,
  VAutocomplete,
  VLigatureIcon,
} from 'vuetify/components'

const app = createApp(App)

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi', // 'mdi' is Material Design Icons; use 'md' for Material Icons
    aliases: {
      'sta-attribute': 'md:edit_attributes',
      'sta-department': 'md:edit_attributes',
      'sta-trait': 'mdi-account-box-outline',
      'sta-talent': 'mdi-account-box-outline',
      'sta-value': 'mdi-star-four-points-small',
      'sta-focus': 'mdi-image-filter-center-focus',

      'sta-species': 'mdi-account-box-multiple',
      'sta-environment': 'mdi-earth-box',
      'sta-upbringing': 'mdi-home-account',
      'sta-career': 'mdi-chart-areaspline',
      'sta-experience': 'mdi-note-edit',
      'sta-event': 'mdi-note-edit',

      'sta-stepone': 'mdi-account-box',
      'sta-steptwo': 'mdi-earth-box',
      'sta-stepthree': 'mdi-home-account',
      'sta-stepfour': 'mdi-chart-areaspline',
      'sta-stepfive': 'mdi-note-edit',
      'sta-stepsix': 'mdi-calendar-account',
      'sta-stepseven': 'mdi-checkbox-multiple-marked',
    },
    sets: {
      mdi,
      md,
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
    VTextarea,
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
    VSelect,
    VAutocomplete,
    VCheckbox,
    VSpacer,
    VDivider,
    VBottomSheet,
    VFooter,
    VChip,
    VChipGroup,
    VLigatureIcon,
  },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
