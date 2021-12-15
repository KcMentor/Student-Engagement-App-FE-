

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

.wrapper{
    width: 600px;
    height: 250px;
    border: 1px solid #c3c3c3;
    position: absolute;
    bottom: 0px; 
    right:15px;
    color: #4E2D68;
}

.wrapper2{
    width: 600px;
    height: 200px;
    border: 1px solid #c3c3c3;
    position: absolute;
    bottom: 0px; 
    left: 15px;
    color: #4E2D68;
}

.carousel-item {
    display:flex;
    justify-content: center;
}

.carousel {
    position:relative;
    overflow: hidden;
    width:800px;
    height:500px;
    z-index:10;
}
    
.btn {
    padding:5px 10px;
    background-color:rgba(0,0,0,0.5);
    border:1px solid transparent;
    margin:5px 10px;
    color:#FFF;
    height:50px;
    width:50px;
    position:absolute;
    margin-top:-25px;
    z-index:2;
}
    
.btn:hover {
    cursor: pointer;
}
    
.btn:focus{
    outline:none;
}
    
.btn-next {
    top:50%;
    right:0;
}
    
.btn-prev {
    top:50%;
    left:0;
}
    
.carousel-slider {
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
}
    
.carousel-slider img {
    width:100%;
    height:100%;
}

</style>