<script>
export default {
  name: 'HotelRoomSelection',
  props: {
    roomList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedRoom: 0,
    };
  },
  methods: {
    emitSelectedRoom(selectedRoom) {
      this.selectedRoom = selectedRoom.id;

      this.$emit('selectedRoom', selectedRoom);
    },
  },
};
</script>

<template>
  <v-row>
    <v-col cols="12">
      <h3>
        Oda Tipi Seçimi
      </h3>

      <v-divider />
    </v-col>

    <v-col
      v-for="room in roomList"
      :key="room.id"
      cols="4"
    >
      <v-card
        outlined
        :class="selectedRoom === room.id ? 'active' : ''"
        @click="emitSelectedRoom(room)"
      >
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
          <v-spacer />

          {{ room.price }} TL
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.active {
  border: 3px solid green;
}
</style>
