<template>
  <div class="modal" tabindex="-1" role="dialog" id="affiliate-modal" v-if="auth">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Affiliate Link</h5>
        </div>
        <div class="modal-content">
          <div class="form-inner" style="padding:15px;">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <textarea type="text" v-model="message" class="form-control form-control-lg"></textarea>
                                <button type="button"
                                  v-clipboard:copy="message"
                                  v-clipboard:success="onCopy"
                                  v-clipboard:error="onError">Copy!</button>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import FormErrors from "@/components/FormErrors.vue";
import axios from "axios";
export default {
  name: "AffiliateMdoalBox",
  beforeRouteEnter(to, from, next) {
    let checkToken = JSON.parse(localStorage.getItem("auth"));
    if (checkToken.access_token) {
      return next();
    } else {
      // this.$noty.error("Sign in to access!")
      return next({ path: "/signin" });
    }
    next();
  },
  data() {
    return {
      business_name: "",
      about_merchant: "",
      email: "",
      validationErrors: "",
      agree: false,
      agreement_error: false,
      selectedFile: [],
      files: null,
      message: 'http://travvapp.herokuapp.com/signup?ref'
    };
  },
  methods: {
      onCopy: function (e) {
        this.$noty.success(`You just copied ${e.text}`)
        // alert('You just copied: ' + e.text)
      },
      onError: function (e) {
        alert('Failed to copy texts')
      },
  },
  computed: {
    ...mapState(["loading"]),
    ...mapState(['auth'])
  },
  created(){
    if(this.auth){
         this.message = `http://travvapp.herokuapp.com/signup?ref=${this.auth.user.referral_token}`
       }
  },
  components: {
    FormErrors
  }
};
</script>
<style scoped>
.modal {
  border-radius: 20px;
}
input[type="checkbox"]{ display:none; }

label div{
  width:20px;
  height:20px;
  display:inline-block;
  border:2px solid #fff;
  text-align:center;
  line-height:15px;
  margin-right:6px; 
  border-radius:3px;
  cursor:pointer; 
  background:#F81894;
  border: 3px solid #F81894;
}

label i{ font-size:16px;  opacity:0; color: #FFF; }
label:hover div{ border: 3px solid #F81894; background: #FFF; color: #F81894; }
input:checked+label i{ opacity:1; }
input:checked+label div{ background:#F81894; }

.file-upload {
  position: relative;
}
.upload-label {
  position: relative;
}
#filename,
#upload-shield {
  border: none;
  outline: none;
  color: #252a46;
  cursor: pointer;
  width: 100%;
  max-height: 50px;
  min-height: 50px;
}
#upload-shield {
  z-index: 100;
  opacity: 0;
}
#upload-shield::-webkit-file-upload-button {
  display: none;
}
#filename {
  position: absolute;
  padding-right: 40px;
  font-size: 16px;
  border-radius: 0;
  word-break: break-word;
  background: #f5f5f6 url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/icon-upload-file2.svg") no-repeat;
  background-position: right 9px center;
  background-size: 22px;
}

</style>
