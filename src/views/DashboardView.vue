<template>
  <v-card density="compact" variant="text" class="rounded ">
    <v-card-title class="d-flex justify-center align-center">{{ character.name
      }}</v-card-title>
    <v-card-text>

      <v-row>
        <v-responsive></v-responsive>
        <v-col cols="auto">
          <v-chip-group direction="vertical">
            <vtag v-for="attr in attributes" :key="attr.id" :icon="attr.icon" :text="statictics[attr.id].toString()"
              :color="attr.color" @click="ShowAttribute(attr.id);">
            </vtag>
          </v-chip-group>
        </v-col>
        <v-col>
          <v-img :src="image" :alt="character.name.value" :width="300" />
        </v-col>
        <v-col cols="auto">
          <v-chip-group direction="vertical" column>
            <vtag v-for="dept in departments" :key="dept.id" :icon="dept.icon" :text="statictics[dept.id].toString()"
              :color="dept.color" @click="ShowDepartment(dept.id);">
            </vtag>
          </v-chip-group>
        </v-col>
        <v-responsive></v-responsive>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-responsive></v-responsive>
        <v-col>
          <v-card-text>
            <div v-html="character.bio.value"></div>
          </v-card-text>
        </v-col>
        <v-responsive></v-responsive>
      </v-row>
    </v-card-text>
  </v-card>
  <AttributeSheet v-model="showBottom" :attribute="showAttribute">
  </AttributeSheet>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import attributes from '@/sta/attributes'
import departments from '@/sta/departments'

import AttributeSheet from '@/components/sheets/AttributeSheet.vue';

import vtag from '@/components/VTag.vue';
import image from '@/assets/images/characters/jenny-everywhere.png'

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

/// DO NOT USE any?
const character: Record<string, any> = {
  name: ref<string>('Jenny Everywhere'),
  stats: ref(statictics),
  bio: ref("<p>Jenny Everywhere, a memetic being. Her memory is recorded by tachyons imprinting information onto a memory crystal stored in the only physical structure of her otherwise holographic being, a robotic arm.</p><p>This reliance on gravity-defying particles, means her memory is unaffected by time travel and highly resistant to changes in the timeline and temporal causality loops.</p><p>When events alter the space/time continuum resulting in an alternate timeline, Jenny experiences the new reality while retaining memories from before the continuity shift.</p><p>If/when she is able to return to her own time or escape/end the loop, Jenny's retains experiences as memories other might forget once reality realigns.</p><p>Her outward appearance can often change inexplicable to those in her presence, a result of small changes to the timeline.</p>")

}

console.log('character', character.name, character.stats)
character.name = 'Jenny Evesrywhere'


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
