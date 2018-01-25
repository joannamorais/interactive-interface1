$(document).ready(function() {

  var count = 0;

// Question fades  in slow

$('.question').fadeIn('slow');

$('.bat').click(function() {

$('.question').fadeOut('fast');

count++;

if (count >= 1) {
$('.ls_num').fadeIn('fast');
}

if (count >= 2) {
  $('.ls_num').fadeOut('fast');
  $('.l_num').fadeIn('fast');
  //$('.original').hide();
  //$('.medium').show();
}

if (count >= 3) {
  $('.l_num').fadeOut('fast');
  $('.m_num').fadeIn('fast');
  $('.original').hide();
  $('.medium').show();
}

 if (count >= 4) {

  $('.m_num').fadeOut('fast');
  $('.f_num').fadeIn('fast');
  $('.medium').hide();
  $('.fat').show();
  $('.answer').fadeIn('fast');
   setTimeout(function() {
  			parent.closeIframe();
  		}, 5000);
}

});

});

// ADD A CODE SET TIMER OUT CODE AT THE END OF ALL INTERACTIONS
 //REFER MAIN.JS

// CHECK ALL INTERACTIONS FONT SIZE (CONSISTENCY)

// ADD ANY OTHER COLOR FOR FINAL ANSWERS / OR ANIMATIONS
