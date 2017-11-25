'use strict';
var app = app || {};

(function(module) {
  const homeController = {};
  
  homeController.init = function () {
      app.homeView.init();
      $( 'main > section' ).hide();
      $( '#home' ).show(); 
  }

  module.homeController = homeController;
})(app);
