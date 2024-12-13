<script setup lang="ts">
</script>

<template>
  <main>
    <div class="logo">
      <h1>Collective Canon</h1>
      <h2>Continuum of Community Continuity</h2>
    </div>
    <v-row>
      <v-btn class="btn-login" prepend-icon="mdi-chevron-right" append-icon="mdi-chevron-left" text="Login"
        variant="outlined" rounded="lg"></v-btn>
    </v-row>
    <v-row class="tagline">
      “Creatively collaborate, cha'DIch!”
    </v-row>
    <v-row>
      a “barely-alpha” prototype
    </v-row>
    <div class="container">
      <img src="@/assets/images/banner.png" alt="Banner" class="banner-image" />
      <div class="overlay"></div>
    </div>
  </main>
</template>

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

.btn-login {
  border-top: none;
  border-bottom: none;
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
