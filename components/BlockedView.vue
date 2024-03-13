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
    --color: var(--red-500);
  }

  &.not-blocked {
    --color: var(--green-500);
  }
}
</style>
