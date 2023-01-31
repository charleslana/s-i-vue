<template>
  <div
    v-bind:class="isLoader ? 'visible' : 'invisible'"
    class="mask text-light d-flex justify-content-center flex-column text-center align-items-center loader-bg"
  >
    <img src="../assets/images/loading.gif" alt="Loading image" />
    <p class="m-0">Carregando...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as createjs from 'createjs-module';

export default defineComponent({
  name: 'LoaderComponent',
  data() {
    return {
      isLoader: true,
      body: document.body.classList,
    };
  },
  mounted() {
    this.showLoader();
  },
  created() {
    this.loadImages();
  },
  methods: {
    showLoader(): void {
      this.isLoader = true;
      this.body.add('overflow-hidden');
    },
    hideLoader(): void {
      this.isLoader = false;
      this.body.remove('overflow-hidden');
    },
    loadImages() {
      window.createjs = createjs;
      const queue = new createjs.LoadQueue(true);
      queue.loadManifest([
        'img/loading.e969792c.gif',
        'img/logo.3eb81df0.png',
        'img/news.bc1506a5.png',
        'img/background_desktop.c052d3fc.jpg',
      ]);
      queue.addEventListener('complete', this.hideLoader);
    },
  },
});
</script>

<style scoped>
.loader-bg {
  background-color: #111;
  z-index: 2001;
}
</style>
