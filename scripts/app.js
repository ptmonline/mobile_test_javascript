(function(){
    $(document).ready(function(){
      console.log('ready')
      var messagesArray = ['It has survived not only five centuries, but also the leap into electronic.', 'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'It is a long established fact that a reader will be distracted by the readable content.'];
      var randomMessage = Math.floor((Math.random() * 3));
      var message = messagesArray[randomMessage];
      console.log(message)
      var archiveMessages;
      //Check if there session stored;
      sessionStorage.getItem("stored_messages") !== null ? archiveMessages = JSON.parse(sessionStorage.getItem("stored_messages")) : archiveMessages=[];
      if(archiveMessages !== null){
        // for(message in archiveMessages){
        //   var template = '<div class="sender-chat row">'+
        //   '<div class="profile-pic column column-2"><a ng-href="#/">&nbsp;</a></div>'+
        //   '<div class="text-message column column-9  col-span-1-right"><span class="pin">&nbsp;</span>'+archiveMessages[message]+'</div></div>';
        //   $('.sender-box').append(template)
        // }
        $.each(archiveMessages, function(index, value){
            var template = '<div class="sender-chat row">'+
            '<div class="profile-pic column column-2"><a ng-href="#/">&nbsp;</a></div>'+
            '<div class="text-message column column-9  col-span-1-right"><span class="pin">&nbsp;</span>'+value+'</div></div>';
            $('.sender-box').append(template)
        })
      }
      var newMessage;
      $('.message-box').on('submit', function(){
          newMessage = $('.newmessage').val();
          archiveMessages.push(newMessage);
          window.sessionStorage.setItem('stored_messages', JSON.stringify(archiveMessages))

      })


    })
})();
