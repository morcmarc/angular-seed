(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "name": "angular-seed",
  "version": "0.1.0",
  "description": "A simple seed application for angular-based projects",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "angular",
    "seed"
  ],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "browserify": "^9.0.3",
    "chai": "^2.1.2",
    "gulp": "^3.8.11",
    "gulp-browserify": "^0.5.1",
    "gulp-connect": "^2.2.0",
    "gulp-uglify": "^1.1.0"
  },
  "dependencies": {
    "angular-router": "0.0.2"
  }
}

},{}],2:[function(require,module,exports){
module.exports = (function() {
  'use strict';

  angular
    .module('myApp')
    .config(['$routeProvider', RouteProviderConfig]);

  function RouteProviderConfig($routeProvider) {
    $routeProvider
      .otherwise({
        templateUrl  : 'partials/home.html',
        controller   : 'HomeController',
        controllerAs : 'vm'
      });
  }

})();
},{}],3:[function(require,module,exports){
module.exports = (function() {
  'use strict';

  angular
    .module('myApp')
    .constant('version', require('../package.json').version);
})();
},{"../package.json":1}],4:[function(require,module,exports){
module.exports = (function() {
  'use strict';

  angular
    .module('myApp', [
      // --- Angular Providers
      'ngRoute',
      'ngResource',
      'ngMaterial',
      // --- Application Modules
      'myApp.shared',
      'myApp.home'
    ]);

  // Require modules for browserify
  var Constants = require('./app.constants');
  var Config    = require('./app.config');
  var Shared    = require('./shared/shared.module');
  var Home      = require('./home/home.module');
})();
},{"./app.config":2,"./app.constants":3,"./home/home.module":6,"./shared/shared.module":9}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
module.exports = (function() {
  'use strict';

  angular
    .module('myApp.home', []);

  var HomeController = require('./controllers/home.controller');
})();
},{"./controllers/home.controller":5}],7:[function(require,module,exports){
module.exports = (function() {
  'use strict';

  angular
    .module('myApp.shared')
    .factory('Post', PostService);

    PostService.$inject = ['apiUri', '$resource'];

    function PostService(apiUri, $resource) {
      return $resource(apiUri + '/posts?userId=:userId');
    }
})();
},{}],8:[function(require,module,exports){
module.exports = (function() {
  'use strict';

  angular
    .module('myApp.shared')
    .factory('User', UserService);

    UserService.$inject = ['apiUri', '$resource'];

    function UserService(apiUri, $resource) {
      return $resource(apiUri + '/users/:userId');
    }
})();
},{}],9:[function(require,module,exports){
module.exports = (function() {
  'use strict';

  angular
    .module('myApp.shared', [
      'ngResource'
    ])
    .constant('apiUri', 'http://jsonplaceholder.typicode.com');

  var UserService = require('./services/user.service');
  var PostService = require('./services/post.service');
})();
},{"./services/post.service":7,"./services/user.service":8}]},{},[4])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWxsanVzenRpbi9Db2RlL2dpdGh1Yi5jb20vYW5ndWxhci1zZWVkL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9tYXJjZWxsanVzenRpbi9Db2RlL2dpdGh1Yi5jb20vYW5ndWxhci1zZWVkL3BhY2thZ2UuanNvbiIsIi9Vc2Vycy9tYXJjZWxsanVzenRpbi9Db2RlL2dpdGh1Yi5jb20vYW5ndWxhci1zZWVkL3NyYy9hcHAuY29uZmlnLmpzIiwiL1VzZXJzL21hcmNlbGxqdXN6dGluL0NvZGUvZ2l0aHViLmNvbS9hbmd1bGFyLXNlZWQvc3JjL2FwcC5jb25zdGFudHMuanMiLCIvVXNlcnMvbWFyY2VsbGp1c3p0aW4vQ29kZS9naXRodWIuY29tL2FuZ3VsYXItc2VlZC9zcmMvZmFrZV9hNWVkOTZmZS5qcyIsIi9Vc2Vycy9tYXJjZWxsanVzenRpbi9Db2RlL2dpdGh1Yi5jb20vYW5ndWxhci1zZWVkL3NyYy9ob21lL2NvbnRyb2xsZXJzL2hvbWUuY29udHJvbGxlci5qcyIsIi9Vc2Vycy9tYXJjZWxsanVzenRpbi9Db2RlL2dpdGh1Yi5jb20vYW5ndWxhci1zZWVkL3NyYy9ob21lL2hvbWUubW9kdWxlLmpzIiwiL1VzZXJzL21hcmNlbGxqdXN6dGluL0NvZGUvZ2l0aHViLmNvbS9hbmd1bGFyLXNlZWQvc3JjL3NoYXJlZC9zZXJ2aWNlcy9wb3N0LnNlcnZpY2UuanMiLCIvVXNlcnMvbWFyY2VsbGp1c3p0aW4vQ29kZS9naXRodWIuY29tL2FuZ3VsYXItc2VlZC9zcmMvc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZS5qcyIsIi9Vc2Vycy9tYXJjZWxsanVzenRpbi9Db2RlL2dpdGh1Yi5jb20vYW5ndWxhci1zZWVkL3NyYy9zaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwibmFtZVwiOiBcImFuZ3VsYXItc2VlZFwiLFxuICBcInZlcnNpb25cIjogXCIwLjEuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBzaW1wbGUgc2VlZCBhcHBsaWNhdGlvbiBmb3IgYW5ndWxhci1iYXNlZCBwcm9qZWN0c1wiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwidGVzdFwiOiBcImVjaG8gXFxcIkVycm9yOiBubyB0ZXN0IHNwZWNpZmllZFxcXCIgJiYgZXhpdCAxXCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJhbmd1bGFyXCIsXG4gICAgXCJzZWVkXCJcbiAgXSxcbiAgXCJhdXRob3JcIjogXCJcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJyb3dzZXJpZnlcIjogXCJeOS4wLjNcIixcbiAgICBcImNoYWlcIjogXCJeMi4xLjJcIixcbiAgICBcImd1bHBcIjogXCJeMy44LjExXCIsXG4gICAgXCJndWxwLWJyb3dzZXJpZnlcIjogXCJeMC41LjFcIixcbiAgICBcImd1bHAtY29ubmVjdFwiOiBcIl4yLjIuMFwiLFxuICAgIFwiZ3VscC11Z2xpZnlcIjogXCJeMS4xLjBcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJhbmd1bGFyLXJvdXRlclwiOiBcIjAuMC4yXCJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnbXlBcHAnKVxuICAgIC5jb25maWcoWyckcm91dGVQcm92aWRlcicsIFJvdXRlUHJvdmlkZXJDb25maWddKTtcblxuICBmdW5jdGlvbiBSb3V0ZVByb3ZpZGVyQ29uZmlnKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC5vdGhlcndpc2Uoe1xuICAgICAgICB0ZW1wbGF0ZVVybCAgOiAncGFydGlhbHMvaG9tZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlciAgIDogJ0hvbWVDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzIDogJ3ZtJ1xuICAgICAgfSk7XG4gIH1cblxufSkoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdteUFwcCcpXG4gICAgLmNvbnN0YW50KCd2ZXJzaW9uJywgcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbik7XG59KSgpOyIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ215QXBwJywgW1xuICAgICAgLy8gLS0tIEFuZ3VsYXIgUHJvdmlkZXJzXG4gICAgICAnbmdSb3V0ZScsXG4gICAgICAnbmdSZXNvdXJjZScsXG4gICAgICAnbmdNYXRlcmlhbCcsXG4gICAgICAvLyAtLS0gQXBwbGljYXRpb24gTW9kdWxlc1xuICAgICAgJ215QXBwLnNoYXJlZCcsXG4gICAgICAnbXlBcHAuaG9tZSdcbiAgICBdKTtcblxuICAvLyBSZXF1aXJlIG1vZHVsZXMgZm9yIGJyb3dzZXJpZnlcbiAgdmFyIENvbnN0YW50cyA9IHJlcXVpcmUoJy4vYXBwLmNvbnN0YW50cycpO1xuICB2YXIgQ29uZmlnICAgID0gcmVxdWlyZSgnLi9hcHAuY29uZmlnJyk7XG4gIHZhciBTaGFyZWQgICAgPSByZXF1aXJlKCcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJyk7XG4gIHZhciBIb21lICAgICAgPSByZXF1aXJlKCcuL2hvbWUvaG9tZS5tb2R1bGUnKTtcbn0pKCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnbXlBcHAuaG9tZScpXG4gICAgLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgSG9tZUNvbnRyb2xsZXIpO1xuXG4gIEhvbWVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRtZFNpZGVuYXYnLCAndmVyc2lvbicsICdVc2VyJywgJ1Bvc3QnXTtcblxuICB2YXIgdm07XG5cbiAgZnVuY3Rpb24gSG9tZUNvbnRyb2xsZXIoJG1kU2lkZW5hdiwgdmVyc2lvbiwgVXNlciwgUG9zdCkge1xuICAgIHZtID0gdGhpcztcbiAgICBcbiAgICB2bS51c2VyICA9IFVzZXIuZ2V0KHsgdXNlcklkOiAxIH0pO1xuICAgIHZtLnBvc3RzID0gUG9zdC5xdWVyeSh7IHVzZXJJZDogMSB9KTtcblxuICAgIHZtLm9wZW5TaWRlbmF2ID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbWRTaWRlbmF2KCdsZWZ0Jykub3BlbigpO1xuICAgIH07XG4gIH1cbn0pKCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnbXlBcHAuaG9tZScsIFtdKTtcblxuICB2YXIgSG9tZUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2hvbWUuY29udHJvbGxlcicpO1xufSkoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdteUFwcC5zaGFyZWQnKVxuICAgIC5mYWN0b3J5KCdQb3N0JywgUG9zdFNlcnZpY2UpO1xuXG4gICAgUG9zdFNlcnZpY2UuJGluamVjdCA9IFsnYXBpVXJpJywgJyRyZXNvdXJjZSddO1xuXG4gICAgZnVuY3Rpb24gUG9zdFNlcnZpY2UoYXBpVXJpLCAkcmVzb3VyY2UpIHtcbiAgICAgIHJldHVybiAkcmVzb3VyY2UoYXBpVXJpICsgJy9wb3N0cz91c2VySWQ9OnVzZXJJZCcpO1xuICAgIH1cbn0pKCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnbXlBcHAuc2hhcmVkJylcbiAgICAuZmFjdG9yeSgnVXNlcicsIFVzZXJTZXJ2aWNlKTtcblxuICAgIFVzZXJTZXJ2aWNlLiRpbmplY3QgPSBbJ2FwaVVyaScsICckcmVzb3VyY2UnXTtcblxuICAgIGZ1bmN0aW9uIFVzZXJTZXJ2aWNlKGFwaVVyaSwgJHJlc291cmNlKSB7XG4gICAgICByZXR1cm4gJHJlc291cmNlKGFwaVVyaSArICcvdXNlcnMvOnVzZXJJZCcpO1xuICAgIH1cbn0pKCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnbXlBcHAuc2hhcmVkJywgW1xuICAgICAgJ25nUmVzb3VyY2UnXG4gICAgXSlcbiAgICAuY29uc3RhbnQoJ2FwaVVyaScsICdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbScpO1xuXG4gIHZhciBVc2VyU2VydmljZSA9IHJlcXVpcmUoJy4vc2VydmljZXMvdXNlci5zZXJ2aWNlJyk7XG4gIHZhciBQb3N0U2VydmljZSA9IHJlcXVpcmUoJy4vc2VydmljZXMvcG9zdC5zZXJ2aWNlJyk7XG59KSgpOyJdfQ==
