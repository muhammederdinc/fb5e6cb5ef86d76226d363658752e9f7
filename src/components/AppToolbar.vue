<script>
export default {
  name: 'AppToolbar',
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

    <v-btn>Yeni Rezervasyon Yap</v-btn>
  </v-app-bar>
</template>
