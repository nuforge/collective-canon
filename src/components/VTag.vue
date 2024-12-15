<template>
  <v-chip variant="text" :class="props.class" rounded="lg" :append-icon="props.appendIcon"
    :prepend-icon="props.prependIcon">
    <template v-if="props.prependIcon" v-slot:prepend>
      <v-icon :color="props.color"></v-icon>
    </template>
    <template v-if="props.appendIcon" v-slot:append>
      <v-icon :color="props.color"></v-icon>
    </template>
    <template v-if="props.text" v-slot:default>
      {{ props.text }}
    </template>
  </v-chip>
</template>

<script setup lang="ts">

const props = defineProps({
  prependIcon: String,
  appendIcon: String,
  icon: String,
  text: String,
  class: String,
  color: String
})
</script>
