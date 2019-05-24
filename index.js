function showInfo(){
    $('.content button').click(function(){
        console.log('i hear you!');
        $('.content').append(' <p>There is more information to come if you click on the button again!</p>');
    });
  }
    
$(function(){
    showInfo(); 
});
  

