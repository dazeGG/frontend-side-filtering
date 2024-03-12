<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import ColorView from '~/components/ColorView';

import users from '~/data/users.json';
</script>

<template>
  <div class="page">
    <DataTable :value="users" size="large" table-style="min-width: 50rem">
      <Column field="name" header="Name" />
      <Column field="age" header="Age" />
      <Column field="role" header="Role" />
      <Column field="balance" header="Balance" />
      <Column field="color" header="Color">
        <template #body="slotProps">
          <ColorView :color="slotProps.data.color" />
        </template>
      </Column>
      <Column field="blocked" header="Blocked" />
    </DataTable>
  </div>
</template>

<style lang="scss">
.page {
  width: 50rem;
  margin: 0 auto;
}
</style>
