//Contact Form

$('#submit').click(function(){

$.post("assets/php/send.php", $(".contact-form").serialize(),  function(response) {
 $('#success').html(response);
});
return false;

});

// Initialize Masonry
// Options came from: https://masonry.desandro.com/extras.html
var $grid = $('.grid').masonry({
 itemSelector: '.grid-item',
 columnWidth: '.grid-sizer',
 percentPosition: true
});

// Layout Masonry after all the images have loaded
// Not doing this can throw off the layout
$grid.imagesLoaded().progress(function() {
  $grid.masonry('layout');
});
