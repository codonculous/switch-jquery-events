$(function() {

  $('.plate button').on('click',function() {
    var switchStatus = $('.plate button').attr('class');
    if (switchStatus === 'switch on') {
      $('.plate button').attr('class','switch off');
    } else {
      $('.plate button').attr('class','switch on');

    }


  });

});
