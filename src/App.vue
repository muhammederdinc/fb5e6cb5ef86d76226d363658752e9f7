<script>
import { mapState } from 'vuex';
import AppToolbar from '@/components/AppToolbar';

export default {
  name: 'App',
  components: {
    AppToolbar,
  },
  computed: {
    ...mapState(['snackbar']),
  },
};
</script>

<template>
  <v-app>
    <app-toolbar />

    <v-main class="ma-16">
      <router-view />
    </v-main>

    <v-snackbar
      v-model="snackbar.visibility"
      :timeout="snackbar.displayTime"
      :color="snackbar.type"
    >
      {{ snackbar.message }}
    </v-snackbar>
  </v-app>
</template>
