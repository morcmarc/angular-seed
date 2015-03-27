module.exports = (function() {
  'use strict';

  angular
    .module('myApp.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$mdSidenav', 'version', 'User', 'Post'];

  var vm;

  function HomeController($mdSidenav, version, User, Post) {
    vm = this;
    
    vm.user  = User.get({ userId: 1 });
    vm.posts = Post.query({ userId: 1 });

    vm.openSidenav = function() {
      $mdSidenav('left').open();
    };
  }
})();