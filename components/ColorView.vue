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
  color: rgba(255, 255, 255, 0.87);
  border: 1px solid var(--color);
  padding-left: 1rem;
  position: relative;

  &.yellow {
    --color: #ffc800;
  }

  &.green {
    --color: #36d000;
  }

  &.red {
    --color: #ff4624;
  }

  &.blue {
    --color: #0077ff;
  }

  &.white {
    --color: #ffffff;
  }

  &.black {
    --color: #888888;
  }

  &.orange {
    --color: #ff6a00;
  }

  &.brown {
    --color: #ff642b;
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
