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
          <h2>Traits</h2>
          <vtag v-for="(trait, id) in character.traits" :key="id" :text="trait.name" :color="trait.color"
            :prepend-icon="trait.icon" @click="ShowTrait(trait.id)">
          </vtag>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>Talents and Abilities</h2>
          <vtag v-for="(trait, id) in character.talents" :key="id" :text="trait.name" :color="trait.color"
            :prepend-icon="trait.icon" @click="ShowTalent(trait.id)">
          </vtag>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>Values</h2>
          <vtag v-for="(trait, id) in character.values" :key="id" :text="trait.name" :color="trait.color"
            :prepend-icon="trait.icon" @click="ShowValue(trait.id)">
          </vtag>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>Focuses</h2>
          <vtag v-for="(trait, id) in character.focuses" :key="id" :text="trait.name" :color="trait.color"
            :prepend-icon="trait.icon" @click="ShowFocus(trait.id)">
          </vtag>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <AttributeSheet v-model="showAttributeDrawer" :attribute="attributeValues">
  </AttributeSheet>
  <TraitSheet v-model="showTraitDrawer" :trait="traitValues">
  </TraitSheet>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { attributes } from '@/sta/attributes'
import { departments } from '@/sta/departments'
import vtag from '@/components/VTag.vue';
import AttributeSheet from '@/components/sheets/AttributeSheet.vue'
import TraitSheet from '@/components/sheets/TraitSheet.vue'
import JennyEverywhere from '@/character/JennyEverywhere'

import image from '@/assets/images/characters/jenny-everywhere.png'

const showAttributeDrawer = ref(false)
const attributeValues = ref(attributes['control'])
const showTraitDrawer = ref(false)
const traitValues = ref(attributes['control'])


const character = ref(JennyEverywhere)


const ShowAttribute = (id: string) => {
  checkDrawer(id)
  attributeValues.value = attributes[id]
}
const ShowDepartment = (id: string) => {
  checkDrawer(id)
  attributeValues.value = departments[id]
}
const ShowTrait = (id: string) => {
  traitValues.value = character.value.traits[id]
  showTraitDrawer.value = true
}

const ShowTalent = (id: string) => {
  traitValues.value = character.value.talents[id]
  showTraitDrawer.value = true
}

const ShowValue = (id: string) => {
  traitValues.value = character.value.values[id]
  showTraitDrawer.value = true
}

const ShowFocus = (id: string) => {
  traitValues.value = character.value.focuses[id]
  showTraitDrawer.value = true
}

const checkDrawer = (id: string) => {
  if (showAttributeDrawer.value && attributeValues.value.id === id) {
    closeDrawer()
    return
  }
  OpenDrawer()
}

const OpenDrawer = () => {
  showAttributeDrawer.value = true
  return
}

const closeDrawer = () => {
  showAttributeDrawer.value = false
}



</script>
