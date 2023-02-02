<template>
  <!-- <h1>Login</h1>
  <br />
  <router-link to="/test">Link test</router-link> -->
  <div class="login-bg">
    <div class="position-absolute top-0 start-50 translate-middle-x pt-5 mt-5">
      <img
        src="../assets/images/logo.png"
        alt="Logo image"
        class="logo-image"
      />
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
      @click="showLoginModal"
    >
      Toque para começar
    </div>
    <div class="position-absolute bottom-0 start-50 translate-middle-x pb-5">
      <a href="#" target="_blank" rel="noopener noreferrer" tabindex="-1">
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
    <MDBModal
      id="loginModalCenter"
      tabindex="-1"
      labelledby="loginModalCenterTitle"
      v-model="loginModal"
      centered
      :animation="false"
    >
      <MDBModalBody class="modal-body-custom rounded-5">
        <form @submit.prevent="handleLoginSubmit">
          <div class="mb-3">
            <MDBInput
              inputGroup
              aria-label="E-mail"
              aria-describedby="login-addon1"
              placeholder="E-mail"
              v-model="loginEmail"
              class="form-color"
              type="email"
              required
            >
              <template v-slot:prepend>
                <span
                  class="input-group-text border-0 pe-0 form-color"
                  id="login-addon1"
                  ><i class="fa-solid fa-at"></i
                ></span>
              </template>
            </MDBInput>
          </div>
          <div class="mb-3">
            <MDBInput
              inputGroup
              aria-label="Senha"
              aria-describedby="login-addon2"
              placeholder="Senha"
              v-model="loginPassword"
              class="form-color"
              type="password"
              required
            >
              <template v-slot:prepend>
                <span
                  class="input-group-text border-0 pe-0 form-color"
                  id="login-addon2"
                  ><i class="fa-solid fa-lock"></i
                ></span>
              </template>
            </MDBInput>
          </div>
          <ButtonComponent
            :type="ButtonTypeEnum.Submit"
            text="Login"
            full-width
            class="mb-3"
          />
          <ButtonComponent
            :type="ButtonTypeEnum.Button"
            text="Criar uma conta"
            full-width
            :color="ButtonColorEnum.Success"
            class="mb-3"
            @click="showRegisterModal"
          />
          <div class="text-center">
            <MDBBtn
              color="link"
              class="text-capitalize btn-link-custom"
              @click="showRecoveryModal"
              >Esqueceu a senha?</MDBBtn
            >
          </div>
        </form>
      </MDBModalBody>
    </MDBModal>
    <MDBModal
      id="registerModalCenter"
      tabindex="-1"
      labelledby="registerModalCenterTitle"
      v-model="registerModal"
      centered
      :animation="false"
    >
      <MDBModalBody class="modal-body-custom rounded-5">
        <form @submit.prevent="handleRegisterSubmit">
          <div class="mb-3">
            <MDBInput
              inputGroup
              aria-label="E-mail"
              aria-describedby="register-addon1"
              placeholder="E-mail"
              v-model="email"
              class="form-color"
              type="email"
              required
            >
              <template v-slot:prepend>
                <span
                  class="input-group-text border-0 pe-0 form-color"
                  id="register-addon1"
                  ><i class="fa-solid fa-at"></i
                ></span>
              </template>
            </MDBInput>
          </div>
          <div class="mb-3">
            <MDBInput
              inputGroup
              aria-label="Senha"
              aria-describedby="register-addon2"
              placeholder="Senha"
              v-model="password"
              class="form-color"
              type="password"
              required
            >
              <template v-slot:prepend>
                <span
                  class="input-group-text border-0 pe-0 form-color"
                  id="register-addon2"
                  ><i class="fa-solid fa-lock"></i
                ></span>
              </template>
            </MDBInput>
          </div>
          <div class="mb-3">
            <MDBInput
              inputGroup
              aria-label="Repita a senha"
              aria-describedby="register-addon3"
              placeholder="Repita a senha"
              v-model="passwordConfirmation"
              class="form-color"
              type="password"
              required
            >
              <template v-slot:prepend>
                <span
                  class="input-group-text border-0 pe-0 form-color"
                  id="register-addon3"
                  ><i class="fa-solid fa-lock"></i
                ></span>
              </template>
            </MDBInput>
          </div>
          <ButtonComponent
            :type="ButtonTypeEnum.Submit"
            text="Jogar"
            full-width
            :color="ButtonColorEnum.Success"
            class="mb-3"
          />
          <div class="text-center">
            <MDBBtn
              color="link"
              class="text-capitalize btn-link-custom"
              @click="showLoginModal"
              >Voltar</MDBBtn
            >
          </div>
        </form>
      </MDBModalBody>
    </MDBModal>
    <LoadingComponent :loading="isLoading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  MDBFooter,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBInput,
  MDBBtn,
} from 'mdb-vue-ui-kit';
import LoadingComponent from '@/components/LoadingComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { ButtonTypeEnum, ButtonColorEnum } from '@/enum/ButtonEnum';
import { useToast } from 'vue-toastification';
import api from '@/config/api';
import { handleToastError } from '@/utils/utils';
import router from '@/router';
import LocalStorageService from '@/services/LocalStorageService';

const toast = useToast();

export default defineComponent({
  name: 'LoginView',
  components: {
    MDBFooter,
    MDBContainer,
    LoadingComponent,
    MDBModal,
    MDBModalBody,
    MDBInput,
    MDBBtn,
    ButtonComponent,
  },
  data() {
    return {
      isLoading: false,
      loginModal: false,
      loginEmail: '',
      loginPassword: '',
      year: new Date().getFullYear(),
      ButtonTypeEnum,
      ButtonColorEnum,
      registerModal: false,
      email: '',
      password: '',
      passwordConfirmation: '',
    };
  },
  mounted() {
    this.checkUserLogged();
    this.fillLoginData();
  },
  methods: {
    showLoginModal() {
      this.loginModal = true;
      this.registerModal = false;
    },
    handleLoginSubmit() {
      this.isLoading = true;
      api
        .post('/user/login', {
          email: this.loginEmail,
          password: this.loginPassword,
        })
        .then(response => {
          LocalStorageService.saveLogin(this.loginEmail, this.loginPassword);
          LocalStorageService.saveToken(response.data.accessToken);
          LocalStorageService.saveLogged(true);
          this.goToHome();
        })
        .catch(error => {
          handleToastError(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    showRegisterModal() {
      this.registerModal = true;
      this.loginModal = false;
    },
    handleRegisterSubmit() {
      this.isLoading = true;
      api
        .post('/user', {
          email: this.email,
          password: this.password,
          passwordConfirmation: this.passwordConfirmation,
        })
        .then(() => {
          this.loginEmail = this.email;
          this.loginPassword = this.password;
          this.handleLoginSubmit();
        })
        .catch(error => {
          handleToastError(error);
          this.isLoading = false;
        });
    },
    goToHome() {
      router.push({ name: 'home' });
    },
    checkUserLogged() {
      if (LocalStorageService.getLogged()) {
        this.goToHome();
      }
    },
    fillLoginData() {
      this.loginEmail = LocalStorageService.getLogin().email;
      this.loginPassword = LocalStorageService.getLogin().password;
    },
    showRecoveryModal() {
      toast.warning('Em breve');
    },
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
  height: calc((100vw + 100vh) / 40);
  object-fit: contain;
}

@media screen and (max-width: 576px) {
  .login-bg {
    background-image: url('../assets/images/login/background_mobile.jpg');
  }
}
</style>
