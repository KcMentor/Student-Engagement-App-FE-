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
          
        
      <div class="buttons right-align">
        <a class="waves-effect waves-light btn-large deep-purple lighten-1">Monday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1">Tuesday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1">Wednesday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1">Thursday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1">Friday</a>
      </div>

      </div>

      
      
    </div>

   
  </div>

      <div class=" card-panel my-color-card wrapper1">
        <table class="highlight centered responsive-table">
            <thead>
            <tr>
                <th>LAST CLASS ENGAGEMENT</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>N/A</td>
            </tr>
            </tbody>
        </table>
    </div>
   
      <div class=" card-panel my-color-card wrapper2 ">
        <table class="highlight centered responsive-table">
            <thead>
            <tr>
                <th>MOST ENGAGED STUDENT</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>N/A</td>
            </tr>
            </tbody>
        </table>
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
    position: relative;
    left: 20px;
    width: 400px;
  }

  .btn-large{
    position: relative;
    border-radius: 12px;
  }

  .buttons{
    position: absolute;
    width: fit-content;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    bottom: 20px;
    top: 20px;
    left: 800px;
  }

  .wrapper1{
    border-radius: 12px;
    color:  #4E2D68;
    width: 450px;
    position: absolute;
    right: 30px;
    top: 650px;
    height: 250px;
  }

  .wrapper2{
    border-radius: 12px;
    color:  #4E2D68;
    position: relative;
    right: 30px;
    top: 650px;
    width: 450px;
  }

  
  table{
    position: relative;
    left: auto;
  }
</style>