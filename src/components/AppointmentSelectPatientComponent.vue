//AppointmentSelectPatientComponent.vue

<template>
  <div>

    <div id="header">
      <img id="headerImage" src="./images/headerBackground.png"/>
    </div>

    <h1 class="titleHeader">Select Patient for Appointment</h1>
    <br>

    <input id = "searchBar" type ="text" v-model="search" placeholder="Search for a patient..."/>
    <router-link :to="{ name: 'appointments' }" tag="button" class="cancelButton"></router-link>
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

          <th>OHIP Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="post in filteredPosts" :key="post._id">
          <td>{{ post.firstName }}</td>
          <td>{{ post.lastName }}</td>
          <td>{{ post.ohip }}</td>
          <td><router-link :to="{name: 'appointmentCreate', params: { id: post._id }}" class="selectButton">Select</router-link></td>
        </tr>
      </tbody>
    </table>
            
  </div>
</template>

<style>

  .cancelButton{
    float: right;
    height: 40px;
    width: 40px;
    background-image: url('./images/cancelIcon.png');
    background-position: 0px;
    background-size: 40px 40px;
    border-radius: 4px;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
  }

  .selectButton{
    background-color: #9451b5;
    color: white;
    border-radius: 4px;
    padding: 8px 15px;
    border: none;
  }
  
  .selectButton:hover {
    background-color:#8348a1;
    color: white;
    text-decoration: none;
  }

</style>

<script>
  export default {
    data() {
      return {
        posts: [],
        appointments: [],
        post: '',
        search: ''
      }
    },
    created() {
      let uri = 'http://localhost:4000/posts';
      this.axios.get(uri).then(response => {
        this.posts = response.data;
      });
    },
    methods: {
      sortAscendingFirstName(){
        this.posts.sort((a,b) => a.firstName > b.firstName ? 1 : -1);
      },
      sortDescendingFirstName(){
        this.posts.sort((a,b) => a.firstName < b.firstName ? 1 : -1);
      },
      sortAscendingLastName(){
        this.posts.sort((a,b) => a.lastName > b.lastName ? 1 : -1);
      },
      sortDescendingLastName(){
        this.posts.sort((a,b) => a.lastName < b.lastName ? 1 : -1);
      }
    },
    computed: {
      filteredPosts: function(){
        return this.posts.filter((post) => {
          return post.firstName.toLowerCase().match(this.search.toLowerCase()) || post.lastName.toLowerCase().match(this.search.toLowerCase()) || post.ohip.match(this.search);     
        });
      }
    }
  }
</script>