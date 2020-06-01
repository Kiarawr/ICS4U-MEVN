// PatientEditComponent.vue

<template>
  <div>

    <div id="header">
      <img id="headerImage" src="./images/headerBackground.png"/>
    </div>

    <h1 class="titleHeader">Edit Patient</h1>
    <hr>

    <form autocomplete="off" @submit.prevent="updatePost">

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

      <div class="form-group">
        <button class="updateButton">Update</button>
      </div>

    </form>
  </div>
</template>

<style>

  .updateButton{
    background-color: #9451b5;
    color: white;
    border-radius: 4px;
    padding: 8px 15px;
    border: none;
  }
  
  .updateButton:hover {
    background-color:#8348a1;
    color: white;
    text-decoration: none;
  }

</style>

<script>
  export default {
    data() {
      return {
        post: {}
      }
    },
    created() {
      let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
      this.axios.get(uri).then((response) => {
          this.post = response.data;
      });
    },
    methods: {
      updatePost() {
        let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
        this.axios.post(uri, this.post).then(() => {
          this.$router.push({name: 'view', params: {id: this.post._id}});
        });
      }
    }
  }
</script>