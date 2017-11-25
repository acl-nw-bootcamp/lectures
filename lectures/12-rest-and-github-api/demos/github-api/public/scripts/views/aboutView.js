var app = app || {};

(function(module) {

    const aboutView = {
        init: function () { 
            $('main').removeAttr('class').addClass('about');
            $('main h1').text('You\'re trying learn about stuff!!!!');
        }
    }

    module.aboutView = aboutView;
}(app));