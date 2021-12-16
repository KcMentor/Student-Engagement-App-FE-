

<template>
   
     <div class=" card-panel my-color-card Sessions-wrapper">
        <table class=" analytics-table highlight centered responsive-table">
            <thead>
            <tr>
                <th>Sessions</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>COMP 3613 Lecture 1</td>
            </tr>
            <tr>
                <td>COMP 3613 Lecture 2</td>
            </tr>
            <tr>
                <td>COMP 3613 Lecture 3</td>
            </tr>
            </tbody>
        </table>
    </div>

    <div class=" card-panel my-color-card Students-wrapper">
        <table class="highlight centered responsive-table">
            <thead>
            <tr>
                <th>Students</th>
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
        name: "Analytics",
        
        components : {
        }
    }


</script>

<style>


.Students-wrapper{
    width: 350px;
    height: 250px;
    border: 1px solid #c3c3c3;
    position: absolute;
    bottom: 0px; 
    left: 30px;
    color: #4E2D68;
    border-radius: 12px;
}

.Sessions-wrapper{
    width: 350px;
    height: 250px;
    border: 1px solid #c3c3c3;
    position: absolute;
    bottom: 0px; 
    right: 30px;
    color: #4E2D68;
    border-radius: 12px;
}


.analytics-table{
    position: relative;
    left: auto;
}


</style>