<template>
  <MDBModal
    id="modalCenter"
    tabindex="-1"
    labelledby="modalCenterTitle"
    v-model="isShow"
    centered
    :animation="false"
    :keyboard="false"
    staticBackdrop
  >
    <MDBModalBody class="modal-body-custom rounded-5">
      <div
        class="position-absolute close-icon"
        role="button"
        @click="closeModal"
      >
        <img
          src="../assets/images/icon/close_button.png"
          alt="Close button image"
          width="40"
          height="40"
        />
      </div>
      <button @click="logout">Logout</button>
    </MDBModalBody>
  </MDBModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { removeSession } from '@/utils/utils';
import { MDBModal, MDBModalBody } from 'mdb-vue-ui-kit';

export default defineComponent({
  name: 'UserModalComponent',
  emits: ['userModal'],
  components: {
    MDBModal,
    MDBModalBody,
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
      await removeSession();
    },
    closeModal() {
      this.$emit('userModal', false);
    },
  },
});
</script>

<style scoped></style>
