<template>
  <div class="custom-container d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1 class="text-uppercase text-center">
            Pare ai espertinho, nada foi encontrado aqui!
          </h1>
        </div>
        <div class="col-md-6">
          <img
            src="../assets/images/not_found.png"
            alt="Not found image"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFoundView',
});
</script>

<style scoped>
.custom-container {
  background-color: #2f99f1;
  color: white;
  font-family: 'Lato', sans-serif;
  height: calc(var(--vh, 1vh) * 100 - 0px);
}
</style>
