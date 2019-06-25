<template>
    <div class="messages-container">
        <vue-headful
            title="Messages | TRAV CP"
            description="Description from TRAV CP"
        />
        <Navbar/>
        <div class="container-fluid">
            <!-- <p class="page-header text-center">
                <span class="page-header-text">
                    Messages
                </span>
            </p> -->
            
            <div class="row">
                <div class="col-12">
                    <div class="message-panel-container">
                        <div class="contacts-panel">
                            <input type="search" class="contacts-search-control" placeholder="Search...">
                        </div>
                        <div class="messages-panel">
                            <ul class="messages-list">
                                
                                <!-- <li class="left-message">Fun eni to ba gbon</li>
                                <li class="right-message">Fun eni to ba gbon</li> -->
                            </ul>
                        </div>
                        <div class="contact-info-panel">
                            <img src="/img/profile_1.png" alt="" srcset="">
                            <p class="contact-name">
                                KIA Restaurant
                            </p>
                            <p class="contact-location">
                                <img src="/img/icons/map-marker-alt-solid.svg" alt="Location marker" style="width:10px;"> Lagos, Nigeria
                            </p>
                            <p class="contact-description">
                                Take a tour with us to get to eat some of the nicest food to be experienced
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
// import SendBird from 'sendbird'

// let sb = new SendBird({appId: 'EDBA8B35-D6D9-42C2-B2C7-F6E0E711D072'});

export default {
    name: "Message",
    beforeRouteEnter(to, from, next) {
    let checkToken = JSON.parse(localStorage.getItem('auth'))
          if(checkToken.access_token) {
              return next()
          } else {
            // this.$noty.error("Sign in to access!")
            return next({ path: '/signin' })
          }
          next();
      },
      data(){
        return {
            currentUser: [],
            allUsers: [],
            userChannels: [],
            userToChat: [],
            message: null,
            channel: {}
        }
      },
      methods: {
        // logout(){
        //     sb.disconnect(function(){
        //         // A current user is discconected from SendBird server.
        //     });
        // },
        // chattingUser(userId){
        //     console.log(typeof userId)
        //     let _this = this
        //     let applicationUserListQuery1 = sb.createApplicationUserListQuery();
        //     applicationUserListQuery1.userIdsFilter = [userId];
        //     applicationUserListQuery1.next(function(user, error) {
        //         if (error) {
        //             return;
        //         }
        //         _this.createUserChannel(_this.currentUser.userId, userId)
                
        //         console.log(user)
        //     });
        // },
        // openChannel(channelUrl) {
        //         console.log('Hi i am here')
        //     sb.OpenChannel.getChannel(channelUrl, (channel, error) => {
        //         console.log(channel)
        //         if (error) reject(error)
        //         channel.exit()
        //       })
        // },
        // createUserChannel(user1Id, user2Id){
        //     var userIds = [user1Id, user2Id];
        //     var params = new sb.GroupChannelParams();
        //         params.isPublic = false;
        //         params.isEphemeral = false;
        //         params.isDistinct = false;
        //         params.addUserIds([user1Id, user2Id]);
        //         params.operatorIds = [user1Id];   // or .operators(Array<User>)
        //         params.name = user1Id+ " "+ user2Id; 

        //         sb.GroupChannel.createChannel(params, function(groupChannel, error) {
        //             if (error) {
        //                 return;
        //             }
                    
        //             console.log(groupChannel);
        //         });
        // },
        // RetreiveChannels(){
        //     var channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
        //     channelListQuery.includeEmpty = true;
        //     channelListQuery.limit = 20;     

        //     if (channelListQuery.hasNext) {
        //         channelListQuery.next(function(channelList, error) {
        //             if (error) {
        //                 return;
        //             }

        //             console.log(channelList);
        //         });
        //     }
        // },
        // getUserChannels(){
        //     var channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
        //     channelListQuery.includeEmpty = true;
        //     channelListQuery.limit = 20;    // The value of pagination limit could be set up to 100.
        //     let _this = this
        //     if (channelListQuery.hasNext) {
        //         channelListQuery.next(function(channelList, error) {
        //             if (error) {
        //                 return;
        //             }
        //             console.log(channelList);
        //             _this.userChannels = channelList

        //             for(let i = 0; i < channelList.length; i++) {
        //                 // console.log(channelList[i])
        //                 for(let y =0; i < channelList[i].members.length; y++)
        //                 if(channelList[i].members[y].userId != _this.currentUser.userId){
        //                     console.log(channelList[i].members[y])
        //                     _this.userToChat.push(channelList[i].members[y])
        //                 }
        //             }
        //         });
        //     }
        // },
        // messageSubmit(){
        //     const params = new sb.UserMessageParams();

        //     params.message = this.message;
        //     params.customType = CUSTOM_TYPE;
        //     params.data = DATA;
        //     params.mentionType = 'users';                       // Either 'users' or 'channel'
        //     params.mentionedUserIds = [];        // or mentionedUsers = Array<User>; 
        //     params.metaArrayKeys = ['key1', 'key2'];
        //     params.translationTargetLanguages = ['fe', 'de'];   // French and German
        //     params.pushNotificationDeliveryOption = 'default';  // Either 'default' or 'suppress' 

        //     groupChannel.sendUserMessage(params, function(message, error) {
        //         if (error) {
        //             return;
        //         }

        //         console.log(message);
        //     });
        // }
        // allUsers(){
        //     // In case of retrieving all users
        //     let sb = SendBird.getInstance();
        //     let applicationUserListQuery = sb.createApplicationUserListQuery();
        //     applicationUserListQuery.next(function(users, error) {
        //         if (error) {
        //             console.log(error)
        //             return;
        //         }
        //     });
        // },
      },
      created(){
        // let user_name = this.$store.state.auth.user.name
        // let _this = this
        // sb.connect(this.$store.state.auth.user.id, this.$store.state.auth.access_token, function(user, error) {
        //     if (error) {
        //         return;
        //         }
        //     sb.updateCurrentUserInfo(user_name, function(response, error) {
        //         if (error) {
        //             return;
        //         }   
        //         console.log(response)
        //     });
        //     // _this.allUsers()
        //     _this.currentUser = user
        //     console.log(user)
        // });
        // let allUsers = SendBird.getInstance();
        // let applicationUserListQuery = allUsers.createApplicationUserListQuery();
        // applicationUserListQuery.next(function(users, error) {
        //     if (error) {
        //         return;
        //     }
        //     _this.allUsers = users
        //     console.log(users)
        //     console.log(error)
        // });
        this.getUserChannels()
        // RetreiveChannels()
        // var userId = this.$store.state.auth.user.id.trim();
        // var nickname = this.$store.state.auth.user.name.trim();

        // window.location.href = '/dashboard/messages?userid=' + encodeURIComponent(userId) + '&nickname=' + encodeURIComponent(nickname);
      },
      components: {
        Navbar
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
