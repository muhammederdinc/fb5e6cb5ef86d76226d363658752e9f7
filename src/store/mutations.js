export default {
  setHotelList(state, hotelList) {
    state.hotelList = hotelList;
  },
  setHotelDetailList(state, hotelDetailList) {
    state.hotelDetailList = hotelDetailList;
  },
  setCreditCard(state, creditCard) {
    state.creditCard = creditCard;

    localStorage.setItem('creditCard', JSON.stringify(creditCard));
  },
  goToNextStep(state, reservationInformation) {
    state.reservationInformation = {
      ...state.reservationInformation,
      ...reservationInformation,
    };

    if (state.reservationStep !== 3) state.reservationStep += 1;

    localStorage.setItem('reservationStep', state.reservationStep);
    localStorage.setItem('reservationInformation', JSON.stringify(state.reservationInformation));
  },
  goToPreviousStep(state) {
    state.reservationStep -= 1;
  },
  clearReservation(state) {
    state.reservationInformation = {};
    state.definedCoupon = null;
    state.reservationStep = 1;

    localStorage.removeItem('reservationStep');
    localStorage.removeItem('reservationInformation');
  },
  setReservationStep(state, reservationStep) {
    state.reservationStep = reservationStep;

    localStorage.setItem('reservationStep', reservationStep);
  },
  setSnackbar(state, params) {
    state.snackbar = params;
  },
  setDefinedCoupon(state, coupon) {
    state.definedCoupon = coupon;
  },
};
