<template>
<div class="row" >
    <div class="col s12" >
      <div class="card my-color-card" style="height:10vh;">
        <div class="card-content col s12" >
          <a class="modal-trigger" data-target="modal1" id="modalkey" href="#modal1" >
            <i class="small material-icons my-color" style="display:inline-block;vertical-align:top;margin-top:0px">add_circle_outline</i>
            <h5 class="my-color" style="display:inline-block;padding-left:2vw;margin-top:0px">Add a Question</h5>
          </a>
          <div id="modal1" class="modal">
            <div class="modal-content">
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <p class="col s6 offset-s3">New Question</p>  
                    <div class="input-field col s12">
                      <textarea id="question-name" class="materialize-textarea"></textarea>
                      <label for="questionname">Enter Question Text</label>
                    </div>
                    <div class="input-field col s12">
                      <textarea id="Answer-1" class="materialize-textarea"></textarea>
                      <label for="Answer-1">Enter Answer 1</label>
                    </div>
                    <div class="input-field col s12">
                      <textarea id="Answer-2" class="materialize-textarea"></textarea>
                      <label for="Answer-2">Enter Answer 2</label>
                    </div>
                    <div class="input-field col s12">
                      <textarea id="Answer-3" class="materialize-textarea"></textarea>
                      <label for="Answer-3">Enter Answer 3</label>
                    </div>
                    <div class="input-field col s12">
                      <textarea id="Answer-4" class="materialize-textarea"></textarea>
                      <label for="Answer-4">Enter Answer 2</label>
                    </div>
                  </div>
                </form>
    <form action="#">
    <div class="container center-align">
        <h5>Choose Correct Answer</h5>
   
      <label>
        <input id="choice-1" name="group1" type="radio" checked />
        <span style="padding-right:2vw">Answer 1</span>
      </label>
      <label>
        <input id="choice-2" name="group1" type="radio" />
        <span style="padding-right:2vw">Answer 2</span>
      </label>
      <label>
        <input id="choice-3"  name="group1" type="radio"  />
        <span style="padding-right:2vw">Answer 3</span>
      </label>
      <label>
        <input id="choice-4" name="group1" type="radio"  />
        <span style="padding-right:2vw">Answer 4</span>
      </label>
    </div>
  </form>
  
              </div>
            </div>
            <div class="modal-footer" style="margin-bottom:4vh;">
              <a
                class="modal-action modal-close waves-effect waves-green btn-flat"
                @click="addQuestionBank()"
              >ADD</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<h1>Hello</h1>
  <h1>{{this.$route.params.id}}</h1>
</template>

<script>
import $ from "jquery";
import M from "materialize-css";
import firebase from 'firebase';
import "firebase/auth";
import db from '../main.js'

export default {
    
    mounted(){
    document.getElementById("modalkey").addEventListener('click', function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
    })
    firebase.auth().onAuthStateChanged((user) => {
      var uid = user.uid;
      this.myUID = uid;
    })
    }

}
</script>

<style>

</style>