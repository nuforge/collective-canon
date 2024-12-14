<template>
  <v-card>
    <v-card-title>{{ characterName }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-responsive></v-responsive>
        <v-col cols="auto" class="px-0">
          <v-chip-group direction="vertical">
            <vtag v-for="(att, index) in attributes" :key="index" :icon="att.icon" :text="att.valueStr"
              :color="att.color">
            </vtag>
          </v-chip-group>
        </v-col>
        <v-col cols="auto" class="px-0">
          <v-img :src="image" :alt="characterName" :width="300" />
        </v-col>
        <v-col cols="auto" class="px-0">
          <v-chip-group direction="vertical" column>
            <vtag v-for="(att, index) in departments" :key="index" :icon="att.icon" :text="att.valueStr"
              :color="att.color">
            </vtag>
          </v-chip-group>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card-text>
  </v-card>
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
  new Attribute('Fitness', 7, 'mdi-heart-pulse', getCssVariable('--sta-teal')),
  new Attribute('Presence', 10, 'mdi-account-multiple', getCssVariable('--sta-teal')),
  new Attribute('Insight', 10, 'mdi-head-snowflake', getCssVariable('--sta-teal')),
  new Attribute('Reason', 8, 'mdi-brain', getCssVariable('--sta-teal')),
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
