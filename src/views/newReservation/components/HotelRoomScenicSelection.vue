<script>
export default {
  name: 'HotelRoomScenicSelection',
  props: {
    roomList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <v-row>
    <v-col cols="12">
      Manzara Seçimi

      <v-divider />
    </v-col>

    <v-col
      v-for="room in roomList"
      :key="room.id"
      cols="4"
    >
      <v-card outlined>
        <v-card-title primary-title>
          {{ room.title }}
        </v-card-title>

        <v-card-text>
          <v-img
            height="200"
            :aspect-ratio="16/9"
            :src="room.photo"
          />
        </v-card-text>

        <v-card-actions>
          Fiyat Etki Oranı

          <v-spacer />

          + {{ room.price_rate }} %
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
