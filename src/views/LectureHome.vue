<template>
  <div class="lecturehome">
    <h1>Lecture Home</h1>
    <router-link to="/lecturerActivity"><a>View Activities</a></router-link>
  </div>

  <div class="container center-align selection" style="background-color:#d1c4e9;width:80vw;">
   <div class="row option" >
      <div class="col s12 " >
          <table class="highlight  responsive-table">
              <thead>
              <tr>
                  <th>Sessions</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                  <td><b>COMP 3602 - Theory of Computing</b>
                  <br> 10:00am - 12:00pm</td>
              </tr>
              <tr>
                  <td><b>COMP 3611 - Data Structures</b>
                    <br> 12:00pm - 1:00pm</td>
              </tr>
              <tr>
                  <td><b>COMP 3605 - Data Analytics</b>
                    <br> 1:00pm - 2:00pm</td>
              </tr>
              </tbody>
          </table>
          
      </div>

      <div class="buttons right-align">
        <a class="waves-effect waves-light btn-large deep-purple lighten-1">Monday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1">Tuesday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1">Wednesday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1">Thursday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1">Friday</a>
      </div>
      
      
    </div>

   
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Lecture Home",
  components: {},
};
</script>

<style>
  .container{
    position: relative;
    color:  #4E2D68;
  }

  table{
    width: 400px;
  }

  .btn-large{
    border-radius: 12px;
    
  }

  .buttons{
    position: relative;
    width: fit-content;
    display: flex;
    flex-direction: column;
    bottom: 270px;
    left: 600px;
  }

</style>