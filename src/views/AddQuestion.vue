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
                      <textarea id="question-text" class="materialize-textarea"></textarea>
                      <label for="question-text">Enter Question Text</label>
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
                @click="addQuestion()"
              >ADD</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div v-if="isLoaded">
   <div >
     <ul class="collection with-header">
       <li class="collection-header" style="color:#4e2d68"><h4>{{this.banks[this.$route.params.id]}}</h4></li>
       <li class="collection-item" style="color:#4e2d68" v-for="i in questions" :key="i.text">{{i.text}}</li>
     </ul>
       
   </div>
</div>

<div v-else>
    Loading...
</div>

</template>

<script>
import $ from "jquery";
import M from "materialize-css";
import firebase from 'firebase';
import "firebase/auth";
import db from '../main.js'
import router from '../router';

export default {
    data() {
    return {
      myUID: null,
      questions: [],
      banks:[],
      question: null,
      isLoaded: false,
    }
  },
    methods:{
     addQuestion: function () {
      var answerNum ;   
      var bankName = this.banks[this.$route.params.id];
      var qText = document.getElementById("question-text").value;
      var ans1 = document.getElementById("Answer-1").value;
      var ans2 = document.getElementById("Answer-2").value;
      var ans3 = document.getElementById("Answer-3").value;
      var ans4 = document.getElementById("Answer-4").value;
      var checkbox1 = document.getElementById("choice-1").checked;
      var checkbox2 = document.getElementById("choice-2").checked;
      var checkbox3 = document.getElementById("choice-3").checked;
      var checkbox4 = document.getElementById("choice-4").checked;
      if (checkbox1){
          answerNum = 1;  
      }else if(checkbox2){
          answerNum = 2
      }else if(checkbox3){
          answerNum = 3
      }else{
          answerNum = 4
      }
      var id = "id" + Math.random().toString(16).slice(2)

      console.log(this.myUID);
      const data = {
          text: qText,
          an1: ans1,
          an2: ans2,
          an3: ans3,
          an4: ans4,
          cAns: answerNum 
      }
      db.collection('users').doc(this.myUID).collection('Bank').doc(bankName).collection('Questions').doc(qText).set(data)
      
      this.$router.push({
          name: "addQuestion",
          params: {
              id: this.$route.params.id
          }
      })
    },
    
    
    
    },
    
    mounted(){
    document.getElementById("modalkey").addEventListener('click', function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
    })
    firebase.auth().onAuthStateChanged((user) => {
      var uid = user.uid;
      this.myUID = uid;
    })
 if(firebase.auth().currentUser){
      const data = db.collection('users').doc(firebase.auth().currentUser.uid).collection('Bank').get().then((snapshot) => {
      snapshot.forEach(doc => {
        // refer.push(doc.id)
        this.banks.push(doc.id)
      }) 
    })
    
    // this.questions = refer;
    }
    },
    created(){
        if(firebase.auth().currentUser){
      const data = db.collection('users').doc(firebase.auth().currentUser.uid).collection('Bank').doc(this.banks[this.$route.params.id]).collection('Questions').get().then((snapshot) => {
      snapshot.forEach(doc => {
        // refer.push(doc.id)
        this.questions.push(doc.id)
        console.log(doc.id)
      }) 
    })
    this.isLoaded = true;
    }
    
    console.log(this.questions)
    }

}
</script>

<style>

</style>