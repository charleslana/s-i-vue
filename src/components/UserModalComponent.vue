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
  >
    <MDBModalHeader class="modal-header-custom" />
    <MDBModalBody class="modal-body-custom">
      <button @click="logout">Logout</button>
    </MDBModalBody>
    <MDBModalFooter class="modal-footer-custom" />
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
} from 'mdb-vue-ui-kit';
import { stopBgmHome } from '@/utils/sound';

export default defineComponent({
  name: 'UserModalComponent',
  emits: ['userModal'],
  components: {
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
  },
  props: {
    modal: Boolean,
  },
  data() {
    return {
      isShow: false,
    };
  },
  updated() {
    this.isShow = this.modal;
  },
  methods: {
    async logout() {
      stopBgmHome();
      await removeSession();
    },
    closeModal() {
      this.$emit('userModal', false);
    },
  },
});
</script>

<style scoped></style>
