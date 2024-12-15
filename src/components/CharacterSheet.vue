<template>
  <v-card density="compact" variant="text" class="rounded ">
    <v-card-title>{{ character.name }}</v-card-title>
    <v-card-text>
      <v-row dense>
        <v-responsive></v-responsive>
        <v-col cols="auto">
          <v-chip-group direction="vertical">
            <vtag v-for="attr in attributes" :key="attr.id" :append-icon="attr.icon"
              :text="character.getAttribute(attr.id).toString().padStart(2, '0')" :color="attr.color"
              @click="ShowAttribute(attr.id);">
            </vtag>
          </v-chip-group>
        </v-col>
        <v-col>
          <v-img :src="image" :alt="character.name" :width="300" />
        </v-col>
        <v-col cols="auto">
          <v-chip-group direction="vertical" column>
            <vtag v-for="dept in departments" :key="dept.id" :append-icon="dept.icon"
              :text="character.getDepartment(dept.id).toString().padStart(2, '0')" :color="dept.color"
              @click="ShowDepartment(dept.id);">
            </vtag>
          </v-chip-group>
        </v-col>
        <v-responsive></v-responsive>
      </v-row>
      <v-row>
        <v-col>
          <div v-html="character.name"></div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <AttributeSheet v-model="showBottom" :attribute="showAttribute">
  </AttributeSheet>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { attributes } from '@/sta/attributes'
import { departments } from '@/sta/departments'
import vtag from '@/components/VTag.vue';
import Character from '@/sta/character'
import AttributeSheet from '@/components/sheets/AttributeSheet.vue'

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
  if (showBottom.value && showAttribute.value.id === id) {
    closeDrawer()
    return
  }
  OpenDrawer()
}

const OpenDrawer = () => {
  showBottom.value = true
  return
}

const closeDrawer = () => {
  showBottom.value = false
}

const character = ref(new Character('Jenny Everywhere'))
character.value.setAttributes({
  control: 8,
  fitness: 7,
  daring: 11,
  presence: 10,
  insight: 11,
  reason: 9
})
character.value.setDepartments({
  command: 2,
  conn: 5,
  engineering: 4,
  security: 1,
  medicine: 1,
  science: 3,
})


</script>
