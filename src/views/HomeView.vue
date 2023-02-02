<template>
  <h1>Hello {{ email }}</h1>
  <UserModalComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserModalComponent from '@/components/UserModalComponent.vue';
import { validateUserLogged } from '@/utils/utils';
import LocalStorageService from '@/services/LocalStorageService';

export default defineComponent({
  name: 'HomeView',
  components: {
    UserModalComponent,
  },
  data() {
    return {
      email: '',
    };
  },
  async mounted() {
    if (await validateUserLogged()) {
      this.email = LocalStorageService.getLogin().email;
    }
  },
});
</script>

<style scoped></style>
