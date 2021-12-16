<template>

   <form class="search-form" role="search" id="form">
  <input class="search-input" type="search" id="query" name="q"
   placeholder="Search..."
   aria-label="Search through site content">
  <button class="search-button">
    <svg class="search-svg" viewBox="0 0 1024 1024"><path class=" path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
  </button>
</form>
    
    <div class="cards-groups">
        <div class="row">
    <div class="col s12 m6">
      <div class="session-card #d1c4e9 deep-purple lighten-4">
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
      <div class="session-card #d1c4e9 deep-purple lighten-4">
        <div class="card-content my-color">
            <a href="#modal">
             <i class="material-icons my-color right">clear</i>
            </a>
          <span class="card-title center"> <b><br>Theory of Computing</b>
              <br>COMP 3602</span>
               <div class="card-action #ede7f0">
                <p>10:00AM - 11:00AM
                <br>15th Jan, 2022
          </p>
        </div>
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

    .session-card{
        border-radius: 12px;    
        width: 300px;
        height: 200px;
    }

    .cards-groups{
        top: 150px;
        height: 250px;
        position: absolute;
        display: flex;
        flex-direction: row;
        row-gap: 10px;
    }

    .search-form {
        background-color: #ede7f0;
        position: relative;
        width: 300px;
        height: 44px;
        left: 20px;
        top: 20px;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .search-input {
        all: unset;
        font: 16px system-ui;
        color: gray;
        height: 100%;
        width: 100%;
        padding: 6px 10px;
    }

    ::placeholder {
        color: gray;
        opacity: 0.7; 
        position: relative;
        left: 5px;
    }

    .search-button {
        all: unset;
        cursor: pointer;
        width: 44px;
        height: 44px;
    }

    .search-svg {
        color: gray;
        fill: currentColor;
        width: 24px;
        height: 24px;
        padding: 10px;
    }
    

</style>