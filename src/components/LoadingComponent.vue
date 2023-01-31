<template>
  <div
    v-bind:class="loading ? 'visible' : 'invisible'"
    class="mask text-light d-flex justify-content-center flex-column text-center align-items-center loading-bg"
  >
    <img
      src="../assets/images/loading.gif"
      alt="Loading image"
      class="loading-image-animate"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoadingComponent',
  props: {
    loading: Boolean,
  },
  data() {
    return {
      body: document.body.classList,
    };
  },
  updated() {
    this.validateLoading();
  },
  mounted() {
    this.validateLoading();
  },
  methods: {
    validateLoading() {
      if (this.loading) {
        this.body.add('overflow-hidden');
        return;
      }
      this.body.remove('overflow-hidden');
    },
  },
});
</script>

<style scoped>
.loading-bg {
  background-color: transparent;
  z-index: 2000;
}
</style>
