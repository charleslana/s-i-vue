<template>
  <button @click="logout">Logout</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { removeSession } from '@/utils/utils';

export default defineComponent({
  name: 'UserModalComponent',
  methods: {
    async logout() {
      await removeSession();
    },
  },
});
</script>

<style scoped></style>
