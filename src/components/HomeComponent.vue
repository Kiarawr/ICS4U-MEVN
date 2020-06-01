 //HomeComponent.vue

<template>
    <div class="row justify-content-center">
        <br>
        <div id = "homeImg">
            <img src="./images/homePage.jpeg" class="homePageImage">
            <div class="title">MD Database</div>
            <div class="subTitle">your online patient database</div>
        </div>
    </div>
</template>

<style>

    #homeImg{
        position: absolute;
    }

    .homePageImage{
        height: 500px;
        width: 1110px;
    }

    .title {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-shadow: 2px 2px 4px #000000;
        font-size: 60px;
    }  
    .subTitle{
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-shadow: 2px 2px 4px #000000;
        font-size: 25px;
    }
    
 </style>