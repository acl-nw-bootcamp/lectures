var app = app || {};

(function(module) {

    const reposView = {
        init: function () {
            $('main').removeAttr('class').addClass('repos');
            $('main h1').text('Repository time');

            app.repos.all.forEach( repo => {
                $('#repos ul').append( `<li>${repo.name} IS ONLINE AT ${repo.url}</li>`);
            })
        }
    }

    module.reposView = reposView;

}(app));