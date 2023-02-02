<template>
  <h2>navbar_nome: {{ name }}</h2>
</template>

<script lang="ts">
import LocalStorageService from '@/services/LocalStorageService';
import { defineComponent } from 'vue';
import api from '@/config/api';
import { handleToastError, validateUserLogged } from '@/utils/utils';

export default defineComponent({
  name: 'UserNavBarComponent',
  data() {
    return {
      isLoading: false,
      name: LocalStorageService.getLogin().email,
    };
  },
  async mounted() {
    if (await validateUserLogged()) {
      this.getUserDetails();
    }
  },
  methods: {
    getUserDetails() {
      this.isLoading = true;
      api
        .get('/user/profile/detail')
        .then(response => {
          this.name = response.data.name;
        })
        .catch(error => {
          handleToastError(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
});
</script>

<style scoped></style>
