<script>
import { mapMutations, mapState } from 'vuex';
import AppHotelReservationPreview from '@/components/AppHotelReservationPreview';
import AppConfirmDialog from '@/components/AppConfirmDialog';
import ReservationPreviewActions from './components/ReservationPreviewActions';

export default {
  name: 'ReservationPreview',
  components: {
    AppConfirmDialog,
    ReservationPreviewActions,
    AppHotelReservationPreview,
  },
  data() {
    return {
      isConfirmDialogVisible: false,
    };
  },
  computed: {
    ...mapState(['reservationInformation']),
  },
  created() {
    if (!this.reservationInformation.hotel) {
      this.$router.replace('/');
    }
  },
  methods: {
    ...mapMutations(['clearReservation', 'setReservationStep']),
    createReservation() {
      this.clearReservation();
      this.$router.push('/');
    },
    updateReservation() {
      this.setReservationStep(1);
      this.$router.push('/');
    },
  },
};
</script>

<template>
  <div>
    <reservation-preview-actions
      class="mx-16 mb-6"
      @newReservation="createReservation"
      @updateReservation="updateReservation"
      @cancelReservation="isConfirmDialogVisible = true"
    />

    <app-hotel-reservation-preview
      v-if="reservationInformation.hotel"
      class="mx-16"
      preview
    />

    <app-confirm-dialog
      v-if="isConfirmDialogVisible"
      text="Rezervasyon kaydınızı iptal etmek istediğinize emin misiniz?"
      @cancel="isConfirmDialogVisible = false"
      @confirm="createReservation"
    />
  </div>
</template>
