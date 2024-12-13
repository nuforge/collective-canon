<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn class="btn-login" prepend-icon="mdi-chevron-right" append-icon="mdi-chevron-left" text="Login"
          variant="outlined" rounded="lg" size="large" elevation="20" v-bind="activatorProps"></v-btn>
      </template>
      <v-card prepend-icon="mdi-account" title="Account Login">
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="mdi-account-circle-outline" name="login" label="Login"
              type="text"></v-text-field>
            <v-text-field id="password" prepend-icon="mdi-lock" name="password" label="Password"
              type="password"></v-text-field>
          </v-form>

        </v-card-text>
        <v-card-actions class="justify-space-between">
          <v-checkbox label="Remember Me" v-model="rememberMe"></v-checkbox>
          <div>
            <v-btn text="Cancel" variant="plain" @click="dialog = false"></v-btn>
            <v-btn text="Login" variant="tonal" to="/app"></v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialog = ref(false);
const rememberMe = ref(false);
</script>

<style scoped>
.btn-login {
  border-top: none;
  border-bottom: none;
}
</style>
