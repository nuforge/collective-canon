<template>
  <v-card density="compact" variant="text" class="rounded ">
    <v-card-title class="d-flex justify-center align-center">{{ characterName
      }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-responsive></v-responsive>
        <v-col cols="auto">
          <v-chip-group direction="vertical">
            <vtag v-for="attr in attributes" :key="attr.id" :icon="attr.icon" :text="character[attr.id].toString()"
              :color="attr.color" @click="ShowAttribute(attr.id);">
            </vtag>
          </v-chip-group>
        </v-col>
        <v-col>
          <v-img :src="image" :alt="characterName" :width="300" />
        </v-col>
        <v-col cols="auto">
          <v-chip-group direction="vertical" column>
            <vtag v-for="dept in departments" :key="dept.id" :icon="dept.icon" :text="character[dept.id].toString()"
              :color="dept.color" @click="ShowDepartment(dept.id);">
            </vtag>
          </v-chip-group>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card-text>
  </v-card>
  <AttributeSheet v-model="showBottom" :attribute="showAttribute"></AttributeSheet>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import attributes from '@/sta/attributes'
import departments from '@/sta/departments'

import AttributeSheet from '@/components/sheets/AttributeSheet.vue';

import vtag from '@/components/VTag.vue';
import image from '@/assets/images/characters/jenny-everywhere.png'


const showBottom = ref(false)
const showAttribute = ref(attributes['control'])

const ShowAttribute = (id: string) => {
  checkDrawer(id)
  showAttribute.value = attributes[id]
}
const ShowDepartment = (id: string) => {
  checkDrawer(id)
  showAttribute.value = departments[id]
}

const checkDrawer = (id: string) => {
  console.log('checkDrawer', showBottom.value, showAttribute.value.id, id)
  if (showBottom.value && showAttribute.value.id === id) {
    closeDrawer()
    return
  }
  OpenDrawer()
}

const OpenDrawer = () => {
  console.log('OpenDrawer')
  showBottom.value = true
  return
}

const closeDrawer = () => {
  console.log('closeDrawer')
  showBottom.value = false
}

const statictics: { [key: string]: number } = {
  control: 9,
  daring: 11,
  fitness: 7,
  presence: 10,
  insight: 10,
  reason: 8,
  command: 3,
  conn: 4,
  engineering: 4,
  security: 1,
  science: 1,
  medicine: 3,

}
const characterName = ref('Jenny Everywhere')
const character = ref(statictics)


/*
const departments = ref([
new Attribute('Command', 3, 'mdi-account-group', getCssVariable('--sta-command')),
new Attribute('Conn', 4, 'mdi-gamepad', getCssVariable('--sta-conn')),
new Attribute('Engineering', 4, 'mdi-wrench', getCssVariable('--sta-engineering')),
new Attribute('Security', 1, 'mdi-shield-account', getCssVariable('--sta-security')),
new Attribute('Science', 1, 'mdi-atom-variant', getCssVariable('--sta-science')),
new Attribute('Medicine', 3, 'mdi-hospital-box', getCssVariable('--sta-medicine')),
])*/

</script>
