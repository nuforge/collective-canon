<template>
  <v-chip :prepend-icon="props.icon" variant="text" :class="props.class">
    <template v-slot:prepend>
      <v-icon :color="props.color"></v-icon>
    </template>
    {{ text }}
  </v-chip>
</template>

<script setup lang="ts">

const props = defineProps({
  icon: String,
  text: String,
  class: String,
  color: String
})
</script>
