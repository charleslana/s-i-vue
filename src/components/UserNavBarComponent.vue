<template>
  <h2>navbar_nome: {{ name }}</h2>
</template>

<script lang="ts">
import LocalStorageService from '@/services/LocalStorageService';
import { defineComponent } from 'vue';
import { validateUserLogged } from '@/utils/utils';
import UserService from '@/services/UserService';
import IUser from '@/interfaces/IUser';

export default defineComponent({
  name: 'UserNavBarComponent',
  data() {
    return {
      name: LocalStorageService.getLogin().email,
    };
  },
  async mounted() {
    if (await validateUserLogged()) {
      await this.getUserDetails();
    }
  },
  methods: {
    async getUserDetails() {
      const user = (await UserService.fetchUserDetail()) as IUser;
      this.name = user.name as string;
    },
  },
});
</script>

<style scoped></style>
