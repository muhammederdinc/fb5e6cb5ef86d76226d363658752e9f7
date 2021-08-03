<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
import snackbarMixin from '@/mixins/snackbar';
import AppStepProgressBarActions from '@/components/AppStepProgressBarActions';
import NewReservationStepTwoPreview from './NewReservationStepTwoPreview';
import NewReservationStepTwoRoomSelection from './NewReservationStepTwoRoomSelection';
import NewReservationStepTwoRoomScenicSelection from './NewReservationStepTwoRoomScenicSelection';

export default {
  name: 'NewReservationStepTwo',
  components: {
    AppStepProgressBarActions,
    NewReservationStepTwoPreview,
    NewReservationStepTwoRoomSelection,
    NewReservationStepTwoRoomScenicSelection,
  },
  mixins: [snackbarMixin],
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
    ...mapGetters(['getHotelDetailById', 'durationOfStay']),
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
    accommodationPrice() {
      const { room } = this.formData;
      const dayCount = this.durationOfStay;

      return room.price * dayCount;
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
        const params = {
          ...this.formData,
          price: this.getPrice(),
        };

        this.goToNextStep(params);
      } else {
        this.showSnackbar('Lütfen Oda Ve Manzara Seçimini Yapınız', 'info');
      }
    },
    setSelectedRoom(selectedRoom) {
      this.formData.room = selectedRoom;
    },
    setSelectedRoomScenic(selectedRoomScenic) {
      this.formData.roomScenic = selectedRoomScenic;
    },
    getPrice() {
      const { roomScenic } = this.formData;
      const additionalPrice = (this.accommodationPrice * roomScenic.price_rate) / 100;
      const result = this.accommodationPrice + additionalPrice;

      return result;
    },
  },
};
</script>

<template>
  <div>
    <new-reservation-step-two-preview
      v-if="reservationInformation.hotel"
      :reservation="reservation"
    />

    <new-reservation-step-two-room-selection
      :room-list="getHotelDetailById(reservationInformation.hotel.id).room_type"
      :reservation="reservation"
      :selected-room-id="formData.room.id || 0"
      @selectedRoom="setSelectedRoom"
    />

    <new-reservation-step-two-room-scenic-selection
      :room-list="getHotelDetailById(reservationInformation.hotel.id).room_scenic"
      :selected-room-scenic-id="formData.roomScenic.id || 0"
      @selectedRoomScenic="setSelectedRoomScenic"
    />

    <app-step-progress-bar-actions
      class="pt-6"
      @nextStep="saveAndContinue"
      @previousStep="goToPreviousStep"
    />
  </div>
</template>
