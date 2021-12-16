

<template>
   
     <div class=" card-panel my-color-card wrapper">
        <table class="highlight centered responsive-table">
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

    <div class=" card-panel my-color-card wrapper2">
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


.wrapper2{
    width: fit-content;
    height: 250px;
    border: 1px solid #c3c3c3;
    position: absolute;
    bottom: 0px; 
    left: 30px;
    color: #4E2D68;
    border-radius: 12px;
}

.wrapper{
    width: fit-content;
    height: 250px;
    border: 1px solid #c3c3c3;
    position: absolute;
    bottom: 0px; 
    right: 30px;
    color: #4E2D68;
    border-radius: 12px;
}


table{
    position: relative;
    left: auto;
}


</style>