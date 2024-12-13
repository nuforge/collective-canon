<template>
  <v-bottom-sheet inset opacity="0.1">
    <v-card prepend-icon="mdi-link" density="compact" class="rounded">
      <template v-slot:title>
        <span>Momentum</span>
      </template>
      <v-card-text>
        Whenever you attempt a task and generate more successes than the Difficulty, extra successes become Momentum, a
        valuable resource allowing you to improve on your success or save for the group.
        <v-row class="flex justify-space-between">
          <v-col><v-icon icon="mdi-hexagon-outline" color="var(--sta-momentum)"></v-icon>0</v-col>
          <v-col><v-icon icon="mdi-hexagon-slice-1" color="var(--sta-momentum)"></v-icon>1</v-col>
          <v-col><v-icon icon="mdi-hexagon-slice-2" color="var(--sta-momentum)"></v-icon>2</v-col>
          <v-col><v-icon icon="mdi-hexagon-slice-3" color="var(--sta-momentum)"></v-icon>3</v-col>
          <v-col><v-icon icon="mdi-hexagon-slice-4" color="var(--sta-momentum)"></v-icon>4</v-col>
          <v-col><v-icon icon="mdi-hexagon-slice-5" color="var(--sta-momentum)"></v-icon>5</v-col>
          <v-col><v-icon icon="mdi-hexagon-slice-6" color="var(--sta-momentum)"></v-icon>6</v-col>
          <v-col><v-icon icon="mdi-hexagon-multiple" color="var(--sta-momentum)"></v-icon>7+</v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup lang="ts">

</script>
