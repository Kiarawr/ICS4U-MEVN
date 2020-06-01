import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

import HomeComponent from './components/HomeComponent.vue';
import PatientAddComponent from './components/PatientAddComponent.vue';
import PatientEditComponent from './components/PatientEditComponent.vue';
import PatientEditNotesComponent from './components/PatientEditNotesComponent.vue';
import PatientViewComponent from './components/PatientViewComponent.vue';
import PatientsComponent from './components/PatientsComponent.vue';
import AppointmentsComponent from './components/AppointmentsComponent.vue';
import AppointmentSelectPatientComponent from './components/AppointmentSelectPatientComponent.vue';
import AppointmentCreateComponent from './components/AppointmentCreateComponent.vue';

// creates an array of routes
const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent
  },
  {
    name: 'addPatient',
    path: '/addPatient',
    component: PatientAddComponent
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: PatientEditComponent
  },
  {
    name: 'editNotes',
    path: '/editNotes/:id',
    component: PatientEditNotesComponent
  },
  {
    name: 'view',
    path: '/view/:id',
    component: PatientViewComponent
  },
  {
    name: 'patients',
    path: '/patients',
    component: PatientsComponent
  },
  {
    name: 'appointments',
    path: '/appointments',
    component: AppointmentsComponent
  },
  {
    name: 'selectPatient',
    path: '/selectPatient',
    component: AppointmentSelectPatientComponent
  },
  {
    name: 'appointmentCreate',
    path: '/appointmentCreate',
    component: AppointmentCreateComponent
  }
];

// creating router object
// when the application starts, these routes are given to the vue application 
const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
