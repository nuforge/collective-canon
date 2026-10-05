<!-- src/layouts/MainLayout.vue -->
<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" :prepend-icon="item.icon"
          :title="item.title" />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Space Fleet Command</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-refresh" @click="refreshData">
        <v-tooltip activator="parent" location="bottom">Refresh Data</v-tooltip>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTimelineStore } from '@/stores/timeline';
import { useAdmiralStore } from '@/stores/admiral';
import { useGalaxyStore } from '@/stores/galaxy';

const drawer = ref(true);

const menuItems = [
  { title: 'Timeline Manager', icon: 'mdi-timeline-clock', to: '/timelines' },
  { title: 'Admiral Dashboard', icon: 'mdi-view-dashboard', to: '/admiral' },
  { title: 'Galaxy Map', icon: 'mdi-map', to: '/galaxy' }
];

const timelineStore = useTimelineStore();
const admiralStore = useAdmiralStore();
const galaxyStore = useGalaxyStore();

const refreshData = async () => {
  await timelineStore.loadTimelines();
  if (timelineStore.currentTimeline) {
    await admiralStore.loadData();
    galaxyStore.updateSectorData();
  }
};
</script>

<style scoped>
.main {
  margin: 0;
  height: 100%;
  background: linear-gradient(to bottom, #000000, var(--vt-c-blue-faded));
}

.main-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
