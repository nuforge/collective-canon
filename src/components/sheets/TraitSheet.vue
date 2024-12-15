<template>
  <v-bottom-sheet inset persistent close-on-content-click :scrim="false">
    <v-card density="compact" class="rounded border-t-md">
      <v-card-title class="d-flex px-1 py-0 justify-space-between border-b-sm align-center">
        <vtag :prepend-icon="trait.icon" :text="trait.name" :color="trait.color"></vtag>
        <vtag text="2e Handbook" variant="text" size="small" :href="trait.link" icon="mdi-link"
          append-icon="mdi-open-in-new" class="text-grey-darken-2">
        </vtag>
      </v-card-title>
      <v-card-text class="card-text py-2 px-3">{{ trait.description }}
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup lang="ts">
import { defineProps, watch } from 'vue';
import vtag from '@/components/VTag.vue';

interface Trait {
  name: string,
  icon: string,
  type: string,
  description: string,
  color: string,
  value?: number,
  link?: string,
}

const props = defineProps<{
  trait: Trait,
}>();


watch(() => props.trait, (newVal) => {
  console.log('Attribute prop updated:', newVal)
}, { immediate: true }) // Run immediately to handle the first load as well

// This method is triggered when clicking outside the bottom sheet
/*

const emit = defineEmits(['update:modelValue']);

const onClickOutside = (event: MouseEvent) => {
  console.log('Clicked outside:', event.target)
  // Close the drawer if clicking outside, otherwise do nothing
  if (event.target instanceof Element && !event.target.closest('.v-bottom-sheet') && !event.target.closest('.vtag')) {
    emit('update:modelValue', false)
  }
} */
</script>

<style scoped>
.card-text a {
  color: var(--sta-momentum);
  cursor: pointer;

}
</style>
