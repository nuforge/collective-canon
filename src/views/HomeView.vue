<template>
  <main>
    <div class="logo">
      <h1>Collective Canon</h1>
      <h2>Continuum of Community Continuity</h2>
    </div>
    <v-row justify="center">
      <v-col class="ma-2">
        <LoginDialog />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <p justify="center" class="tagline text-medium-emphasis">“Creatively collaborate, cha'DIch!”</p>
        <p justify="center" class="text-disabled">a “barely-alpha” prototype</p>
      </v-col>
    </v-row>
    <div class="container">
      <img src="@/assets/images/banner.png" alt="Banner" class="banner-image" />
      <div class="overlay"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import LoginDialog from '@/components/LoginDialog.vue';
</script>

<style scoped>
main {
  text-align: center;
}

.container {
  position: relative;
  width: 100%;
  height: 300px;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Adjust the image to fit the container */
  mix-blend-mode: screen;
  /* Apply multiply blend mode */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.overlay {
  /* The color to blend with */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.logo {
  text-align: center;
  margin: 2rem auto;
}

.tagline {
  font-family: 'final_frontierregular';
  font-size: 1.5em;
  color: var(--color-heading);
}

h1 {
  font-family: 'edge_of_the_galaxyregular';
  text-transform: uppercase;
  letter-spacing: 2.5px;
  line-height: 1;
  font-size: 3em;
  border-bottom: 1px solid var(--sta-gold);
}

h2 {
  font-family: 'final_frontierregular';
  text-transform: uppercase;
  font-size: 1em;
  color: var(--color-heading);
}
</style>
