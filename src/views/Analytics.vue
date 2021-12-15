<template>

    <div class=" card-panel my-color-card wrapper">
        <table class="highlight">
            <thead>
            <tr>
                <th>Sessions</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>COMP 3613 Lecture 1
                    <br>
                    <br>
                </td>
            </tr>
            <tr>
                <td>COMP 3613 Lecture 2
                    <br>
                    <br>
                </td>
            </tr>
            <tr>
                <td>COMP 3613 Lecture 3
                    <br>
                    <br>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Analytics",
  components: {},
};
</script>

<style>

.wrapper{
    width: 700px;
    height: 300px;
    border: 1px solid #c3c3c3;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}

</style>