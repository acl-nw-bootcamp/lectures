'use strict';
var app = app || {};

(function(module) {
  const reposController = {};
  
  reposController.init = function () {

      $( 'main > section' ).hide();
      $( '#repos' ).show(); 

      app.repos.requestRepos(app.reposView.init);
  }

  module.reposController = reposController;
})(app);
