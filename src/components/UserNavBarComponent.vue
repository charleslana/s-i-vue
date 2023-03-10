<template>
  <MDBNavbar dark bg="dark" position="top" class="navbar-bg p-0">
    <MDBProgress class="progress-custom w-100">
      <MDBProgressBar :value="expProgress" />
    </MDBProgress>
    <div
      class="d-flex align-items-center max-first-nav p-2"
      role="button"
      @click="showUserModal"
    >
      <div class="position-relative">
        <img
          src="../assets/images/avatar/1.png"
          alt="Avatar image"
          width="41"
          height="41"
          class="rounded-circle"
        />
        <div class="level-icon">{{ level }}</div>
      </div>
      <span
        class="navbar-text navbar-text-custom premium-name ms-3 text-truncate"
      >
        {{ name }}
      </span>
    </div>
    <div
      class="d-flex align-items-center justify-content-end max-second-nav p-2"
    >
      <MDBTooltip v-model="tooltipStamina" direction="bottom">
        <template #reference>
          <div class="d-flex align-items-center stats-bg rounded p-1 me-1">
            <img
              src="../assets/images/icon/meat.png"
              alt="Meat image"
              width="23"
              height="23"
            />
            <span class="navbar-text navbar-text-custom"
              >100/{{ abbreviateNumber(stamina) }}</span
            >
          </div>
        </template>
        <template #tip
          >Carne <br />
          100/{{ numberFormatter(stamina) }}</template
        >
      </MDBTooltip>
      <MDBTooltip v-model="tooltipBelly" direction="bottom">
        <template #reference>
          <div class="d-flex align-items-center stats-bg rounded p-1 me-1">
            <img
              src="../assets/images/icon/belly.png"
              alt="Belly image"
              width="23"
              height="23"
            />
            <span class="navbar-text navbar-text-custom">{{
              abbreviateNumber(belly)
            }}</span>
          </div>
        </template>
        <template #tip>
          Berries <br />
          {{ numberFormatter(belly) }}</template
        >
      </MDBTooltip>
      <MDBTooltip v-model="tooltipGem" direction="bottom">
        <template #reference>
          <div class="d-flex align-items-center stats-bg rounded p-1 me-1">
            <img
              src="../assets/images/icon/gem.png"
              alt="Gem image"
              width="23"
              height="23"
            />
            <span class="navbar-text navbar-text-custom">{{
              abbreviateNumber(gem)
            }}</span>
          </div>
        </template>
        <template #tip
          >Gema <br />
          {{ numberFormatter(gem) }}</template
        >
      </MDBTooltip>
      <img
        src="../assets/images/icon/plus.png"
        alt="Plus image"
        width="23"
        height="23"
        role="button"
      />
    </div>
  </MDBNavbar>
  <UserModalComponent :modal="userModal" @userModal="hideUserModal" />
  <MDBModal
    id="usernameModalCenter"
    tabindex="-1"
    labelledby="usernameModalCenterTitle"
    v-model="usernameModal"
    centered
    :animation="false"
    :keyboard="false"
    staticBackdrop
    @hide="btnClose"
  >
    <MDBModalBody class="modal-body-only-custom rounded-5">
      <form @submit.prevent="handleUsernameSubmit">
        <div class="mb-3">
          <MDBInput
            label="Nome"
            v-model="username"
            class="form-color"
            type="text"
            required
          />
        </div>
        <ButtonComponent
          :type="ButtonTypeEnum.Submit"
          text="Continuar"
          full-width
          :color="ButtonColorEnum.Primary"
          @click="btnClick"
        />
      </form>
    </MDBModalBody>
  </MDBModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { validateUserLogged } from '@/utils/utils';
import UserService from '@/services/UserService';
import IUser from '@/interfaces/IUser';
import {
  MDBNavbar,
  MDBProgress,
  MDBProgressBar,
  MDBTooltip,
  MDBModal,
  MDBModalBody,
  MDBInput,
} from 'mdb-vue-ui-kit';
import { abbreviateNumber, numberFormatter } from '@/utils/utils';
import UserModalComponent from '@/components/UserModalComponent.vue';
import { btnClick, btnClose } from '@/utils/sound';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { ButtonTypeEnum, ButtonColorEnum } from '@/enum/ButtonEnum';

export default defineComponent({
  name: 'UserNavBarComponent',
  components: {
    MDBNavbar,
    MDBProgress,
    MDBProgressBar,
    MDBTooltip,
    UserModalComponent,
    MDBModal,
    MDBModalBody,
    MDBInput,
    ButtonComponent,
  },
  data() {
    return {
      usernameModal: false,
      ButtonTypeEnum,
      ButtonColorEnum,
      username: '',
      abbreviateNumber,
      numberFormatter,
      btnClick,
      btnClose,
      userModal: false,
      tooltipStamina: false,
      tooltipBelly: false,
      tooltipGem: false,
      name: '',
      expProgress: 25,
      level: 1,
      stamina: 100,
      belly: 0,
      gem: 0,
    };
  },
  async mounted() {
    document.body.style.paddingTop = '60px';
    if (await validateUserLogged()) {
      await this.getUserDetails();
    }
    if (this.name === null) {
      this.usernameModal = true;
    }
  },
  methods: {
    showUserModal() {
      btnClick();
      this.userModal = true;
    },
    hideUserModal(value: boolean) {
      btnClose();
      this.userModal = value;
    },
    async getUserDetails() {
      const user = (await UserService.fetchUserDetail()) as IUser;
      this.name = user.name as string;
      this.level = user.level as number;
      this.expProgress = ((user.experience as number) * 100) / 100;
      this.stamina = user.stamina as number;
      this.belly = user.belly as number;
      this.gem = user.gem as number;
    },
    async handleUsernameSubmit() {
      this.name = (await UserService.updateName(this.username)) as string;
      if (this.name) {
        this.usernameModal = false;
      }
    },
  },
});
</script>

<style scoped>
.progress-custom {
  background-color: #202a3b;
}

.max-first-nav {
  width: 35%;
}

.max-second-nav {
  width: 65%;
}

.navbar-text-custom {
  color: #a89f9f;
  padding: 0;
  font-weight: 500;
}

.level-icon {
  position: absolute;
  bottom: 0px;
  right: -10px;
  background-image: url('../assets/images/icon/level.png');
  background-size: contain;
  width: 30px;
  height: 20px;
  text-align: center;
  color: white;
  line-height: 17px;
}

.stats-bg {
  background-color: #191c20;
}
</style>
