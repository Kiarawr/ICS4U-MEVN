//App.vue

<template>
  <div id="homewrapper">
    <div class="container">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/patients" class="nav-link">Patients</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/appointments" class="nav-link">Appointments</router-link>
          </li>
        </ul>
      </nav>

      <transition name="fade">
        <router-view></router-view>
      </transition>
      
    </div>
  </div>
</template>

<style>

  .container{
    position: absolute;
    width: 1140;
  }

  .navbar{
    position: absolute;
    top: 0px;
    width: 1110px;
    left: 0px;
  }

  #homewrapper{
    width: 1140px;
    height: 930px;
    margin: 0px auto;
    position: relative;
    
  }

</style>

<script>
    export default{
    }
</script>