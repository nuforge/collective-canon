<template>
  <v-bottom-sheet inset persistent no-click-animation close-on-content-click :scrim="false">
    <v-card density="compact" class="rounded border-t-md">
      <v-card-title class="d-flex px-1 py-0 justify-space-between border-b-sm align-center">
        <vtag :icon="attribute.icon" :text="attribute.name" :color="attribute.color"></vtag>
        <vtag text="2e Handbook" variant="text" size="small" :href="attribute.link" icon="mdi-link"
          append-icon="mdi-open-in-new" class="text-grey-darken-2">
        </vtag>
      </v-card-title>
      <v-card-text class="card-text py-2 px-3">{{ attribute.description }}
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup lang="ts">
import { defineProps, watch } from 'vue';
import vtag from '@/components/VTag.vue';

interface Attribute {
  id: string,
  name: string,
  type: string,
  description: string,
  color: string,
  icon: string,
  link?: string,
}
const props = defineProps<{
  attribute: Attribute,
}>();


watch(() => props.attribute, (newVal) => {
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
