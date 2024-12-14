<template>
  <v-bottom-sheet inset opacity="0.1">
    <v-card density="compact" class="rounded border-t-md">
      <v-card-title class="d-flex px-1 py-0 justify-space-between border-b-sm align-center">
        <vtag icon="mdi-hexagon-multiple-outline" text="Momentum" color="var(--sta-momentum)"></vtag>
        <vtag text="2e Handbook" variant="text" size="small" href="https://github.com/nuforge?tab=repositories"
          icon="mdi-link" append-icon="mdi-open-in-new" class="text-grey-darken-2">
        </vtag>
      </v-card-title>
      <v-card-text class="card-text py-2 px-3">
        <p>Whenever you attempt a task and generate more successes than the <a>Difficulty</a>,
          extra successes become <a>Momentum</a>,
          a
          valuable resource allowing you to improve on your success or save for the group.</p>
      </v-card-text>
      <v-card-actions class="pa-1">
        <v-chip-group column>
          <vtag icon="mdi-hexagon-outline" text="0" color="var(--sta-momentum)"></vtag>
          <vtag icon="mdi-hexagon-slice-1" text="1" color="var(--sta-momentum)"></vtag>
          <vtag icon="mdi-hexagon-slice-2" text="2" color="var(--sta-momentum)"></vtag>
          <vtag icon="mdi-hexagon-slice-3" text="3" color="var(--sta-momentum)"></vtag>
          <vtag icon="mdi-hexagon-slice-4" text="4" color="var(--sta-momentum)"></vtag>
          <vtag icon="mdi-hexagon-slice-5" text="5" color="var(--sta-momentum)"></vtag>
          <vtag icon="mdi-hexagon-slice-6" text="6" color="var(--sta-momentum)"></vtag>
          <vtag icon="mdi-hexagon-multiple" text="7+" color="var(--sta-momentum)"></vtag>
        </v-chip-group>
      </v-card-actions>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup lang="ts">
import vtag from '@/components/VTag.vue';

</script>

<style scoped>
.card-text a {
  color: var(--sta-momentum);
  cursor: pointer;

}
</style>
