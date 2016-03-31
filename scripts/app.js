(function(){
    $(document).ready(function(){

      var MobileApp = {};

      MobileApp.profileApp = function(){
        $('.btn-text').on('click', function(){
          $('.container').toggleClass('touched');
        })
      }
      MobileApp.chatSession = function(){
        var messagesArray = ['It has survived not only five centuries, but also the leap into electronic.', 'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'It is a long established fact that a reader will be distracted by the readable content.'];
        var randomMessage = Math.floor((Math.random() * 3));
        var message;


        if(sessionStorage.getItem("stored_messages_receiver") !== null){
          message = JSON.parse(sessionStorage.getItem("stored_messages_receiver"))
          $('.text-message').append(message)
        }else{
          message = messagesArray[randomMessage];
          window.sessionStorage.setItem('stored_messages_receiver', JSON.stringify(message))
          $('.text-message').append(message)
        }

        var archiveMessages;
        var newMessage;

        //Check if there session stored;
        sessionStorage.getItem("stored_messages") !== null ? archiveMessages = JSON.parse(sessionStorage.getItem("stored_messages")) : archiveMessages=[];

        //if session storage nt null, populate chat page
        if(archiveMessages !== null){
          $.each(archiveMessages, function(index, value){
              var template = '<div class="sender-chat row">'+
              '<div class="profile-pic column column-2"><a ng-href="index.html">&nbsp;</a></div>'+
              '<div class="text-message column column-9  col-span-1-right"><span class="pin">&nbsp;</span>'+value+'</div></div>';
              $('.sender-box').append(template)
          })
        }

        $('.message-box').on('submit', function(){
            newMessage = $('.newmessage').val();
            archiveMessages.push(newMessage);
            window.sessionStorage.setItem('stored_messages', JSON.stringify(archiveMessages))
        })
      }
      MobileApp.profileApp();
      MobileApp.chatSession();


    })
})();
