<!-- src/layouts/MainLayout.vue -->
<template>
  <v-main>
    <v-container>
      <div class="main-layout">
        <header>
          <!-- Your header, logo, navigation, etc. -->
        </header>
        <main>
          <router-view></router-view> <!-- The main content will be rendered here -->
        </main>
        <footer>
          <!-- Footer content -->
        </footer>
      </div>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
defineProps({
  title: String
})
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
