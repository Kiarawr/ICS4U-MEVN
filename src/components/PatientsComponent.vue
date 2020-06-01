 //PatientsComponent.vue

<template>
  <div>

    <div id="header">
      <img id="headerImage" src="./images/headerBackground.png"/>
    </div>

    <h1 class="titleHeader">Patients</h1>
    <br>
        
    <input id = "searchBar" type ="text" v-model="search" placeholder="Search..."/>
    <router-link :to="{ name: 'addPatient' }" tag="button" id="addButton"></router-link>
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

          <th>Health Card</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="post in filteredPosts" :key="post._id">
            <td>{{ post.firstName }}</td>
            <td>{{ post.lastName }}</td>
            <td>{{ post.ohip }}</td>
            <td><router-link :to="{name: 'view', params: { id: post._id }}" class="viewButton">View</router-link></td>
        </tr>
      </tbody>
    </table>
  
  </div>
</template>

<style>

  #header
  {
    width:1110px;
    height:80px;
  }

  #headerImage
  {
    position: absolute;
    width: 1110px;
    height: 80px;
  }

  .titleHeader{
    position: absolute;
    top: 75px;
    left: 50px;
    color: black;
    text-shadow: 4px 4px 4px white;
  }

  .dropbtn {
    color:black;
    font-size: 16px;
    font-weight:bold;
    border: none;
    background-color: white;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }

  .dropdown-content a {
    color: black;
    font-size: 16px;
    padding: 12px 16px;
    text-decoration: none;
    font-weight: normal;
    display: block;
    border-radius:4px;
  }

  .dropdown-content a:hover {background-color: #ddd;}

  .dropdown:hover .dropdown-content {display: block;}

  .dropdown:hover .dropbtn {color:#9451b5;}
  
  #searchBar{
    height: 40px;
    width: 1050px;
    background-color: white;
    background-image: url('./images/searchIcon.png');
    background-position: 0px;
    background-repeat: no-repeat;
    background-size: 40px 40px;
    padding-left: 45px;
    border-radius: 4px;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
  }

  #addButton{
    float: right;
    height: 40px;
    width: 40px;
    background-image: url('./images/plusIcon.png');
    background-position: 0px;
    background-size: 40px 40px;
    border-radius: 4px;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
  }

  .viewButton{
    background-color: #9451b5;
    color: white;
    border-radius: 4px;
    padding: 8px 15px;
    border: none;
  }
  
  .viewButton:hover {
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