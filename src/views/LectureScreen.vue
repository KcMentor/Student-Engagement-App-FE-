<template>
    
    <div class="box">
        <div class="  selection" style="background-color:#d1c4e9;width:65vw;">
            <div class="row1" >
                <div class="col s12 center align" >
                    <p style="font-size:2vw;color:#350b49"><b>Poll Results</b></p>
                    <div style="background-color:#e9e2f7" class=" comepetition-groups card-panel competition-wrapper">
                        <div style="color:#350b49">No Data Available</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="  selection" style="background-color:#d1c4e9;width:65vw;">
            <div class="row2" >
                <a class="btn-floating btn-medium waves-effect waves-light purple darken-4 right"><i class="material-icons">group</i></a>
                <div class="col s12 center align " >
                    <p style="font-size:2vw;color:#350b49" class="center align"><b>Competition Area</b></p>

                    <div class="teams-box">
                        <div style="background-color:#e9e2f7; width:20vw; height: 15vw;" class=" comepetition-groups card-panel competition-wrapper">
                            <div style="color:#350b49">
                                    <table class="highlight centered responsive-table">
                                    <thead>
                                    <tr>
                                        <th>Team 1</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <td>N/A</td>
                                    </tr>
                                    </tbody>
                            </table></div>
                        </div>
                        <div style="background-color:#e9e2f7; width:20vw; height: 15vw;" class=" comepetition-groups card-panel competition-wrapper">
                            <div style="color:#350b49"> 
                                <table class="highlight centered responsive-table">
                                <thead>
                                <tr>
                                    <th>Team 2</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>N/A</td>
                                </tr>
                                </tbody>
                            </table></div>
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


<style>/*
    .polls-wrapper{

    }

    .teams-wrapper{

    }*/

    .comepetition-groups{
        border-radius: 15px;
    }

    .box {
    display: flex;
    height: 400px;
    align-content: space-between;
    flex-direction: row;
    }

    .teams-box {
        position: relative;
        display: flex;
        justify-content: center;
        column-gap: 5em;
    }
</style>