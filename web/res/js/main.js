// Config
requirejs.config({
  baseUrl: '/res',
  paths: {
    jquery:        'lib/jquery/dist/jquery.min',
    foundation:    'lib/foundation/dist/js/foundation.min'
  }
});


// jQuery, Foundation and Basic-Scripts
requirejs(['jquery'], function($){


  // Foundation Scripts
  requirejs(['foundation'], function(){
    $(function(){
      $(document).foundation();
    });
  });

    
});
