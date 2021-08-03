export default {
  getHotelDetailById: (state) => (id) => state.hotelDetailList.find((hotel) => hotel.id === id),
  durationOfStay: (state) => {
    const startDate = new Date(state.reservationInformation.start_date);
    const endDate = new Date(state.reservationInformation.end_date);
    const diffInTime = endDate.getTime() - startDate.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  },
};
