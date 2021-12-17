<template>
  <div class="row">
    <div class="col s12 m4">
      <div class="card my-color-card">
        <div class="card-content my-color">
          <a class="modal-trigger" data-target="modal1" id="modalkey" href="#modal1">
            <i class="large material-icons my-color">add_circle_outline</i>
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
          <h4>Create Question Bank</h4>
        </div>
      </div>
    </div>
  </div>
  <p v-for="question in questions" :key="question">{{question}}</p>
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
      question: null
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
  },
  created() {
    var random = []
    const data = db.collection('users').doc(firebase.auth().currentUser.uid).collection('Bank').get().then(function(snapshot){
      snapshot.forEach(doc => {
        random.push(doc.id)
        console.log(doc.id)
      })
    })
    this.questions = random
  }
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
  text-align: center !important;
}
.card {
  margin: 1vh 1vw;
  border-radius: 12px;
}
</style>