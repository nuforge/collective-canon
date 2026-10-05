<template>
  <div class="galaxy-map">
    <div ref="mapContainer" class="map-container"></div>

    <!-- Sector Details Dialog -->
    <v-dialog v-model="showDetails" max-width="500px">
      <v-card v-if="selectedSector">
        <v-card-title>{{ selectedSector.name }}</v-card-title>
        <v-card-text>
          <h3>Ships in Sector</h3>
          <v-list>
            <v-list-item v-for="shipId in selectedSector.ships" :key="shipId">
              {{ getShipName(shipId) }}
            </v-list-item>
          </v-list>

          <h3>Missions in Sector</h3>
          <v-list>
            <v-list-item v-for="missionId in selectedSector.missions" :key="missionId">
              {{ getMissionTitle(missionId) }}
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="showDetails = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as d3 from 'd3';
import { useGalaxyStore } from '@/stores/galaxy';
import { useAdmiralStore } from '@/stores/admiral';
import type { Sector } from '@/stores/galaxy';

const mapContainer = ref<HTMLElement | null>(null);
const showDetails = ref(false);
const galaxyStore = useGalaxyStore();
const admiralStore = useAdmiralStore();
const { sectors, selectedSector, initializeSectors, selectSector, updateSectorData } = galaxyStore;

let svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
let simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>;

const getShipName = (shipId: number) => {
  const ship = admiralStore.ships.find(s => s.id === shipId);
  return ship?.name || 'Unknown Ship';
};

const getMissionTitle = (missionId: number) => {
  const mission = admiralStore.missions.find(m => m.id === missionId);
  return mission?.title || 'Unknown Mission';
};

const createMap = () => {
  if (!mapContainer.value) return;

  // Clear existing SVG
  d3.select(mapContainer.value).selectAll('*').remove();

  // Create SVG
  svg = d3.select(mapContainer.value)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', [0, 0, 800, 800]);

  // Create sector groups
  const sectorGroups = svg.selectAll<SVGGElement, Sector>('g')
    .data(sectors.value)
    .enter()
    .append('g')
    .attr('transform', (d: Sector) => `translate(${d.x * 80 + 40},${d.y * 80 + 40})`);

  // Add sector rectangles
  sectorGroups.append('rect')
    .attr('width', 70)
    .attr('height', 70)
    .attr('rx', 5)
    .attr('fill', function (this: SVGRectElement, d: Sector) {
      if (d.ships.length > 0) return '#4CAF50';
      if (d.missions.length > 0) return '#2196F3';
      return '#E0E0E0';
    } as d3.ValueFn<SVGRectElement, Sector, string>)
    .attr('stroke', function (this: SVGRectElement, d: Sector) {
      return selectedSector.value?.id === d.id ? '#FFC107' : '#9E9E9E';
    } as d3.ValueFn<SVGRectElement, Sector, string>)
    .attr('stroke-width', 2)
    .style('cursor', 'pointer')
    .on('click', function (this: SVGRectElement, event: MouseEvent, d: Sector) {
      selectSector(d.id);
      showDetails.value = true;
    } as d3.ValueFn<SVGRectElement, Sector, void>);

  // Add sector labels
  sectorGroups.append('text')
    .attr('x', 35)
    .attr('y', 35)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .text(function (this: SVGTextElement, d: Sector) {
      return d.name;
    } as d3.ValueFn<SVGTextElement, Sector, string>)
    .style('font-size', '12px')
    .style('fill', '#000');

  // Add activity indicators
  sectorGroups.append('circle')
    .attr('cx', 60)
    .attr('cy', 10)
    .attr('r', 5)
    .attr('fill', function (this: SVGCircleElement, d: Sector) {
      return d.ships.length > 0 ? '#4CAF50' : 'none';
    } as d3.ValueFn<SVGCircleElement, Sector, string>);

  sectorGroups.append('circle')
    .attr('cx', 60)
    .attr('cy', 60)
    .attr('r', 5)
    .attr('fill', function (this: SVGCircleElement, d: Sector) {
      return d.missions.length > 0 ? '#2196F3' : 'none';
    } as d3.ValueFn<SVGCircleElement, Sector, string>);
};

// Watch for changes in sectors data
watch(() => sectors.value, () => {
  createMap();
}, { deep: true });

onMounted(() => {
  initializeSectors();
  updateSectorData();
  createMap();
});

onUnmounted(() => {
  if (simulation) {
    simulation.stop();
  }
});
</script>

<style scoped>
.galaxy-map {
  width: 100%;
  height: 100%;
  min-height: 800px;
}

.map-container {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
}
</style>
