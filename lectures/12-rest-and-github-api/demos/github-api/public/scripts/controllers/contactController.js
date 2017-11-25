'use strict';
var app = app || {};

(function(module) {
  const contactController = {};
  
  contactController.init = function () {
      app.contactView.init();
      $( 'main > section' ).hide();
      $( '#contact' ).show(); 
  }

  module.contactController = contactController;
})(app);
