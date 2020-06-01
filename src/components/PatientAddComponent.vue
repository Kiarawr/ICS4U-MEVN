//PatientAddComponent.vue

<template>
  <div>

    <div id="header">
      <img id="headerImage" src="./images/headerBackground.png"/>
    </div>

    <h1 class="titleHeader">Add Patient</h1>
    <hr>

    <form autocomplete="off" @submit.prevent="addPost">
      
      <label class="inputHeading">Personal Information</label>
      
      <div class="form-row">
        <div class="form-group col-md-6">
          <input required type="text" class="nameInput" placeholder="First Name" v-model="post.firstName">
        </div>
        <div class="form-group col-md-6">
          <input required type="text" class="nameInput" placeholder="Last Name" v-model="post.lastName">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-5">
          <input required type="text" class="inputBox" id="ohipInput" placeholder="Health Card" v-model="post.ohip">
        </div>
        <div class="form-group col-md-1.5">
          <label class="dateOfBirthLabel">Date of Birth</label>
        </div>
        <div class="dateOfBirth">
          <input required type="number" max="2020" min="1900" class="exampleFormControlSelect1" placeholder="YYYY" v-model="post.birthYear">
        </div>
        <div class="dateOfBirth">
          <input required type="number" max="12" min="1" class="exampleFormControlSelect1" placeholder="MM" v-model="post.birthMonth">
        </div>
        <div class="dateOfBirth">
          <input required type="number" max="31" min="1" class="exampleFormControlSelect1" placeholder="DD" v-model="post.birthDay">
        </div>
        <div class="form-group col-md-1.5">
          <label class="sexLabel">Sex</label>
        </div>
        <div class="sex">
          <select required id="inputSex" class="form-control" v-model="post.sex">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
    
      <label class="inputHeading">Contact Information</label>

      <div class="form-group">
        <input required type="text" class="addressInput" placeholder="Street Address" v-model="post.address">
      </div>

      <div class="form-row">
        <div class="col-7">
          <input required type="text" class="addressInput" placeholder="City" v-model="post.city">
        </div>
        <div class="col">
          <input required type="text" class="addressInput" placeholder="Province" v-model="post.province">
        </div>
        <div class="col">
          <input required type="text" class="addressInput" placeholder="Postal Code" v-model="post.postalCode">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <input required type="text" class="inputBox" id="numberInput" placeholder="Phone Number" v-model="post.number">
        </div>
        <div class="form-group col-md-6">
          <input required type="text" class="inputBox" id="emailInput" placeholder="Email Address" v-model="post.email">
        </div>
      </div>
      
      <br>

      <div class="form-group" id="addPatientForm">
        <button class="createButton">Create</button>
        <router-link :to="{ name: 'patients' }" tag="button" class="cancelButton" id="cancelCreateButton"></router-link>
      </div>

    </form>
  </div>
</template>

<style>

  #addPatientForm{
    float:left;
  }

  .inputBox{
    height: 40px;
    width: 100%;
    background-color: white;
    background-position: 0px;
    background-repeat: no-repeat;
    background-size: 40px 40px;
    padding-left: 45px;
    border-radius: 4px;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
  }

  .inputHeading{
    font-weight: bold;
    font-size: 18px;
  }

  .nameInput{
    height: 40px;
    width: 100%;
    background-color: white;
    background-image: url('./images/firstNameIcon.png');
    background-position: 0px;
    background-repeat: no-repeat;
    background-size: 40px 40px;
    padding-left: 45px;
    border-radius: 4px;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
  }

  .firstNameInput:focus{
    border-radius: 4px;
  }

  #ohipInput{
    background-image: url('./images/ohipIcon.png');
  }

  .dateOfBirthLabel{
    background-color: #d3d8de;
    padding: 8px 18px;
    margin-right: 10px;
    border-radius: 4px;
  }

  .dateOfBirth{
    width: 70px;
    margin: 0px 3px;
  }

  .exampleFormControlSelect1{
    width: 100%;
    height: 40px;
    padding-left: 5px;
    border-radius: 4px;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
  }

  .sexLabel{
    background-color: #d3d8de;
    padding: 8px 18px;
    margin-right: 10px;
    border-radius: 4px;
  }
  .sex{
    width: 192px;
    margin: 0px 3px;
  }

  .addressInput{
    height: 40px;
    width: 100%;
    background-color: white;
    background-image: url('./images/addressIcon.png');
    background-position: 0px;
    background-repeat: no-repeat;
    background-size: 40px 40px;
    padding-left: 45px;
    border-radius: 4px;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
  }

  #numberInput{
    background-image: url('./images/phoneIcon.png');
    margin-top: 16px;
  }

  #emailInput{
    background-image: url('./images/mailIcon.png');
    margin-top: 16px;
  }

  .createButton{
    background-color: #9451b5;
    color: white;
    border-radius: 4px;
    padding: 8px 15px;
    border: none;
  }
  
  .createButton:hover {
    background-color:#8348a1;
    color: white;
    text-decoration: none;
  }

</style>

<script>
  export default {
    data(){
      return{
        post:{}
      }
    },
    methods:{
      addPost(){
        let uri = 'http://localhost:4000/posts/add';
        this.axios.post(uri, this.post).then(() => {
          this.$router.push({name: 'patients'});
          });
      }
    }
  }
</script>
  