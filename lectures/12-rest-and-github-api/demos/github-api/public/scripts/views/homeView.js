var app = app || {};

(function(module) {

    const homeView = {
        init: function () {
            $('main').removeAttr('class').addClass('home');
            $('main h1').text('You\'re home!!!!!');
        }
    }

    module.homeView = homeView;

}(app));