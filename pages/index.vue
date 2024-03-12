<script setup lang="ts">
import { computed, reactive } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import MultiSelect from 'primevue/multiselect';
import TriStateCheckbox from 'primevue/tristatecheckbox';

import type { IUser } from '~/typing/IUser';

import ColorView from '~/components/ColorView';
import BlockedView from '~/components/BlockedView';

import users from '~/data/users.json';

import getColors from '~/utils/getColors';

const filters: { blocked: null | boolean; colors: string[] } = reactive({ blocked: null, colors: [] });

const filteredUsers = computed(() => {
  return users
    .filter((user: IUser) => !filters.colors.length || filters.colors.includes(user.color))
    .filter((user: IUser) => filters.blocked === null || user.blocked === filters.blocked);
});

const colors = computed(() => getColors(users));
</script>

<template>
  <div class="page">
    {{ filters }}
    <DataTable :value="filteredUsers" striped-rows size="large" filter-display="row">
      <Column field="name" header="Name" style="width: 6rem" />
      <Column field="age" header="Age" style="width: 4rem" />
      <Column field="role" header="Role" style="width: 6rem" />
      <Column
        field="color"
        filter-field="color"
        :show-filter-menu="false"
        header="Color"
      >
        <template #filter>
          <MultiSelect
            v-model="filters.colors"
            :options="colors"
            placeholder="Any"
            class="p-column-filter"
            :max-selected-labels="1"
            style="width: 8rem"
          >
            <template #option="{ option }">
              <ColorView :color="option" />
            </template>
          </MultiSelect>
        </template>
        <template #body="{ data: { color } }">
          <ColorView :color="color" />
        </template>
      </Column>
      <Column field="balance" header="Balance" />
      <Column field="blocked" header="Blocked" style="min-width: 6rem">
        <template #body="{ data: { blocked } }">
          <BlockedView :blocked="blocked" />
        </template>
        <template #filter>
          <TriStateCheckbox v-model="filters.blocked" />
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
