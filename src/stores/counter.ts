import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import Momentum from '@/sta/Momentum' // Import your Momentum class

export const useCounterStore = defineStore('counter', () => {
  const momentum = ref(new Momentum(0)) // Initial value is 3

  // Computed properties
  const momentumValue = computed(() => momentum.value.value) // Current momentum value
  const momentumIcon = computed(() => momentum.value.getIcon()) // Current icon

  // Actions
  const incrementMomentum = () => {
    momentum.value.increment()
  }

  const decrementMomentum = () => {
    momentum.value.decrement()
  }

  const setMomentum = (newValue: number) => {
    momentum.value.set(newValue)
  }

  return {
    momentum,
    momentumValue,
    momentumIcon,
    incrementMomentum,
    decrementMomentum,
    setMomentum,
  }
})
