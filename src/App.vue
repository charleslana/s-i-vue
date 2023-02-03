<template>
  <router-view></router-view>
  <LoaderComponent />
  <InternetComponent />
</template>

<script lang="ts">
import LoaderComponent from '@/components/LoaderComponent.vue';
import InternetComponent from './components/InternetComponent.vue';

export default {
  name: 'App',
  components: {
    LoaderComponent,
    InternetComponent,
  },
};
</script>
