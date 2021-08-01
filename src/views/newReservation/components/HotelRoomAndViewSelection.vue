<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
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
  data() {
    return {
      formData: {
        room: {},
        roomScenic: {},
      },
    };
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
  created() {
    const { room = null, roomScenic = null } = this.reservationInformation;

    if (room && roomScenic) this.formData = { room, roomScenic };
  },
  methods: {
    ...mapMutations(['goToNextStep', 'goToPreviousStep']),
    saveAndContinue() {
      const { room, roomScenic } = this.formData;

      if (room.id && roomScenic.id) {
        this.goToNextStep(this.formData);
      } else {
        // to-do warning
      }
    },
    setSelectedRoom(selectedRoom) {
      this.formData.room = selectedRoom;
    },
    setSelectedRoomScenic(selectedRoomScenic) {
      this.formData.roomScenic = selectedRoomScenic;
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
      :reservation="reservation"
      :selected-room-id="formData.room.id || 0"
      @selectedRoom="setSelectedRoom"
    />

    <hotel-room-scenic-selection
      :room-list="getHotelDetailById(reservationInformation.hotel.id).room_scenic"
      :selected-room-scenic-id="formData.roomScenic.id || 0"
      @selectedRoomScenic="setSelectedRoomScenic"
    />

    <reservation-steps-actions
      class="pt-6"
      @nextStep="saveAndContinue"
      @previousStep="goToPreviousStep"
    />
  </div>
</template>
