<script>
import AppBar from '@/components/AppBar.vue';

export default {
  name: 'App',
  components: {
    AppBar,
  },
};
</script>

<template>
  <v-app>
    <app-bar />

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
