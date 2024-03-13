<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import MultiSelect from 'primevue/multiselect';
import TriStateCheckbox from 'primevue/tristatecheckbox';

import type { ComputedRef } from 'vue';
import type { IUser } from '~/typing/IUser';

import ColorView from '~/components/ColorView';
import BlockedView from '~/components/BlockedView';

import users from '~/data/users.json';

import getColors from '~/utils/getColors';
import getRoles from '~/utils/getRoles';

const route = useRoute();
const router = useRouter();

const queryFilters: ComputedRef<{ blocked: null | boolean; colors: string[]; roles: string[] }> = computed(() => {
  const roles: string[] = [];
  const colors: string[] = [];

  if (route.query.roles) {
    if (typeof route.query.roles === 'string') {
      roles.push(route.query.roles);
    } else {
      // @ts-ignore
      route.query.roles.forEach((role: string) => roles.push(role.toString()));
    }
  }

  if (route.query.colors) {
    if (typeof route.query.colors === 'string') {
      colors.push(route.query.colors);
    } else {
      // @ts-ignore
      route.query.colors.forEach((color: string) => colors.push(color.toString()));
    }
  }

  return {
    blocked: route.query.blocked ? route.query.blocked === 'true' : null,
    roles,
    colors,
  };
});

const filters: { blocked: null | boolean; colors: string[]; roles: string[] } = reactive({ ...queryFilters.value });

const filteredUsers = computed(() => {
  return users
    .filter((user: IUser) => !queryFilters.value.roles.length || queryFilters.value.roles.includes(user.role))
    .filter((user: IUser) => !queryFilters.value.colors.length || queryFilters.value.colors.includes(user.color))
    .filter((user: IUser) => queryFilters.value.blocked === null || user.blocked === queryFilters.value.blocked);
});

const roles = computed(() => getRoles(users));
const colors = computed(() => getColors(users));

const filterRoles = () => router.push({ path: '', query: { ...route.query, roles: filters.roles } });
const filterColors = () => router.push({ path: '', query: { ...route.query, colors: filters.colors } });
const filterBlocked = () => {
  const query = { ...route.query };

  if (typeof filters.blocked === 'boolean') {
    query.blocked = filters.blocked ? 'true' : 'false';
  } else {
    delete query.blocked;
  }

  router.push({ path: '', query });
};
</script>

<template>
  <div class="page">
    <DataTable :value="filteredUsers" striped-rows size="large" filter-display="row" style="width: 60rem">
      <Column field="name" header="Name" style="width: 8rem" />
      <Column field="age" header="Age" style="width: 12rem" />
      <Column field="role" header="Role" style="width: 12rem" :show-filter-menu="false">
        <template #filter>
          <MultiSelect
            v-model="filters.roles"
            :options="roles"
            placeholder="Choose roles"
            class="p-column-filter"
            :max-selected-labels="1"
            @change="filterRoles"
          />
        </template>
      </Column>
      <Column field="color" header="Color" style="width: 12rem" :show-filter-menu="false">
        <template #filter>
          <MultiSelect
            v-model="filters.colors"
            :options="colors"
            placeholder="Choose colors"
            class="p-column-filter"
            :max-selected-labels="1"
            @change="filterColors"
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
      <Column field="balance" header="Balance" style="width: 8rem" />
      <Column field="blocked" header="Blocked" style="width: 8rem" :show-filter-menu="false">
        <template #body="{ data: { blocked } }">
          <BlockedView :blocked="blocked" />
        </template>
        <template #filter>
          <TriStateCheckbox v-model="filters.blocked" @change="filterBlocked" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style lang="scss">
.page {
  max-width: 60rem;
  margin: 0 auto;
}
</style>
