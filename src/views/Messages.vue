<template>
    <div class="messages-container">
        <vue-headful
            title="Messages | TRAV CP"
            description="Description from TRAV CP"
        />
        <Navbar/>
        <div class="container-fluid">
            
            <div class="row">
                <div class="col-12">
                    <div class="message-panel-container">
                        <div class="contacts-panel">
                            <input type="search" class="contacts-search-control" placeholder="Search..." v-model="search">
                            <div class="contact-list">
                                <ul class="">
                                    <li v-for="conversation in filteredConversations" :key="conversation.id" @click="changeConversation(conversation)">
                                        <a href="#" >
                                            <div class="row">
                                                <div class="col-8">
                                                    <b v-if="currentReceiver.name == conversation.name">{{ conversation.name }}</b>
                                                    <span v-else>{{ conversation.name }}</span>
                                                </div>
                                                <div class="col-4">
                                                    <span class="badge badge-danger badge-pill">{{ conversation.unread_messages_count }}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div class="messages-panel">
                            <ul class="messages-list">
                                <li v-for="message in messages" :key="message.id" :class="[{'left-list-item left-message': message.user_id != $store.state.auth.user.id}, {'right-list-item right-message' : message.user_id == $store.state.auth.user.id}]">
                                    <div class="text">{{ message.message }} </div>
                                    <small class="float-right text-small message-time">{{ moment(message.created_at).calendar() }}</small>
                                </li>
                                <div v-if="messages.length < 1" class="text-center">
                                    <div v-if="loading">
                                        <Circle9/>
                                    </div>
                                    <div v-else>
                                        No conversation yet. Start one now
                                    </div>
                                    
                                </div>
                                <!-- <li class="left-message">Fun eni to ba gbon</li>
                                <li class="right-message">Fun eni to ba gbon</li> -->
                                
                            </ul>
                            <div class="typing-area">
                                <form @submit.prevent="sendMessage">
                                    <div class="input-group">
                                        <input type="text"  class="form-control" placeholder="Type a message..." aria-label="Type a message" aria-describedby="type message field" v-model="message">
                                        <div class="input-group-append">
                                            <button class="btn btn-danger" type="submit">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="contact-info-panel" v-if="currentReceiver != undefined">
                            <img :src="currentReceiver.avatar" :alt="''">
                            <p class="contact-name">
                                {{ currentReceiver.name }}
                            </p>
                            <p class="contact-location">
                                <img src="/img/icons/map-marker-alt-solid.svg" alt="Location marker" style="width:10px;"> {{ currentReceiver.country }}
                            </p>
                            <p class="contact-description">
                                {{ currentReceiver.bio }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import moment from 'moment'
import axios from 'axios';
import { Circle9 } from 'vue-loading-spinner'
export default {
    name: "Message",
      data(){
        return {
            message: "",
            messages: [
            ],
            search: "",
            currentReceiver: null,
            conversations: [
            ],
            moment: moment,
            requestHeaders: {
                headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
            },
            loading: false
        }
      },
      props: ["recipient"], //integer id of the recipient
      methods: {
        sendMessage(){
            let message = this.message;
            if (message != "") {
                let $msgs = $(".messages-list");
                $msgs.animate({ scrollTop: $msgs.prop("scrollHeight") }, 400);
                
                axios.post(`${this.$store.state.API_BASE}/messages`, {
                    recipient: this.currentReceiver.id,
                    message: message,
                    // type: this.messageType
                }, this.requestHeaders)
                .then(res => {
                    this.messages.push(res.data.data);
                    this.message = "";
                    $msgs.animate({ scrollTop: $msgs.prop("scrollHeight") }, 400);
                }).catch(err => {
                    console.log("We encountered an error sending that message");
                });
            }
            else{
                console.log("No message");
            }
        },
        fetchMessages(recipient) {
            this.loading = true;
            // setInterval(() => {
                axios.get(`${this.$store.state.API_BASE}/messages?recipient=${recipient}`, this.requestHeaders)
                    .then(res => {
                        this.loading = false;
                    let messages = res.data.data;
                    messages.forEach(message => {
                        this.messages.push(message);
                    });
                    let $msgs = $("ul.messages-list");
                    
                    $msgs.animate({ scrollTop: $msgs.prop("scrollHeight") }, 500);
                    }).catch(err => {
                        this.loading = false;
                    });
            // }, 1000)

            },
        changeConversation(receiver) {
            
            if (receiver.id == this.currentReceiver.id) {
                // this.fetchMessages(receiver.id);
            } else {
                this.messages = [];
                this.currentReceiver = receiver;
                // setInterval(() => { 
                    this.fetchMessages(this.currentReceiver.id);
                // }, 1000)
            }
        },
        fetchConversations() {
            // setInterval(() => {
                axios.get(`${this.$store.state.API_BASE}/conversations`, this.requestHeaders).then(res => {
                    let conversators = res.data.data;
                    this.conversations = res.data.data;
                    if (conversators.length > 0) {
                        if (this.recipient == null || this.recipient.undefined){
                            this.currentReceiver = conversators[0];
                            this.fetchMessages(this.currentReceiver.id);
                        }
                        
                    }
                });
            // }, 1000)
        },
        fetchLastMessages(recipient){
            // setInterval(() => {
                axios.get(`${this.$store.state.API_BASE}/last-messages?recipient=${recipient}`, this.requestHeaders).then(res => {
                    let messages = res.data.data;
                    if (messages.length > 0){

                        new Audio("/mp3/slow-spring-board.mp3").play();
                        messages.forEach(message => {
                            this.messages.push(message);
                        });
                        let $msgs = $("ul.messages-list");
                        
                        $msgs.animate({ scrollTop: $msgs.prop("scrollHeight") }, 500);
                    }
                    else{
                        
                    }
                    
                }).catch(err => {
                    console.log(err);
                });
            // }, 1000)
        },
        fetchUser(id){
            return axios.get(`${this.$store.state.API_BASE}/users/${id}`).then(res => {
                this.currentReceiver = res.data.data;
            }).catch(err => {
                console.log("Unable to fetch user");
            })
        }
      },
      computed: {
        filteredConversations(){
            if (this.conversations.length > 0){
                return this.conversations.filter(convo => {
                    return convo.name.toLowerCase().includes(this.search);
                });
            }
            
        }
    },
    created(){
        if (this.recipient == null || this.recipient == undefined) {
            
            
        } else {
            // this.conversations[0] = this.recipient;
            this.fetchUser(this.recipient).then(res => {
                this.fetchMessages(this.currentReceiver.id);
            })
            
        }
        this.fetchConversations();
        setInterval(() => {
            if (this.currentReceiver != undefined){
                this.fetchLastMessages(this.currentReceiver.id);
            }
            
        }, 3000);
    },
    components: {
        Navbar,
        Circle9
    }
}
</script>

<style scoped>
    nav.container.navbar.navbar-expand-lg.navbar-light.travvappNavbar {
        margin-top: -10px;
    }
    .messages-container {
        /* margin-top:95px;
        margin-bottom: 50px; */
        /*margin-top:70px;*/
        --pink-text-color: #D3187F;
        --black-text-color: #333333;
        --grey-text-color: #555555;
        --default-border-color: #9B9B9B;
        /* height:100vh; */
        
    }

    .page-header{
        margin-bottom: 30px;
    }
    span.page-header-text{
        font-weight:bold;
        font-size:28px;
        color: var(--pink-text-color);
        padding-bottom: 8px;
        border-bottom: 1px solid var(--default-border-color);
    }

    .message-panel-container{
        display:flex;
        /* border: 1px solid var(--default-border-color); */
        flex-direction:row;
        /* height: 100vh; */
        margin-top:70px;
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        top:0;
        /*margin-right:89px;*/
        /*margin-left: 89px;*/
    }
    .contacts-panel,.messages-panel{
        border-right: 1px solid whitesmoke;
    }
    .contacts-panel,.contact-info-panel{
        width: 25%;
    }
    .messages-panel{
        width:50%;
        position:relative;
    }
    .contacts-panel .badge-danger{
        background: var(--pink-text-color);
        border-radius:50%;
    }
    .messages-panel .typing-area{
        background: #f1eded;
        position:absolute;
        bottom:0;
        padding-top:7px;
        padding-bottom:7px;
        padding-left:12px;
        padding-right:12px;
        width: 100%;
    }
    .contacts-panel{
        padding-top:15px;
        padding-left:15px;
        padding-bottom:15px;
        overflow-y: scroll;
        overflow-x:hidden;

    }
    .contacts-panel:hover{
        /* overflow-y: scroll; */
    }
    input.contacts-search-control{
        border: 1px solid rgb(146, 144, 144);
        width: 90%;
        border-radius: 10px;
        padding:5px;
    }
    .contact-list{
        margin-top:15px;
    }
    .contact-list li{
        margin-top:10px;
        margin-bottom:10px;
        border-bottom: 1px solid rgb(245, 231, 231);
        position: relative;
        padding-bottom:10px;
    }
    .contact-body{
        display:inline;
        position:relative;
        padding-bottom: 20px;
        
    }
    
    p.contact-description{
        padding:20px;
    }
    .contact-img{
        
        border-radius:50%;
        width:100%;
        margin-right: 20px;
        margin-bottom: 5px;
    }

    .contact-info-panel{
        background: var(--pink-text-color);
        /* opacity: 0.5; */
        text-align: center;
        padding-top:5%;
        color:white;
    }
    .contact-info-panel img{
        border-radius: 50%;
        background: none;
    }
    .messages-container .btn.btn-danger{
        background: var(--pink-text-color);
        border-top-left-radius: unset;
        border-bottom-left-radius: unset;
    }
    .messages-container .messages-panel .typing-area input{
        border-top-left-radius: .29rem;
        border-bottom-left-radius: .29rem;
        border-bottom:none;
        
    }
    .messages-list{
        height: 100%;
        overflow-y: scroll;
        padding-bottom:60px;
        /* margin-bottom:60px; */

    }
    ul.messages-list li{
        clear:both;
        transition: all 0.5s linear;
        overflow: hidden;
    }
    .left-list-item,.right-list-item{
        display: block;
    }
    .left-message,.right-message{
        padding:9px;
        /* border-radius:10px; */
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-left:15px;
        margin-right:15px;
    }
    
    .left-message{
        background: #E9ECF1;
        margin-top:5px;
        margin-bottom:5px;
        max-width: 60%;
        color:black;
        float:left;
        border-bottom-right-radius: 10px;
    }
    .right-message{
        /* position:absolute; */
        background: var(--pink-text-color);
        margin-top:5px;
        margin-bottom:5px;
        max-width: 60%;
        float:right;
        color:white;
        border-bottom-left-radius: 10px;
    }
    .left-message+li.left-message{
        border-top-left-radius: unset;
        margin-top:unset;
    }
    .right-message+li.right-message{
        border-top-right-radius: unset;
        margin-top:unset;
    }

</style>
