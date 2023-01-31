<template>
  <MDBBtn
    :color="color ?? 'primary'"
    :type="type"
    v-bind:class="fullWidth ? 'w-100' : ''"
    class="m-0 px-2 custom-button shadow-0 rounded-2"
    >{{ text }}</MDBBtn
  >
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MDBBtn } from 'mdb-vue-ui-kit';
import { ButtonTypeEnum, ButtonColorEnum } from '@/enum/ButtonEnum';

export default defineComponent({
  name: 'ButtonComponent',
  components: {
    MDBBtn,
  },
  props: {
    type: {
      type: String as PropType<ButtonTypeEnum>,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    fullWidth: Boolean,
    color: String as PropType<ButtonColorEnum>,
  },
});
</script>

<style scoped>
.custom-button {
  font-family: 'Thaleahfat', sans-serif;
  font-size: 1.5rem;
  padding: 0;
  box-shadow: inset -3px -3px 0px 0px rgb(0 0 0 / 20%) !important;
  border: 3px solid #202428;
}

.custom-button:active {
  box-shadow: inset 3px 3px 0px 0px rgb(0 0 0 / 20%) !important;
  border: 3px solid #202428;
}
</style>
