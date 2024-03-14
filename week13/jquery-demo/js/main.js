$(document).ready(function() {

    // run function on initial page load

    $('.square').click(function() {
      $('.square').toggleClass('square-circle');
      $('.circle').toggleClass('hidden');
      $('.square').toggleClass('grow');
      // $('body').css('background-color', 'black');
    });
    // run function on resize of the window
    $(window).resize(function() {
      purple();
    });
    // run function on scroll of the window
    $(window).scroll(function() {
      noPurple();
    });
});

function purple() {
  $('.square').addClass('purple');
}

function noPurple() {
  $('.square').removeClass('purple');
}
