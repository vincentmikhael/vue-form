<template>

  <div class="home pt-3">
    
    <div class="forms mx-auto p-3" action="">
      <label for="" class="label-form">Sender</label>
  <div class="row">
    <div class="col">
      <input autofocus type="text" v-model="sender_name" class="form-control input" placeholder="Sender Name">
      {{sender_name}}
    </div>
    <div class="col">
      <input type="text" v-model="sender_email" class="form-control input" placeholder="Sender Email">
    </div>
  </div>

  <label for="" class="label-form mt-3">Recipient</label>
  <div class="row">
    <div class="col">
      <input type="text" v-model="recipient_name" class="form-control input" placeholder="Recipient Name">
    </div>
    <div class="col">
      <input type="text" v-model="recipient_email" class="form-control input" placeholder="Recipient Email">
    </div>
  </div>

  <label for="" class="label-form mt-3">Message</label>
  <div class="row">
  <div class="col">
    <textarea v-model="message" class="form-control input" placeholder="Write message"></textarea>
  </div>
  </div>

  <div class="row mt-4">
    <div class="col-md-5">
      <button v-on:click="submitForm" class="btn button-submit w-100">SUBMIT</button>
    </div>
  </div>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: function(){
    return {
      sender_name: '',
      sender_email: '',
      recipient_email: '',
      recipient_name: '',
      message: '',
    }
  },
  methods: {
    submitForm(){
      if(!this.sender_name || !this.sender_email || !this.recipient_email || !this.recipient_name || !this.message){
        Vue.$toast.success('⚠ Data error, you shall not pass',{
          type: 'error'
        })
      }else{
        if(!/\S+@\S+\.\S+/.test(this.sender_email) || !/\S+@\S+\.\S+/.test(this.recipient_email)){
          Vue.$toast.success('⚠ Email must be valid',{
          type: 'error'
        })
        }else{
          Vue.$toast.success('✅ Data confirmed, you may proceed',{
          type: 'success'
        })
        }
        
      }
    }
  }
}
</script>


<style lang="scss">
.home{
  background-color: #323234;
  height: 73.3vh;
}
.input{
  color: white !important;
  background-color: #3D3B44 !important;
  box-sizing: border-box;
  border: 2px solid #666175 !important;
  padding: 20px 10px !important;
  border-radius: 6px;
}
.input::placeholder{
  color: #666175 !important;
  font-size: bold;
}
.input:focus::placeholder{
  color: white !important;
}
.forms{
  background-color: #4b4952;
  color: white;
  width: 50%;
}
.label-form{
  font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 29px;
/* identical to box height */

display: flex;
align-items: center;

/* Yellow 4 */

color: #FFCA63;
}
.button-submit{
  background-color: #7A5DD1;
  color: white;
  font-weight: bold;
}
.button-submit:active{
  background-color: #5B41A8;
  color: white;
}
.button-submit:hover{
  color: white !important;
}
@media only screen and (max-width: 900px) {
  .forms {
    width: 90%;
  }
}
</style>
