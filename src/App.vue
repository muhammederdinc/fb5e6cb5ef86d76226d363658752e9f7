<script>
import AppToolbar from '@/components/AppToolbar';

export default {
  name: 'App',
  components: {
    AppToolbar,
  },
};
</script>

<template>
  <v-app>
    <app-toolbar />

    <v-main class="ma-16">
      <router-view />
    </v-main>
  </v-app>
</template>
