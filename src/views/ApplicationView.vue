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
        <vtag icon="mdi-hexagon-slice-2" text="2" color="var(--sta-momentum)" class="border-b-md rounded px-3"
          @click="momentum = !momentum" />
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
  <MomentumSheet v-model="momentum" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MomentumSheet from '@/components/sheets/MomentumSheet.vue';
import vtag from '@/components/VTag.vue';

const drawer = ref(false);
const momentum = ref(false);
</script>

<style scoped>
.momentum {
  color: var(--sta-momentum);
}
</style>
