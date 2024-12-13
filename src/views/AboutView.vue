<template>
  <v-responsive>
    <v-app>
      <v-app-bar>
        <div>
          <v-btn color="primary" @click.stop="drawer = !drawer" icon="mdi-menu"></v-btn>
          <v-btn color="primary" @click.stop="drawer = !drawer" icon="mdi-hexagon-slice-3"></v-btn>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const drawer = ref(false);

</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
