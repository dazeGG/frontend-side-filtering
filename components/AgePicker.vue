<script setup lang="ts">
import Slider from 'primevue/slider';

const model = defineModel<[number, number]>();

const props = defineProps<{
  min: number;
  max: number
}>();

const emit = defineEmits<{(e: 'update:age', newAges?: [number, number]): void }>();
</script>

<template>
  <div class="age-picker">
    <div class="age-picker__ages-view">
      <span class="age-picker__age-view" v-text="Math.min(...model)" />
      <span class="age-picker__age-view" v-text="Math.max(...model)" />
    </div>
    <Slider
      v-model="model"
      :min="props.min"
      :max="props.max"
      range
      @slideend="emit('update:age', model)"
    />
  </div>
</template>

<style scoped lang="scss">
.age-picker {
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;

  &__ages-view {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.75rem;
  }

  &__age-view {
    border: 1px solid var(--surface-border);
    font-size: 0.75rem;
    padding: 0.5rem;
    border-radius: 4px;
  }
}
</style>
