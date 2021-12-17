<template>
  <div class="container" style="margin-left:0.5vw;margin-top:0.5vw">
    <div class="row">
      <div
        class="col s5 m3 l3 Date"
        style="background-color:#350b49;position:sticky;margin-top:3px;"
      >
        <p class="center-align" style="margin:0;">Date: {{ date }}</p>
        <p class="center-align" style="margin:0;">Time: {{ time }} (24hrs)</p>
      </div>
    </div>
  </div>
  <div class="container center-align selection" style="background-color:#d1c4e9;width:100vw;">
    <div class="row option" style>
      <div class="col s12 center align">
        <p style="font-size:5vw;margin:0px;color:#350b49">Session Wizard</p>
        <i class="material-icons" style="font-size:15vw;">school</i>
        <div class="input-field">
          <a
            class="btn waves-effect waves-purple my-color-back modal-trigger"
            style="width:20vw;margin-bottom:0vh;"
            data-target="modal1"
            id="modalkey"
            href="#modal1"
          >Start Session</a>
        </div>
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card-panel my-color-card class-engagement-wrapper" style="margin-top:50px">
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

  <div class="card-panel my-color-card student-engaged-wrapper">
    <table class="highlight centered responsive-table" style>
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
import M from 'materialize-css'
import firebase from 'firebase'
export default {
  data() {
    return {
      loggedIn: false,
      date: null,
      time: null
    }
  },
  methods: {
    currentDateTime() {
      const current = new Date();
      const date = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
      const time = current.getHours() + ":" + current.getMinutes().toString().padStart(2, '0');

      this.time = time;
      this.date = date;
    },
  },
  mounted() {
    document.getElementById("modalkey").addEventListener('click', function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
    })
    document.addEventListener('DOMContentLoaded', function () {
      M.AutoInit();
    });
    this.currentDateTime();
  }

};
</script>

<style>
.Date {
  border: 1px solid #350b49;
  border-radius: 5px;
  margin: 0px;
}
</style>

<!-- <div class="buttons-group right-align">
        <a class="waves-effect waves-light btn-large deep-purple lighten-1 button-individual">Monday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1 button-individual">Tuesday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1 button-individual">Wednesday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1 button-individual">Thursday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1 button-individual">Friday</a>
      </div> -->
