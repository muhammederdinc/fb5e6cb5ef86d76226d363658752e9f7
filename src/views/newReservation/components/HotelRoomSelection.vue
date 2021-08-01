<script>
export default {
  name: 'HotelRoomSelection',
  props: {
    roomList: {
      type: Array,
      required: true,
    },
    reservation: {
      type: Object,
      required: true,
    },
    selectedRoomId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      selectedRoom: 0,
    };
  },
  created() {
    if (this.selectedRoomId) this.selectedRoom = this.selectedRoomId;
  },
  methods: {
    emitSelectedRoom(selectedRoom) {
      this.selectedRoom = selectedRoom.id;

      this.$emit('selectedRoom', selectedRoom);
    },
    getRoomPrice({ price }) {
      const { adult, child } = this.reservation;
      const totalPeople = adult + child;
      const dayCount = this.getNumberOfDays(this.reservation.startDate, this.reservation.endDate);

      return dayCount * totalPeople * price;
    },
    getNumberOfDays(start, end) {
      const startDate = new Date(start);
      const endDate = new Date(end);
      const oneDay = 1000 * 60 * 60 * 24;
      const diffInTime = endDate.getTime() - startDate.getTime();
      const diffInDays = Math.round(diffInTime / oneDay);

      return diffInDays;
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
          <div class="d-flex flex-column">
            <span>
              {{ reservation.dayCount }} Gün
            </span>

            <span>
              Yetişkin: {{ reservation.adult }}
              Çocuk: {{ reservation.child }}
            </span>
          </div>

          <v-spacer />

          {{ getRoomPrice(room) }} TL
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
