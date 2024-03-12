<script setup lang="ts">
import { useRoute } from 'vue-router';

import users from '@/data/users.json';

const route = useRoute();
</script>

<template>
  <div>
    <p>
      {{ users }}
    </p>
    <hr>
    <p>
      {{ route.query }}
    </p>
  </div>
</template>
