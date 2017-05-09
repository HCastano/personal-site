//Contact Form

$('#submit').click(function(){

$.post("assets/php/send.php", $(".contact-form").serialize(),  function(response) {
 $('#success').html(response);
});
return false;

});

// JS Required for Masonry Package to work
// Code came from: https://masonry.desandro.com/extras.html
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

// JS Required for Masonry Package to work
// Code came from JFiddle found in: https://github.com/desandro/masonry/issues/405
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
