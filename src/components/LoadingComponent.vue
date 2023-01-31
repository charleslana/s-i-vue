<template>
  <div
    v-bind:class="isLoading ? 'visible' : 'invisible'"
    class="mask text-light d-flex justify-content-center flex-column text-center align-items-center loading-bg"
  >
    <img src="../assets/images/loading.gif" alt="Loading image" />
    <p class="m-0">Carregando...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as createjs from 'createjs-module';

export default defineComponent({
  name: 'LoadingComponent',
  data() {
    return {
      isLoading: true,
      body: document.body.classList,
    };
  },
  mounted() {
    this.showLoading();
  },
  created() {
    this.loadImages();
  },
  methods: {
    showLoading(): void {
      this.isLoading = true;
      this.body.add('overflow-hidden');
    },
    hideLoading(): void {
      this.isLoading = false;
      this.body.remove('overflow-hidden');
    },
    loadImages() {
      window.createjs = createjs;
      const queue = new createjs.LoadQueue(true);
      queue.loadManifest([
        'img/loading.e969792c.gif',
        'img/logo.0bde7ac8.png',
        'img/news.bc1506a5.png',
        'img/background_desktop.c052d3fc.jpg',
      ]);
      queue.addEventListener('complete', this.hideLoading);
    },
  },
});
</script>

<style scoped>
.loading-bg {
  background-color: #111;
  z-index: 2000;
}
</style>
