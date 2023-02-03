<template>
  <div
    v-bind:class="isOffline ? 'visible' : 'invisible'"
    class="mask internet text-light text-center"
  >
    <div
      v-bind:class="isOffline ? 'animate__slideInDown' : ''"
      class="failed-internet animate__animated"
    >
      Sua conexão com internet falhou!
    </div>
  </div>
  <div class="mask internet text-light text-center invisible">
    <div
      v-bind:class="isOnline ? 'animate__slideInDown' : 'animate__fadeOut'"
      class="success-internet animate__animated"
    >
      Sua conexão está de volta!
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InternetComponent',
  data() {
    return {
      isOffline: false,
      isOnline: false,
    };
  },
  mounted() {
    this.checkInternetOffline();
    this.checkInternetOnline();
  },
  methods: {
    checkInternetOffline() {
      window.addEventListener('offline', () => {
        this.isOffline = true;
        this.isOnline = false;
      });
    },
    checkInternetOnline() {
      window.addEventListener('online', () => {
        this.isOffline = false;
        this.isOnline = true;
      });
    },
  },
});
</script>

<style scoped>
.internet {
  z-index: 2002;
}

.failed-internet {
  background-color: #da4453;
  color: white;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 55px;
  font-size: 13px;
}

.success-internet {
  background-color: #8cc152;
  color: white;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 55px;
  font-size: 13px;
}
</style>
