<template>
  <v-app-bar density="compact">
    <template v-slot:prepend>
      <v-badge color="success" dot>
        <v-avatar size="36px">
          <v-btn icon="mdi-menu" @click="drawer = !drawer"></v-btn>
        </v-avatar>
      </v-badge>
    </template>
    <template v-slot:append>
      <nav>
        <v-btn icon="mdi-calendar-edit"></v-btn>
        <vtag :icon="momentum.getIcon()" :text="momentum.value.toString()" color="var(--sta-momentum)"
          @click="showMomentum = !showMomentum" />
        <v-btn icon="mdi-plus" @click="momentum.increment()"></v-btn>
        <v-btn icon="mdi-minus" @click="momentum.decrement()"></v-btn>
      </nav>
    </template>
  </v-app-bar>

  <v-navigation-drawer temporary v-model="drawer">
    <v-list>
      <v-list-item title="Navigation drawer"></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-main>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-main>
  <MomentumSheet v-model="showMomentum" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MomentumSheet from '@/components/sheets/MomentumSheet.vue';
import vtag from '@/components/VTag.vue';
import Momentum from '@/sta/Momentum';

// Create a Momentum instance with an initial value of 3
const momentum = ref(new Momentum(3));

const drawer = ref(false);
const showMomentum = ref(false);


</script>

<style scoped>
.momentum {
  color: var(--sta-momentum);
}
</style>
