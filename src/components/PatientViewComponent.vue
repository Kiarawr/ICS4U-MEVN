// PatientViewComponent.vue

<template>
  <div>

    <div id="header">
      <img id="headerImage" src="./images/headerBackground.png"/>
    </div>

    <h1 class="titleHeader">{{ post.firstName }} {{ post.lastName }}</h1>
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

    <div id = "noteSec">
      <div class="card card-default">
        <div class="card-header">
          <div id="notesLabel"><h6>Notes</h6></div>
          <router-link :to="{ name: 'editNotes'}" tag="button" id="editNotesButton"></router-link>
        </div>
        <div class="card-body">
          <div class="newLines">
            <label style="overflow: auto; max-height: 100px; width: 1070px">{{post.notes}}</label>
          </div>
        </div>
      </div>
    </div>

    <br>
    <router-link :to="{name: 'edit'}" class="editButton">Edit</router-link>
    <button class = "deleteButton" @click.prevent="deletePost(post._id)"></button>

  </div>
</template>

<style>
  
  .card-header{
    background-color:#f7f8fa;
  }
  
  .proImage{
    height: 225px;
    width: 225px;
    border-color: #6b6b6b;
    border-width: 2px;
  }

  #profileImg{
    padding: 0px 10px 0px 0px;
    float: left; 
  }

  #info1{
    padding: 8px 10px 0px 10px;
    width: 250px;
    float: left;
  }
  #info2{
    padding: 8px 10px 0px 10px;
    float: left;
    width: 250px;
  }
  #info3{
    padding: 8px 10px 0px 10px;
    width: 200px; 
    display: inline-block; 
  }

  #noteSec{
    padding: 10px 0px;
    display: inline-block;
    width: 100%;
  }
  
  .deleteButton{
    height: 40px;
    width: 40px;
    background-image: url('./images/trashIcon.png');
    background-position: -5px;
    background-size: 50px 50px;
    border-radius: 4px;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
    margin-right: 1000px;
  }
  
  .editButton{
    background-color:#9451b5;
    color: white;
    border-radius: 4px;
    padding: 8px 15px 8px;
    border: none;
    float: left;
    margin-right: 5px;
  }
  
  .editButton:hover {
    background-color:#8348a1;
    color: white;
    text-decoration: none;
  }

  #notesLabel{
    float: left;
    margin-top: 10px;
  }

  #editNotesButton{
    float: right;
    height: 40px;
    width: 40px;
    background-image: url('./images/editIcon.png');
    background-position: 0px;
    background-size: 40px 40px;
    border-radius: 4px;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
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
      deletePost(id){
        let uri = `http://localhost:4000/posts/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.posts = response.data;
          this.$router.push({name: 'patients'});
        });
      }
    }
  }
</script>