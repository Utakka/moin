// Config
requirejs.config({
  paths: {
    jqueryBundle: '/_vendor/jquery-foundation.bundle',
    swiper:       '/_vendor/swiper/dist/js/swiper.min'
  }
});

requirejs(['jqueryBundle'], (jquery)=>{
  $(()=>{

    // fire up foundation
    $(document).foundation();

    // _main.js
    initMainScripts();

  });
});