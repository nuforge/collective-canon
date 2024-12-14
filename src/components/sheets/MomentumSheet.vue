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
          <vtag v-for="i in range" :key="i" :icon="momentum.getIcon(i)" :text="i.toString()" color="var(--sta-momentum)"
            @click="setMomentum(i)"></vtag>
        </v-chip-group>
      </v-card-actions>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import vtag from '@/components/VTag.vue';
import { useCounterStore } from '@/stores/counter';
import Momentum from '@/sta/Momentum' // Import your Momentum class

const range = Array.from({ length: 8 }, (_, i) => i);

const momentum = new Momentum(0);
const momentumStore = ref(useCounterStore());

const setMomentum = (value: number) => {
  momentumStore.value.setMomentum(value);
}

</script>

<style scoped>
.card-text a {
  color: var(--sta-momentum);
  cursor: pointer;

}
</style>
