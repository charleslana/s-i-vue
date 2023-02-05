<template>
  <div
    v-bind:class="isLoader ? 'visible' : 'invisible'"
    class="mask text-light d-flex justify-content-center flex-column text-center align-items-center loader-bg"
  >
    <p class="m-0">Carregando, Aguarde...</p>
    <MDBProgress class="mt-3 progress-custom">
      <MDBProgressBar :value="0" bg="warning" id="progress" />
    </MDBProgress>
  </div>
</template>

<script lang="ts">
import { MDBProgress, MDBProgressBar } from 'mdb-vue-ui-kit';
import { defineComponent } from 'vue';
import * as createjs from 'createjs-module';
import gsap, { Power4 } from 'gsap';

export default defineComponent({
  name: 'LoaderComponent',
  components: {
    MDBProgress,
    MDBProgressBar,
  },
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
    this.loadData();
  },
  methods: {
    showLoader(): void {
      this.isLoader = true;
      this.body.add('overflow-hidden');
      this.showProgress();
    },
    hideLoader(): void {
      this.isLoader = false;
      this.body.remove('overflow-hidden');
    },
    loadData() {
      window.createjs = createjs;
      const queue = new createjs.LoadQueue(true);
      queue.loadManifest([
        'img/logo.3eb81df0.png',
        'img/news.bc1506a5.png',
        'img/background_desktop.c052d3fc.jpg',
        'img/1.56cc79c0.png',
        'img/home_bg.5e3ec73d.jpg',
      ]);
      createjs.Sound.alternateExtensions = ['mp3'];
      queue.installPlugin(createjs.Sound);
      queue.loadFile({
        id: 'btnClick',
        src: '/assets/sounds/btn_click.mp3',
      });
      queue.loadFile({
        id: 'btnClose',
        src: '/assets/sounds/btn_close.mp3',
      });
      queue.loadFile({
        id: 'bgmHome',
        src: '/assets/sounds/bgm_home.mp3',
      });
      queue.loadFile({
        id: 'btnTab',
        src: '/assets/sounds/btn_tab.mp3',
      });
      queue.addEventListener('complete', this.hideLoader);
    },
    showProgress() {
      const tweenConfig: gsap.TweenVars = {
        width: '100%',
        duration: 5,
        ease: Power4.easeIn,
      };
      gsap.to('#progress', tweenConfig);
    },
  },
});
</script>

<style scoped>
.loader-bg {
  background-color: #111;
  z-index: 2001;
}

.progress-custom {
  width: 100%;
  height: 0.2rem;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
