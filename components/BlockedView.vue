<script setup lang="ts">
import Tag from 'primevue/tag';

const props = defineProps<{
  blocked: boolean;
}>();
</script>

<template>
  <Tag class="blocked-view" :class="{ blocked, 'not-blocked': !blocked }">
    {{ props.blocked ? 'blocked' : 'not blocked' }}
  </Tag>
</template>

<style scoped lang="scss">
.blocked-view {
  background: unset;
  color: var(--color);

  &.blocked {
    --color: #ff4624;
  }

  &.not-blocked {
    --color: #36d000;
  }
}
</style>
