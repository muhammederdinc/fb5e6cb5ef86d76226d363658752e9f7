export default {
  hotelList: [],
  creditCard: JSON.parse(localStorage.getItem('creditCard')) || {},
  hotelDetailList: [],
  reservationStep: Number(localStorage.getItem('reservationStep')) || 1,
  reservationInformation: JSON.parse(localStorage.getItem('reservationInformation')) || {},
};
