//AppointmentCreateComponent.vue

<template>
  <div>
    <div id="header">
      <img id="headerImage" src="./images/headerBackground.png"/>
    </div>

    <h1 class="titleHeader">Schedule Appointment for {{ post.firstName }} {{ post.lastName }}</h1>
    <br>

    <div id = "profileImg">
      <img src="./images/profilePic.png" class="proImage" alt = "profilePic" >
    </div>

    <div id = "info1">
      <h6>Health Card:</h6>
      <label>{{post.ohip}}</label>
      <h6>Date Of Birth:</h6>
      <label>{{post.birthYear}}/{{post.birthMonth}}/{{post.birthDay}}</label>
      <h6>Sex:</h6>
      <label>{{post.sex}}</label>
    </div> 

    <div id = "info2">
      <h6>Address:</h6>
      <label>{{post.address}}</label> <br>
      <label>{{post.city}} , {{post.province}}</label> <br>
      <label>{{post.postalCode}}</label> <br>
    </div>

    <div id="info3">
      <h6>Phone Number:</h6>
      <label>{{post.number}}</label>
      <h6>Email:</h6>
      <label>{{post.email}}</label>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <form autocomplete="off" @submit.prevent="addAppointment">

      <div id="apptInput">
        <label class="dateLabel">Date</label>
        <input required type="date" id="dateInput" v-model="appointment.apptDate">

        <label class="dateLabel">Time</label>
        <input required type="time" id="timeInput" v-model="appointment.apptTime">
      </div>

      <div class="form-group" id="scheduleApptForm">
        <button class="createButton">Create</button>
        <router-link :to="{ name: 'appointments' }" tag="button" class="cancelButton" id="cancelCreateButton"></router-link>
      </div>

    </form>

  </div>
</template>

<style>

  #cancelCreateButton{
    margin-left: 10px;
  }

  #apptInput{
    float: left;
  }

  #scheduleApptForm{
    float: right;
  }

  #dateInput{
    border-radius: 4px;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
    padding: 6px 18px;
    margin-right: 10px;
  }

  .dateLabel{
    background-color: #d3d8de;
    padding: 8px 18px;
    margin-right: 10px;
    border-radius: 4px;
  }

  .timeLabel{
    background-color: #d3d8de;
    padding: 8px 18px;
    border-radius: 4px;
  }

  #timeInput{
    border-radius: 4px;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
    padding: 6px 18px;
  }

</style>

<script>
  export default {
    data() {
      return {
        post: {},
        appointment: {}
      }
    },
    created() {
      let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
      this.axios.get(uri).then((response) => {
        this.post = response.data;
      });
    },
    methods:{
      addAppointment(){
        this.appointment.patient = this.post._id;
        let uri = 'http://localhost:4000/appointments/add';
        this.axios.post(uri, this.appointment).then(() => {
          this.$router.push({name: 'appointments'});
        });
      }
    }
  }
</script>