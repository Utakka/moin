// Config
requirejs.config({
  paths: {
    'jquery':        'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min',
    'foundation':    'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/js/foundation.min',
    'svg4everybody': 'https://cdnjs.cloudflare.com/ajax/libs/svg4everybody/2.1.9/svg4everybody.min',
    'fancybox':      'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.5/jquery.fancybox.min'
  },
  shim: {
    'foundation': {
      deps: ['jquery'],
      exports: 'Foundation'
    }
  }
});


// jQuery, Foundation and Basic-Scripts
requirejs(['jquery', 'foundation'], function($){

  $(document).foundation();

  // Animation fuer Dropdown Menues hinzufuegen
  $("nav .menu[data-responsive-menu]").on('show.zf.dropdownmenu', function(ev,$el){ $el.css("display","none").stop().slideDown(300); });

});
