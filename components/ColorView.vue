<script setup lang="ts">
import Tag from 'primevue/tag';

const props = defineProps<{
  color: string;
}>();
</script>

<template>
  <Tag class="color-view" :class="props.color">
    <span class="color-view__text" v-text="props.color" />
  </Tag>
</template>

<style lang="scss">
.color-view {
  &.yellow {
    background: rgba(134, 110, 0, 0.5);
    color: #ffc800;
  }

  &.green {
    background: rgba(0, 134, 4, 0.5);
    color: #36d000;
  }

  &.red {
    background: rgba(199, 20, 0, 0.5);
    color: #ff4624;
  }

  &.blue {
    background: rgba(0, 45, 180, 0.5);
    color: #0077ff;
  }

  &.white {
    background: rgba(187, 187, 187, 0.5);
    color: #ffffff;
  }

  &.black {
    background: rgb(0, 0, 0);
    color: #888888;
  }

  &.orange {
    background: rgba(197, 64, 0, 0.5);
    color: #ff6a00;
  }

  &.brown {
    background: rgba(100, 29, 0, 0.5);
    color: #ff642b;
  }
}
</style>
