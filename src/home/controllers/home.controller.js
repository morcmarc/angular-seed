module.exports = (function() {
  'use strict';

  angular
    .module('myApp.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$mdSidenav', 'version', 'User', 'Post'];

  function HomeController($mdSidenav, version, User, Post) {
    this.user  = User.get({ userId: 1 });
    this.posts = Post.query({ userId: 1 });

    this.openSidenav = function() {
      $mdSidenav('left').toggle();
    };
  }
})();