
    $(document).ready(function(){
      MobileApp.init();
    });

      var MobileApp = {};

      MobileApp.profileApp = function(){
        //add class to container and button on add to friend btn
        $('.btn-text').on('click', function(){
          $('.container').toggleClass('touched');
        })
      }

      MobileApp.chatSession = function(){
        var randomMessage = Math.floor((Math.random() * 3)),
            message,
            archiveMessages,
            newMessage,
            textMessage = $('.text-message'),
            onlineChat = $('.online-chat');

        //random entries from Sophie + online status
        var messagesObject = {
          "Messages": ["It has survived not only five centuries, but also the leap into electronic.","Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","It is a long established fact that a reader will be distracted by the readable content."],
          "online": true
        }

        //check, generate and store online atatus and random text from Sophie
        if(sessionStorage.getItem("stored_messages_receiver") !== null){
          message = JSON.parse(sessionStorage.getItem("stored_messages_receiver"))
          //check if Sophie is online
          message.online === true ? $(onlineChat).addClass('online') : $(onlineChat).removeClass('online');
          $(textMessage).append(message.message)
        }else{
          message = messagesObject.Messages[randomMessage];
          window.sessionStorage.setItem('stored_messages_receiver', JSON.stringify({"message": message, "online": messagesObject.online}))
          $(textMessage).append(message)
        }



        //create object with template for sender
        var NewMessage = function(message){
          this.message = message;
          this.template = '<div class="sender-chat row">'+
          '<div class="profile-pic column column-2"><a href="index.html">&nbsp;</a></div>'+
          '<div class="text-message column column-9  col-span-1-right"><span class="pin">&nbsp;</span>'+this.message+'</div></div>';
        }

        //Check if there session stored;
        sessionStorage.getItem("stored_messages") !== null ? archiveMessages = JSON.parse(sessionStorage.getItem("stored_messages")) : archiveMessages=[];

        //if session storage not null, populate chat page
        if(archiveMessages !== null){
          $.each(archiveMessages, function(index, value){
              var newmessage = new NewMessage(value);
              $('.sender-box').append(newmessage.template);
          })
        }

        //user message input
        $('.message-box').on('submit', function(){
            newMessage = $('.newmessage').val();
            if(!$('.newmessage').val()){
              return false;
            }else{
              archiveMessages.push(newMessage);
              //add message to session storage
              window.sessionStorage.setItem('stored_messages', JSON.stringify(archiveMessages))
            }

        })
      }

      MobileApp.init = function(){
        MobileApp.profileApp();
        MobileApp.chatSession();
      }
