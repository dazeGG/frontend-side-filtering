<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import ColorView from '~/components/ColorView';
import BlockedView from '~/components/BlockedView';

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
        <template #body="{ data: { color } }">
          <ColorView :color="color" />
        </template>
      </Column>
      <Column field="blocked" header="Blocked" data-type="boolean" style="min-width: 6rem">
        <template #body="{ data: { blocked } }">
          <BlockedView :blocked="blocked" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style lang="scss">
.page {
  width: 50rem;
  margin: 0 auto;
}
</style>
