$(function() {

  $('.plate button').on('click',function() {
    var switchStatus = $('.plate button').attr('class');
    if (switchStatus === 'switch on') {
      $('.plate button').attr('class','switch off');
      $('body').attr('class','dark');
      $('h1.status').text('Hey, who turned off the lights?');
    } else {
      $('.plate button').attr('class','switch on');
      $('body').attr('class','light');
      $('h1.status').text("It's so bright in here!");
    }


  });

});
