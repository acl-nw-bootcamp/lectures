'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};
  
  aboutController.init = function () {
      app.aboutView.init();
      $( 'main > section' ).hide();
      $( '#about' ).show(); 
  }

  module.aboutController = aboutController;
})(app);
