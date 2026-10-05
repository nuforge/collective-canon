<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1>Admiral Dashboard</h1>
            </v-col>
        </v-row>

        <!-- Ship Grid -->
        <v-row>
            <v-col cols="12">
                <h2>Ships</h2>
                <div class="d-flex justify-space-between align-center mb-4">
                    <div></div>
                    <v-btn color="primary" @click="showCreateShipDialog = true">
                        Add New Ship
                    </v-btn>
                </div>
                <v-row>
                    <v-col v-for="ship in ships" :key="ship.id" cols="12" sm="6" md="4" lg="3">
                        <v-card :color="getShipColor(ship.status)">
                            <v-card-title>{{ ship.name }}</v-card-title>
                            <v-card-text>
                                <div>Status: {{ ship.status }}</div>
                                <div>Sector: {{ ship.sector }}</div>
                                <div>Last Maintenance: {{ new Date(ship.lastMaintenance).toLocaleDateString() }}</div>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn v-for="status in ['ready', 'damaged', 'missing'] as const" :key="status"
                                    :color="getShipColor(status)" @click="updateShipStatus(ship.id!, status)">
                                    {{ status }}
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <!-- Mission Queue -->
        <v-row>
            <v-col cols="12">
                <h2>Mission Queue</h2>
                <v-tabs v-model="activeTab">
                    <v-tab value="pending">Pending</v-tab>
                    <v-tab value="in-progress">In Progress</v-tab>
                    <v-tab value="completed">Completed</v-tab>
                </v-tabs>

                <v-card-text>
                    <v-window v-model="activeTab">
                        <v-window-item value="pending">
                            <v-list>
                                <v-list-item v-for="mission in missionsByStatus.pending" :key="mission.id">
                                    <v-list-item-title>{{ mission.title }}</v-list-item-title>
                                    <v-list-item-subtitle>Sector: {{ mission.sector }}</v-list-item-subtitle>
                                    <template v-slot:append>
                                        <v-btn color="primary" @click="openAssignDialog(mission)">
                                            Assign Ship
                                        </v-btn>
                                    </template>
                                </v-list-item>
                            </v-list>
                        </v-window-item>

                        <v-window-item value="in-progress">
                            <v-list>
                                <v-list-item v-for="mission in missionsByStatus.inProgress" :key="mission.id">
                                    <v-list-item-title>{{ mission.title }}</v-list-item-title>
                                    <v-list-item-subtitle>
                                        Sector: {{ mission.sector }}
                                        <br>
                                        Assigned Ship: {{ getShipName(mission.assignedShipId) }}
                                    </v-list-item-subtitle>
                                    <template v-slot:append>
                                        <v-btn color="success" @click="completeMission(mission.id!)">
                                            Complete
                                        </v-btn>
                                    </template>
                                </v-list-item>
                            </v-list>
                        </v-window-item>

                        <v-window-item value="completed">
                            <v-list>
                                <v-list-item v-for="mission in missionsByStatus.completed" :key="mission.id">
                                    <v-list-item-title>{{ mission.title }}</v-list-item-title>
                                    <v-list-item-subtitle>
                                        Sector: {{ mission.sector }}
                                        <br>
                                        Completed: {{ new Date(mission.completedAt!).toLocaleDateString() }}
                                    </v-list-item-subtitle>
                                </v-list-item>
                            </v-list>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-col>
        </v-row>

        <!-- Assign Ship Dialog -->
        <v-dialog v-model="assignDialogVisible" max-width="500px">
            <v-card>
                <v-card-title>Assign Ship to Mission</v-card-title>
                <v-card-text>
                    <v-select v-model="selectedShipId" :items="shipsByStatus.ready" item-title="name" item-value="id"
                        label="Select Ship"></v-select>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="assignDialogVisible = false">Cancel</v-btn>
                    <v-btn color="primary" @click="assignShip">Assign</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Generate Mission Button -->
        <v-row>
            <v-col cols="12" class="d-flex justify-center">
                <v-btn color="primary" size="large" @click="generateMission">
                    Generate New Mission
                </v-btn>
            </v-col>
        </v-row>

        <!-- Create Ship Dialog -->
        <v-dialog v-model="showCreateShipDialog" max-width="500px">
            <v-card>
                <v-card-title>Add New Ship</v-card-title>
                <v-card-text>
                    <v-form ref="shipForm">
                        <v-text-field v-model="newShip.name" label="Ship Name" required></v-text-field>
                        <v-select v-model="newShip.sector" :items="sectorNames" label="Initial Sector"
                            required></v-select>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="showCreateShipDialog = false">Cancel</v-btn>
                    <v-btn color="primary" @click="createShip">Create</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useAdmiralStore } from '@/stores/admiral';
import type { Mission } from '@/stores/db';
import { useGalaxyStore } from '@/stores/galaxy';
import type { Sector } from '@/stores/galaxy';
import { useTimelineStore } from '@/stores/timeline';

const store = useAdmiralStore();
const { ships, shipsByStatus, missionsByStatus } = store;

const activeTab = ref('pending');
const assignDialogVisible = ref(false);
const selectedShipId = ref<number | null>(null);
const selectedMission = ref<Mission | null>(null);
const showCreateShipDialog = ref(false);
const newShip = ref({
    name: '',
    sector: '',
});

// Get sector names from galaxy store
const galaxyStore = useGalaxyStore();
const sectorNames = computed(() =>
    galaxyStore.sectors.map((s: Sector) => s.name)
);

onMounted(async () => {
    await store.loadData();
});

const getShipColor = (status: string) => {
    switch (status) {
        case 'ready': return 'success';
        case 'damaged': return 'warning';
        case 'missing': return 'error';
        default: return 'grey';
    }
};

const updateShipStatus = async (shipId: number, status: 'ready' | 'damaged' | 'missing') => {
    await store.updateShipStatus(shipId, status);
};

const openAssignDialog = (mission: Mission) => {
    selectedMission.value = mission;
    assignDialogVisible.value = true;
};

const assignShip = async () => {
    if (!selectedShipId.value || !selectedMission.value) return;

    await store.assignShipToMission(selectedMission.value.id!, selectedShipId.value);
    assignDialogVisible.value = false;
    selectedShipId.value = null;
    selectedMission.value = null;
};

const completeMission = async (missionId: number) => {
    await store.completeMission(missionId);
};

const getShipName = (shipId?: number) => {
    if (!shipId) return 'None';
    const ship = ships.find(s => s.id === shipId);
    return ship?.name || 'Unknown';
};

const generateMission = async () => {
    // Mock API response for mission generation
    const mockSectors = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'];
    const mockTitles = [
        'Scout New Territory',
        'Rescue Operation',
        'Resource Gathering',
        'Diplomatic Mission',
        'Defense Patrol'
    ];

    const randomSector = mockSectors[Math.floor(Math.random() * mockSectors.length)];
    const randomTitle = mockTitles[Math.floor(Math.random() * mockTitles.length)];

    await store.createMission(randomTitle, randomSector);
};

const createShip = async () => {
    if (!newShip.value.name || !newShip.value.sector) return;

    const timelineStore = useTimelineStore();
    if (!timelineStore.currentTimeline) {
        alert('Please select a timeline first');
        return;
    }

    await store.addShip({
        name: newShip.value.name,
        sector: newShip.value.sector,
        status: 'ready',
        timelineId: timelineStore.currentTimeline.id!,
        lastMaintenance: new Date(),
    });

    showCreateShipDialog.value = false;
    newShip.value = { name: '', sector: '' };
    galaxyStore.updateSectorData();
};
</script>
