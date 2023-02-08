<template>
  <!-- <h1>Login</h1>
  <br />
  <router-link to="/test">Link test</router-link> -->
  <UserNavBarComponent />
  <div class="home-bg draggable">
    <div
      class="shop-position d-flex align-items-center justify-content-center"
      role="button"
    >
      <MDBBadge badge="dark" pill class="badge-bg fs-6">Loja de itens</MDBBadge>
    </div>
  </div>
  <NavigationBarComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { validateUserLogged } from '@/utils/utils';
import UserNavBarComponent from '@/components/UserNavBarComponent.vue';
import interact from 'interactjs';
import { DragEvent } from '@interactjs/types/index';
import { bgmHome } from '@/utils/sound';
import { MDBBadge } from 'mdb-vue-ui-kit';
import NavigationBarComponent from '@/components/NavigationBarComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    UserNavBarComponent,
    MDBBadge,
    NavigationBarComponent,
  },
  data() {
    return {};
  },
  async mounted() {
    await validateUserLogged();
    bgmHome();
    this.draggable();
  },
  methods: {
    draggable() {
      interact('.draggable').draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
            endOnly: true,
          }),
        ],
        listeners: {
          move: (event: DragEvent) => {
            const target = event.target;
            const x =
              (parseFloat(target.getAttribute('data-x') ?? '') || 0) + event.dx;
            const y =
              (parseFloat(target.getAttribute('data-y') ?? '') || 0) + event.dy;
            if (window.innerWidth < 1136) {
              target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
              target.setAttribute('data-x', x.toString());
              target.setAttribute('data-y', y.toString());
              localStorage.setItem('mapX', x.toString());
              localStorage.setItem('mapY', y.toString());
            }
          },
        },
      });
    },
  },
});
</script>

<style scoped>
.home-bg {
  background-image: url('../assets/images/home/home_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  position: relative;
  cursor: default !important;
}

.shop-position {
  position: absolute;
  top: 27vh;
  left: 31vw;
  width: 150px;
  height: 150px;
}

@media screen and (max-width: 1136px) {
  .home-bg {
    background-size: cover;
    width: 1136px;
    height: calc(var(--vh, 1vh) * 100);
  }

  .shop-position {
    position: absolute;
    top: 159px;
    left: 320px;
  }
}
</style>
