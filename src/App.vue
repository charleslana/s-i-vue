<template>
  <router-view></router-view>
  <LoaderComponent />
</template>

<script lang="ts">
import LoaderComponent from '@/components/LoaderComponent.vue';

export default {
  name: 'App',
  components: {
    LoaderComponent,
  },
};
</script>
