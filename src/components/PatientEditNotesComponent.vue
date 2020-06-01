//PatientEditNotesComponent.vue

<template>
  <div>

    <div id="header">
      <img id="headerImage" src="./images/headerBackground.png"/>
    </div>

    <h1 class="titleHeader">{{ post.firstName }} {{ post.lastName }}</h1>
    <hr>

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

    <form @submit.prevent="updatePost">
      <div id = "noteSec">
        <div class="card card-default">
          <div class="card-header">Notes</div>

          <div class="card-body">
            <div class ="newLines">
              <textarea class="notesInput" cols="40" rows="3" v-model="post.notes"></textarea>
            </div>
            <div class="form-group" id="updateNotesButton">
              <button class="updateButton">Update</button>
            </div>
          </div>

        </div>
      </div>
    </form>

  </div>
</template>

<style>

  .newLines{
    white-space: pre-line;
  }

  .notesInput{
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    border-radius: 4px;
    resize: none;
    border: 1px solid #ced4da;
  }

  .notesInput:focus{
    border: 1px #80bdff;
    box-shadow: 0px 0px 8px #bfdeff;
  }

  #updateNotesButton{
    margin: 0px;
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
      updatePost(){
        let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
        this.axios.post(uri, this.post).then(() => {
          this.$router.push({name: 'view', params: {is: this.post._id}});
        });
      }
    }
  }
</script>