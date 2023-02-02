<template>
  <button @click="logout">Logout</button>
</template>

<script lang="ts">
import router from '@/router';
import LocalStorageService from '@/services/LocalStorageService';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserModalComponent',
  methods: {
    logout() {
      LocalStorageService.removeToken();
      LocalStorageService.saveLogged(false);
      router.push({ name: 'login' });
    },
  },
});
</script>

<style scoped></style>
