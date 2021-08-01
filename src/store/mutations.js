export default {
  setHotelList(state, hotelList) {
    state.hotelList = hotelList;
  },
  setHotelDetailList(state, hotelDetailList) {
    state.hotelDetailList = hotelDetailList;
  },
  incrementReservationStep(state) {
    state.reservationStep = +1;
  },
};
