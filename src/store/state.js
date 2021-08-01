export default {
  hotelList: [],
  hotelDetailList: [],
  reservationStep: localStorage.getItem('reservationStep') || 1,
  reservationInformation: JSON.parse(localStorage.getItem('reservationInformation')) || {},
};
