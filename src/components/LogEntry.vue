<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <vtag prepend-icon="mdi-calendar-edit" v-bind="activatorProps"></vtag>
      </template>

      <v-card prepend-icon="mdi-calendar-edit" title="Log Entry">
        <v-card-text>
          <v-row dense>
            <v-col>
              <v-select density="compact" :items="logTypes" item-title="label" item-value="label" auto-select-first
                required v-model="LogEntry.logType.value">
                <template #item="{ props, item }">
                  <v-list-item v-bind="props">
                    <v-icon>{{ item.value.icon }}</v-icon>
                  </v-list-item>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field label="Stardate" required density="compact"></v-text-field>
            </v-col>
          </v-row>

          <v-row dense>
            <v-col cols="12">
              <v-text-field label="title" required density="compact"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea label="body"></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

          <v-btn color="primary" text="Save" variant="tonal" @click="dialog = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import vtag from '@/components/VTag.vue';
const dialog = ref(false)

const logTypes = [{ label: 'Captain\'s Log', icon: 'mdi-account-circle' }, { label: 'Mission Log', icon: 'mdi-calendar' }]

const LogEntry = {
  logType: ref(logTypes[0]),
  stardate: ref(''),
  title: ref('')
}


</script>

<style scoped></style>
