function initMainScripts() {

    // heroshot parallax effect
    if( $(".heroshot .heroshot__image").length==1 && Foundation.MediaQuery.is('xlarge') ) {

      // the effect
      function heroshotParallax() {
        var posImg = $(document).scrollTop() * -1 / 2; // 1/2 the scroll speed for the image
        $(".heroshot .heroshot__image").css("transform","translateY("+posImg+"px)");
      }
      heroshotParallax(); // first init
      $(document).scroll(heroshotParallax); // on scroll
  
      // ie smooth scroll fix
      if(navigator.userAgent.match(/Trident\/7\.|Edge\//)) {
        $("body").on("mousewheel", function(){
          event.preventDefault();
          var scrollPosition = window.pageYOffset - event.wheelDelta;
          window.scrollTo(0, scrollPosition);
        });
      }
  
    }

}