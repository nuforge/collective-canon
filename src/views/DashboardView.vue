<template>
  <h1>Character Profile</h1>
  <p>Character Name: {{ characterName }}</p>
  <v-row no-gutters justify="space-around">
    <v-col cols="1">
      <v-chip-group column class="d-flex align-start">
        <vtag v-for="(att, index) in attributes" :key="index" :icon="att.icon" :text="att.valueStr" :color="att.color">
        </vtag>
      </v-chip-group>
    </v-col>
    <v-col>
      <v-img :src="image" alt="Jenny Everywhere" :width="300" />
    </v-col>
    <v-col cols="1">
      <v-chip-group column class="d-flex  align-start">
        <vtag v-for="(att, index) in departments" :key="index" :icon="att.icon" :text="att.valueStr" :color="att.color">
        </vtag>
      </v-chip-group>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import vtag from '@/components/VTag.vue';

import image from '@/assets/images/characters/jenny-everywhere.png'

import Attribute from '@/sta/Attribute' // Import your Attribute class

const getCssVariable = (variableName: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

const characterName = ref('Jenny Everywhere')

const attributes = ref([
  new Attribute('Control', 9, 'mdi-image-filter-center-focus-strong', getCssVariable('--sta-teal')),
  new Attribute('Daring', 11, 'mdi-gamepad', getCssVariable('--sta-teal')),
  new Attribute('Fitness', 7, 'mdi-dumbbell', getCssVariable('--sta-teal')),
  new Attribute('Presence', 10, 'mdi-run-fast', getCssVariable('--sta-teal')),
  new Attribute('Insight', 10, 'mdi-clover-outline', getCssVariable('--sta-teal')),
  new Attribute('Reason', 8, 'mdi-shield-account-outline', getCssVariable('--sta-teal')),
])
const departments = ref([
  new Attribute('Command', 3, 'mdi-account-group', getCssVariable('--sta-command')),
  new Attribute('Conn', 4, 'mdi-gamepad', getCssVariable('--sta-conn')),
  new Attribute('Engineering', 4, 'mdi-wrench', getCssVariable('--sta-engineering')),
  new Attribute('Security', 1, 'mdi-shield-account', getCssVariable('--sta-security')),
  new Attribute('Science', 1, 'mdi-atom-variant', getCssVariable('--sta-science')),
  new Attribute('Medicine', 3, 'mdi-hospital-box', getCssVariable('--sta-medicine')),
])

</script>
