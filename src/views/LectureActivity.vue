<template>
  <div class="row" >
    <div class="col s12" >
      <div class="card my-color-card" style="height:10vh;">
        <div class="card-content col s12" >
          <a class="modal-trigger" data-target="modal1" id="modalkey" href="#modal1" >
            <i class="small material-icons my-color" style="display:inline-block;vertical-align:top;margin-top:0px">add_circle_outline</i>
            <h5 class="my-color" style="display:inline-block;padding-left:2vw;margin-top:0px">Create Question Bank</h5>
          </a>
          <div id="modal1" class="modal">
            <div class="modal-content">
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea id="question-bank-name" class="materialize-textarea"></textarea>
                      <label for="question-bank-name">Enter question bank name</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
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

  <div v-if="isLoaded">
   <div >
     <ul class="collection with-header">
       <li class="collection-header" style="color:#4e2d68"><h4>Your Question Banks</h4></li>
       <li class="collection-item" style="color:#4e2d68" v-for="(i, index) in questions" :key="i"><div>{{index}}{{i}}<a class="secondary-content"><router-link :to="'/addQuestion/' + index"><i class="material-icons">send</i></router-link></a></div></li>
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
// class="modal-trigger" data-target="modal1"

export default {
  name: "lecturerAcitivity",
  components: {},
  data() {
    return {
      myUID: null,
      questions: [],
      question: null,
      isLoaded: false,
    }
  },
  methods: {
    addQuestionBank: function () {
      var bankName = document.getElementById("question-bank-name").value;
      console.log(this.myUID);
      const data = {
      }
      db.collection('users').doc(this.myUID).collection('Bank').doc(bankName).set(data)
    },
  },
   mounted() {
    document.getElementById("modalkey").addEventListener('click', function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
    })
    firebase.auth().onAuthStateChanged((user) => {
      var uid = user.uid;
      this.myUID = uid;
    })
    // var refer = []
      if(firebase.auth().currentUser){
      const data = db.collection('users').doc(firebase.auth().currentUser.uid).collection('Bank').get().then((snapshot) => {
      snapshot.forEach(doc => {
        // refer.push(doc.id)
        this.questions.push(doc.id)
        console.log(doc.id)
      }) 
    })
    // this.questions = refer;
    }
    console.log(this.questions)
    
    this.isLoaded = true;
  },
  
};
</script>

<style>
.my-color {
  color: #4e2d68;
}
.my-color-card {
  background-color: #ede7f0;
}
.card-content {
  text-align:center;
}
.card {
  margin: 1vh 1vw;
  border-radius: 12px;
}
</style>