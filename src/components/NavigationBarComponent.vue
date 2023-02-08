<template>
  <MDBNavbar dark bg="dark" position="bottom" class="p-0 navbar-bg">
    <div class="w-100 d-flex justify-content-around">
      <div
        class="d-flex flex-column align-items-center w-100 p-1"
        role="button"
        :class="{ active: current === 'chapter' }"
        @click="changePage('chapter')"
      >
        <img
          src="../assets/images/navigation/chapter.png"
          alt="Chapter image"
          width="44"
          height="44"
        />
        <p class="m-0 text-color fw-700">Mundo</p>
      </div>
      <div
        class="d-flex flex-column align-items-center w-100 p-1"
        role="button"
        :class="{ active: current === 'crew' }"
        @click="changePage('crew')"
      >
        <img
          src="../assets/images/navigation/crew.png"
          alt="Crew image"
          width="44"
          height="44"
        />
        <p class="m-0 text-color fw-700">Tripulação</p>
      </div>
      <div
        class="d-flex flex-column align-items-center w-100 p-1"
        role="button"
        :class="{ active: current === 'home' }"
        @click="changePage('home')"
      >
        <img
          src="../assets/images/navigation/home.png"
          alt="Home image"
          width="44"
          height="44"
        />
        <p class="m-0 text-color fw-700">Casa</p>
      </div>
      <div
        class="d-flex flex-column align-items-center w-100 p-1"
        role="button"
        :class="{ active: current === 'inventory' }"
        @click="changePage('inventory')"
      >
        <img
          src="../assets/images/navigation/inventory.png"
          alt="Inventory image"
          width="44"
          height="44"
        />
        <p class="m-0 text-color fw-700">Inventário</p>
      </div>
      <div
        class="d-flex flex-column align-items-center w-100 p-1"
        role="button"
      >
        <img
          src="../assets/images/navigation/menu.png"
          alt="No image"
          width="44"
          height="44"
        />
        <p class="m-0 text-color fw-700">Menu</p>
      </div>
    </div>
  </MDBNavbar>
</template>

<script setup lang="ts">
import { MDBNavbar } from 'mdb-vue-ui-kit';
import { ref } from 'vue';
import { btnClick } from '@/utils/sound';
import router from '@/router';

const current = ref('home');

const changePage = (page: string) => {
  btnClick();
  current.value = page;
  router.push({ name: page });
};
</script>

<style scoped>
.text-color {
  color: #a6a7a9;
}

.active {
  background-color: #2e3439;
}
</style>
