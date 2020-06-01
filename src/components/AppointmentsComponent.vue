//AppointmentsComponent.vue

<template>
  <div>

    <div id="header">
      <img id="headerImage" src="./images/headerBackground.png"/>
    </div>

    <h1 class="titleHeader">Appointments</h1>
    <br>

    <input id = "searchBar" type ="text" v-model="search" placeholder="Search..."/>
    <router-link :to="{ name: 'selectPatient' }" tag="button" id="addButton"></router-link>
    <br>
    <br>

    <table class="table table-hover">
      <thead>
        <tr>
          
          <th>
            <div class="dropdown">
              <button class="dropbtn">First Name</button>
              <div class="dropdown-content">
                <a @click="sortAscendingFirstName">Ascending</a>
                <a @click="sortDescendingFirstName">Descending</a>
              </div>
            </div>
          </th>
    
          <th>
            <div class="dropdown">
              <button class="dropbtn">Last Name</button>
              <div class="dropdown-content">
                <a @click="sortAscendingLastName">Ascending</a>
                <a @click="sortDescendingLastName">Descending</a>
              </div>
            </div>
          </th>

          <th>
            <div class="dropdown">
              <button class="dropbtn">Date</button>
                <div class="dropdown-content">
                <a @click="sortEarliest">Earliest</a>
                <a @click="sortLatest">Latest</a>
              </div>
            </div>
          </th>

          <th>Time</th>
          <th>Actions</th>

        </tr>
      </thead>

      <tbody>
        <tr v-for="appointment in filteredAppointments" :key="appointment._id">
          <td>{{ appointment.patient.firstName}}</td>
          <td>{{ appointment.patient.lastName }}</td>
          <td>{{ appointment.apptDate | truncate(10) }}</td>
          <td>{{ appointment.apptTime }}</td>
          <td><button class="deleteApptButton" @click.prevent="deleteAppointment(appointment._id)"></button></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style>

  .deleteApptButton{
    height: 30px;
    width: 30px;
    background-size: 40px 40px;
    margin-right: 0px;
    background-image: url('./images/trashIcon.png');
    background-position: -5px;
    border-radius: 4px;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
    padding: 8px 15px 8px;
  }
  
</style>

<script>
  export default {
    data() {
      return {
        appointments: [],
        search: ''
      }
    },
    created() {
      let uri = 'http://localhost:4000/appointments';
      this.axios.get(uri).then(response => {
        this.appointments = response.data;
      })
      ;
    },
    computed: {
      filteredAppointments: function(){
        return this.appointments.filter((appointment) => {
          return appointment.patient.firstName.toLowerCase().match(this.search.toLowerCase()) || appointment.patient.lastName.toLowerCase().match(this.search.toLowerCase()) || appointment.apptDate.toLowerCase().match(this.search.toLowerCase())
        });
      }
    },
    filters: {
      truncate: function (text, length) {
        return text.substring(0, length);
      }
    },
    methods: {
      deleteAppointment(id){
        let uri = `http://localhost:4000/appointments/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.appointments = response.data;
        });
      },
      sortAscendingFirstName(){
        this.appointments.sort((a,b) => a.patient.firstName > b.patient.firstName ? 1 : -1);
      },
      sortDescendingFirstName(){
        this.appointments.sort((a,b) => a.patient.firstName < b.patient.firstName ? 1 : -1);
      },
      sortAscendingLastName(){
        this.appointments.sort((a,b) => a.patient.lastName > b.patient.lastName ? 1 : -1);
      },
      sortDescendingLastName(){
        this.appointments.sort((a,b) => a.patient.lastName < b.patient.lastName ? 1 : -1);
      },
      sortEarliest(){
        this.appointments.sort((a,b) => a.apptDate > b.apptDate ? 1 : -1);
      },
      sortLatest(){
        this.appointments.sort((a,b) => a.apptDate < b.apptDate ? 1 : -1);
      }
    }
  }
 </script>