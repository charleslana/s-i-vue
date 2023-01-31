<template>
  <!-- <h1>Login</h1>
  <br />
  <router-link to="/test">Link test</router-link> -->
  <div class="login-bg">
    <div class="position-absolute top-0 start-50 translate-middle-x pt-5">
      <div class="d-flex align-items-center">
        <img
          src="../assets/images/logo.png"
          alt="Logo image"
          class="logo-image"
        />
        <h4 class="text-uppercase t-shadow m-0 ms-2">Super <br />Island</h4>
      </div>
    </div>
    <div class="position-absolute top-0 end-0 pt-3 pe-3">
      <div class="d-flex flex-column align-items-center" role="button">
        <img
          src="../assets/images/login/news.png"
          alt="News image"
          class="news-image"
        />
        <p class="m-0 t-shadow">Notícias</p>
      </div>
    </div>
    <div
      class="login-bg-text d-flex align-items-center justify-content-center animate__animated animate__flash animate__infinite animate__slower fs-2 t-shadow"
      role="button"
    >
      Toque para começar
    </div>
    <div class="position-absolute bottom-0 start-50 translate-middle-x pb-5">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-discord fs-2 text-white t-shadow"></i>
      </a>
    </div>
    <MDBFooter
      bg="transparent"
      :text="['white', 'center']"
      class="fixed-bottom"
    >
      <MDBContainer fluid class="t-shadow d-flex justify-content-between"
        ><p class="m-0">@ {{ year }} Super Island</p>
        <span class="float-end">v0.0.1</span></MDBContainer
      >
    </MDBFooter>
    <LoadingComponentVue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBFooter, MDBContainer } from 'mdb-vue-ui-kit';
import LoadingComponentVue from '@/components/LoadingComponent.vue';

export default defineComponent({
  name: 'LoginView',
  components: {
    MDBFooter,
    MDBContainer,
    LoadingComponentVue,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
});
</script>

<style scoped>
.login-bg {
  background-image: url('../assets/images/login/background_desktop.jpg');
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
}

.login-bg-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 / 2);
  text-align: center;
}

.news-image {
  height: calc((100vw + 100vh) / 20);
  object-fit: contain;
}

.news-image:hover {
  transform: scale(1.1);
}

.logo-image {
  height: calc((100vw + 100vh) / 20);
  object-fit: contain;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 80%);
  border-radius: 20%;
}

@media screen and (max-width: 576px) {
  .login-bg {
    background-image: url('../assets/images/login/background_mobile.jpg');
  }
}
</style>
