(function ($, Drupal) {
  Drupal.behaviors.dgmde25behavior = {
    attach: function (context, settings) {
      // your JS or jQuery goes here
      console.log("DGMD E-25 javscript is working, here's the page title: ", $("h1").html());
    }
  };
})(jQuery, Drupal);
