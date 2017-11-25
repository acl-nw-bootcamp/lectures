'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];
  // make a request to the GitHub API then save all the repo data in repos.all

  repos.requestRepos = function (callback) {
    $.ajax({
        url: `https://api.github.com/user/repos`,
        type: 'GET',
        headers: {'Authorization': `token ${githubToken}`}
        })
        .then(data => repos.all = data, err => console.error(err)) // es6 syntax arrow functions
        .then(callback);
    };

  module.repos = repos;
})(app);
