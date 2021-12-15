<template>
  <div class="row">
    <div class="col s12 m4">
      <div class="card my-color-card">
        <div class="card-content my-color">
          <a href="#modal">
            <i class="large material-icons my-color">add_circle_outline</i>
          </a>
          <div id="modal1" class="modal">
            <div class="modal-content">
              <h4>Modal Header</h4>
              <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>

          <h4>Create Question Bank</h4>
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
.my-color {
  color: #4e2d68;
}
.my-color-card {
  background-color: #ede7f0;
}
.card-content {
  text-align: center !important;
}
</style>