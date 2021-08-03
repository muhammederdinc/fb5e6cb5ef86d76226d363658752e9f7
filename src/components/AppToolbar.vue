<script>
import { mapMutations } from 'vuex';

export default {
  name: 'AppToolbar',
  methods: {
    ...mapMutations(['clearReservation']),
    newReservation() {
      const { fullPath } = this.$router.currentRoute;

      if (fullPath !== '/new-reservation') {
        this.$router.push('/new-reservation');
      }

      this.clearReservation();
    },
  },
};
</script>

<template>
  <v-app-bar
    app
    flat
    color="#073763"
    height="100"
    class="px-3"
  >
    <div class="white--text">
      <h1>Otel</h1>
      <span>Rezervasyon Sistemi</span>
    </div>

    <v-spacer />

    <v-btn
      v-text="'Yeni Rezervasyon Yap'"
      @click="newReservation"
    />
  </v-app-bar>
</template>
