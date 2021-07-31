<script>
import AppBar from '@/components/AppBar';

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

    <v-main class="ma-16">
      <router-view />
    </v-main>
  </v-app>
</template>
