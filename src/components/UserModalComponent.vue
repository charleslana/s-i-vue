<template>
  <!--
    :keyboard="false"
    staticBackdrop
   -->
  <MDBModal
    id="modalCenter"
    tabindex="-1"
    labelledby="modalCenterTitle"
    v-model="isShow"
    centered
    :animation="false"
    @hide="closeModal"
    scrollable
  >
    <MDBModalHeader class="modal-header-custom" />
    <MDBModalBody class="modal-body-custom">
      <MDBTabs v-model="activeTabId">
        <MDBTabNav fill tabsClasses="mb-3">
          <MDBTabItem
            tabId="ex-1"
            href="ex-1"
            class="bg-transparent text-white"
            @click="btnTab"
            >Ajustes</MDBTabItem
          >
          <MDBTabItem
            tabId="ex-2"
            href="ex-2"
            class="bg-transparent text-white"
            @click="btnTab"
            >Avatar</MDBTabItem
          >
          <MDBTabItem
            tabId="ex-3"
            href="ex-3"
            class="bg-transparent text-white"
            @click="btnTab"
            >Atalhos</MDBTabItem
          >
          <MDBTabItem
            tabId="ex-4"
            href="ex-4"
            class="bg-transparent text-white"
            @click="btnTab"
            >Suporte</MDBTabItem
          >
        </MDBTabNav>
        <MDBTabContent>
          <MDBTabPane tabId="ex-1">
            <MDBListGroup>
              <MDBListGroupItem
                class="d-flex justify-content-between align-items-center bg-transparent text-white-50 border-0"
              >
                <div class="ms-2 me-auto">
                  <i class="fa-solid fa-globe text-white"></i> Idioma
                </div>
                <select
                  class="form-select w-auto shadow-none border-0 bg-transparent text-white-50"
                  aria-label="Language select"
                >
                  <option value="pt" selected class="text-white-50 bg-dark">
                    Português
                  </option>
                  <option value="en" disabled class="text-white-50 bg-dark">
                    Inglês
                  </option>
                </select>
              </MDBListGroupItem>
              <MDBListGroupItem
                class="d-flex justify-content-between align-items-center bg-transparent text-white-50 border-0"
              >
                <div class="ms-2 me-auto">
                  <i class="fa-solid fa-music text-white"></i> Música de fundo
                </div>
                <MDBSwitch
                  label=""
                  v-model="switchSoundBGM"
                  @click="toggleSoundBGM"
                />
              </MDBListGroupItem>
              <MDBListGroupItem
                class="d-flex justify-content-between align-items-center bg-transparent text-white-50 border-0"
              >
                <div class="ms-2 me-auto">
                  <i class="fa-solid fa-music text-white"></i> Sons de efeito
                </div>
                <MDBSwitch
                  label=""
                  v-model="switchSoundEffect"
                  @click="toggleSoundEffect"
                />
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBTabPane>
          <MDBTabPane tabId="ex-2">Avatar</MDBTabPane>
          <MDBTabPane tabId="ex-3">Atalhos</MDBTabPane>
          <MDBTabPane tabId="ex-4">Suporte</MDBTabPane>
        </MDBTabContent>
      </MDBTabs>
    </MDBModalBody>
    <MDBModalFooter class="modal-footer-custom">
      <ButtonComponent
        :type="ButtonTypeEnum.Button"
        text="Meu Perfil"
        :color="ButtonColorEnum.Primary"
        class="me-3"
      />
      <ButtonComponent
        :type="ButtonTypeEnum.Button"
        text="Sair"
        :color="ButtonColorEnum.Warning"
        @click="logout"
      />
    </MDBModalFooter>
  </MDBModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { removeSession } from '@/utils/utils';
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane,
  MDBListGroup,
  MDBListGroupItem,
  MDBSwitch,
} from 'mdb-vue-ui-kit';
import { btnClick, stop, btnTab } from '@/utils/sound';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { ButtonTypeEnum, ButtonColorEnum } from '@/enum/ButtonEnum';
import LocalStorageService from '@/services/LocalStorageService';

export default defineComponent({
  name: 'UserModalComponent',
  emits: ['userModal'],
  components: {
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    MDBListGroup,
    MDBListGroupItem,
    MDBSwitch,
    ButtonComponent,
  },
  props: {
    modal: Boolean,
  },
  data() {
    return {
      ButtonTypeEnum,
      ButtonColorEnum,
      isShow: false,
      activeTabId: 'ex-1',
      switchSoundBGM: false,
      switchSoundEffect: false,
      btnTab,
    };
  },
  mounted() {
    this.getSoundBGM();
    this.getSoundEffect();
  },
  updated() {
    this.isShow = this.modal;
  },
  methods: {
    async logout() {
      stop();
      await removeSession();
    },
    closeModal() {
      this.$emit('userModal', false);
      this.activeTabId = 'ex-1';
    },
    toggleSoundBGM() {
      if (this.switchSoundBGM) {
        stop();
      }
      btnClick();
      LocalStorageService.saveSoundBGM(!this.switchSoundBGM);
    },
    getSoundBGM() {
      this.switchSoundBGM = LocalStorageService.getSoundBGM();
    },
    toggleSoundEffect() {
      LocalStorageService.saveSoundEffect(!this.switchSoundEffect);
      if (!this.switchSoundEffect) {
        btnClick();
      }
    },
    getSoundEffect() {
      this.switchSoundEffect = LocalStorageService.getSoundEffect();
    },
  },
});
</script>

<style scoped></style>
