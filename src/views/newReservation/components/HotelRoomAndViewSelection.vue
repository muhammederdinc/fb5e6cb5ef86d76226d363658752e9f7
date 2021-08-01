<script>
import { mapGetters, mapState } from 'vuex';
import ReservationStepsActions from '@/components/ReservationStepsActions';
import HotelDatePreview from './HotelDatePreview';
import HotelRoomSelection from './HotelRoomSelection';
import HotelRoomScenicSelection from './HotelRoomScenicSelection';

export default {
  name: 'HotelRoomAndViewSelection',
  components: {
    HotelDatePreview,
    HotelRoomSelection,
    ReservationStepsActions,
    HotelRoomScenicSelection,
  },
  computed: {
    ...mapState(['reservationInformation']),
    ...mapGetters(['getHotelDetailById']),
    reservation() {
      const {
        start_date: startDate = null,
        end_date: endDate = null,
        adult = null,
        child = null,
        hotel = null,
        city = null,
      } = this.reservationInformation;

      return {
        adult,
        endDate,
        startDate,
        child: child || 0,
        hotel: `${hotel.hotel_name} (${city})`,
      };
    },
  },
  methods: {
    saveAndContinue() {
      // this.getHotelNameById();
    },
  },
};
</script>

<template>
  <div>
    <hotel-date-preview
      v-if="reservationInformation.hotel"
      :reservation="reservation"
    />

    <hotel-room-selection
      :room-list="getHotelDetailById(reservationInformation.hotel.id).room_type"
    />

    <hotel-room-scenic-selection
      :room-list="getHotelDetailById(reservationInformation.hotel.id).room_scenic"
    />

    <reservation-steps-actions
      class="pt-6"
      @nextStep="saveAndContinue"
    />
  </div>
</template>
