<script>
export default {
  name: 'HotelDateSelection',
};
</script>

<template>
  <v-card outlined>
    <v-row class="pa-10">
      <v-col cols="12">
        <v-autocomplete
          solo
          dense
          flat
          outlined
          prepend-icon="mdi-city"
        />
      </v-col>

      <v-col cols="12">
        <v-row>
          <v-col cols="3">
            1
          </v-col>

          <v-col cols="3">
            1
          </v-col>

          <v-col cols="3">
            1
          </v-col>

          <v-col cols="3">
            1
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
