import Vue from 'vue';
import VueRouter from 'vue-router';
import PageNotFound from '../views/PageNotFound';
import NewReservation from '../views/newReservation';
import ReservationPreview from '../views/reservationPreview';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'NewReservation',
    component: NewReservation,
  },
  {
    path: '/reservation-preview',
    name: 'ReservationPreview',
    component: ReservationPreview,
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
