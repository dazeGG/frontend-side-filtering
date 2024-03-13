<script setup lang="ts">
import Tag from 'primevue/tag';

const props = defineProps<{
  color: string;
}>();
</script>

<template>
  <Tag class="color-view" :class="props.color" rounded>
    <span class="color-view__color-dot" />
    <span class="color-view__text" v-text="props.color" />
  </Tag>
</template>

<style lang="scss">
.color-view {
  background: unset;
  color: var(--text-color);
  border: 1px solid var(--color);
  padding-left: 1rem;
  position: relative;

  &.yellow {
    --color: var(--yellow-500);
  }

  &.green {
    --color: var(--green-500);
  }

  &.red {
    --color: var(--red-500);
  }

  &.blue {
    --color: var(--blue-500);
  }

  &.white {
    --color: var(--surface-500);
  }

  &.black {
    --color: var(--surface-0);
  }

  &.orange {
    --color: var(--orange-500);
  }

  &.brown {
    --color: var(--orange-900);
  }

  &__color-dot {
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    left: 0.35rem;
    background: var(--color);
  }
}
</style>
