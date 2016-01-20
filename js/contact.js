$( document ).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: "http://formspree.io/tylerhoffman@outlook.com", 
      method: "POST",
      data: {
          email: $('.email').val(),
          message: $('.message').val()
      },
      dataType: "json"

  }).error(function(x, status, error){
              alert('Oh no! Something totally not groovy happened, try again!');
          }). success(function(data, status) {
              alert('Thanks for the groovy message! I\'ll get back to you in a hot minute');
              $('form').find('.email, .message').val('');
          });
  });
});