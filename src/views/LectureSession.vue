<template>
    
    <div class="cards">
        <div class="row">
    <div class="col s12 m6">
      <div class="card #d1c4e9 deep-purple lighten-4">
        <div class="card-content my-color">
            <a href="#modal">
            <i class="large material-icons my-color 2rem">add_circle_outline</i>
            </a>
          <span class="card-title"><b>Create Session</b></span>
        </div>
      </div>
    </div>
  </div>
    
     <div class="row">
    <div class="col s12 m6">
      <div class="card #d1c4e9 deep-purple lighten-4">
        <div class="card-content my-color">
            <a href="#modal">
             <i class="material-icons my-color right">clear</i>
            </a>
          <span class="card-title"> <b>COMP 3607</b></span>
          <p>10:00AM - 11:00AM</p>
        </div>
      </div>
    </div>
  </div>
           
    </div>
    
</template>

<script>
export default {

}
</script>

<style>

    .card{
        border-radius: 12px;    
        width: 300px;
        height: 200px;
    }

    .cards{
        height: 250px;
        position: absolute;
        display: flex;
        flex-direction: row;
        row-gap: 10px;
    }
</style>