<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="d-flex justify-space-between align-center">
                <h1>Timeline Manager</h1>
                <v-btn color="primary" @click="showCreateDialog = true">
                    Create Timeline
                </v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col v-for="timeline in timelines" :key="timeline.id" cols="12" sm="6" md="4" lg="3">
                <v-card>
                    <v-card-title>{{ timeline.name }}</v-card-title>
                    <v-card-text>
                        <div>Creator: {{ timeline.creator }}</div>
                        <div>Created: {{ new Date(timeline.createdAt).toLocaleDateString() }}</div>
                        <div>Last Activity: {{ new Date(timeline.lastActivity).toLocaleDateString() }}</div>
                        <div>Missions Completed: {{ timeline.stats.missionsCompleted }}</div>
                        <div>Ships Active: {{ timeline.stats.shipsActive }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click="selectTimeline(timeline)">Select</v-btn>
                        <v-btn color="secondary" @click="forkTimeline(timeline)">Fork</v-btn>
                        <v-btn color="error" @click="deleteTimeline(timeline.id!)">Delete</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <!-- Create Timeline Dialog -->
        <v-dialog v-model="showCreateDialog" max-width="500px">
            <v-card>
                <v-card-title>Create New Timeline</v-card-title>
                <v-card-text>
                    <v-form ref="form">
                        <v-text-field v-model="newTimeline.name" label="Timeline Name" required></v-text-field>
                        <v-text-field v-model="newTimeline.creator" label="Creator Name" required></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="showCreateDialog = false">Cancel</v-btn>
                    <v-btn color="primary" @click="createTimeline">Create</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Fork Timeline Dialog -->
        <v-dialog v-model="showForkDialog" max-width="500px">
            <v-card>
                <v-card-title>Fork Timeline</v-card-title>
                <v-card-text>
                    <v-form ref="forkForm">
                        <v-text-field v-model="forkedTimeline.name" label="New Timeline Name" required></v-text-field>
                        <v-text-field v-model="forkedTimeline.creator" label="Creator Name" required></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="showForkDialog = false">Cancel</v-btn>
                    <v-btn color="primary" @click="confirmFork">Fork</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTimelineStore } from '@/stores/timeline';
import type { Timeline } from '@/stores/db';

const store = useTimelineStore();
const timelines = store.timelines;

const showCreateDialog = ref(false);
const showForkDialog = ref(false);
const selectedTimeline = ref<Timeline | null>(null);

const newTimeline = ref({
    name: '',
    creator: '',
});

const forkedTimeline = ref({
    name: '',
    creator: '',
});

onMounted(async () => {
    await store.loadTimelines();
});

const createTimeline = async () => {
    if (!newTimeline.value.name || !newTimeline.value.creator) return;

    await store.createTimeline(newTimeline.value.name, newTimeline.value.creator);
    showCreateDialog.value = false;
    newTimeline.value = { name: '', creator: '' };
};

const selectTimeline = (timeline: Timeline) => {
    store.setCurrentTimeline(timeline);
};

const forkTimeline = (timeline: Timeline) => {
    selectedTimeline.value = timeline;
    showForkDialog.value = true;
};

const confirmFork = async () => {
    if (!selectedTimeline.value || !forkedTimeline.value.name || !forkedTimeline.value.creator) return;

    await store.forkTimeline(
        selectedTimeline.value.id!,
        forkedTimeline.value.name,
        forkedTimeline.value.creator
    );
    showForkDialog.value = false;
    forkedTimeline.value = { name: '', creator: '' };
};

const deleteTimeline = async (id: number) => {
    if (confirm('Are you sure you want to delete this timeline?')) {
        await store.deleteTimeline(id);
    }
};
</script>
