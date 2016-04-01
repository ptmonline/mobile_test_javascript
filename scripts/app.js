
    $(document).ready(function(){
      MobileApp.init();
    });

      var MobileApp = {};

      MobileApp.profileApp = function(){
        $('.btn-text').on('click', function(){
          $('.container').toggleClass('touched');
        })
      }

      MobileApp.chatSession = function(){
        var messagesObject = {
          "Messages": ["It has survived not only five centuries, but also the leap into electronic.","Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","It is a long established fact that a reader will be distracted by the readable content."],
          "online": true
        }
        var randomMessage = Math.floor((Math.random() * 3));
        var message;

        //store random text from second user
        if(sessionStorage.getItem("stored_messages_receiver") !== null){
          message = JSON.parse(sessionStorage.getItem("stored_messages_receiver"))
          message.online === true ? $('.online-chat').addClass('online') : $('.online-chat').removeClass('online');
          $('.text-message').append(message.message)
        }else{
          message = messagesObject.Messages[randomMessage];
          window.sessionStorage.setItem('stored_messages_receiver', JSON.stringify({"message": message, "online": messagesObject.online}))
          $('.text-message').append(message)
        }

        var archiveMessages;
        var newMessage;

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
              window.sessionStorage.setItem('stored_messages', JSON.stringify(archiveMessages))
            }

        })
      }
      MobileApp.init = function(){
        MobileApp.profileApp();
        MobileApp.chatSession();
      }
