export default {
  setHotelList(state, hotelList) {
    state.hotelList = hotelList;
  },
  setHotelDetailList(state, hotelDetailList) {
    state.hotelDetailList = hotelDetailList;
  },
  goToNextStep(state, reservationInformation) {
    state.reservationInformation = {
      ...state.reservationInformation,
      ...reservationInformation,
    };

    state.reservationStep += 1;

    localStorage.setItem('reservationStep', state.reservationStep);
    localStorage.setItem('reservationInformation', JSON.stringify(state.reservationInformation));
  },
};
