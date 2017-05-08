//Contact Form

$('#submit').click(function(){

$.post("assets/php/send.php", $(".contact-form").serialize(),  function(response) {
 $('#success').html(response);
});
return false;

});

// JS Required for Masonry Package to work
// Code came form JFiddle found in: https://github.com/desandro/masonry/issues/405
$(document).ready(function() {
  var $container = $('.masonry');

  $container.imagesLoaded(function() {
    $container.masonry({
      itemSelector: '.post-box',
      columnWidth: '.post-box',
      transitionDuration: 0
    });
  });
});
