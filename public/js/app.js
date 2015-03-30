(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "name": "angular-seed",
  "version": "0.1.0",
  "description": "A simple seed application for angular-based projects",
  "scripts": {
    "test": "protractor e2e/conf.js"
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
  }
}

},{}],2:[function(require,module,exports){
module.exports = (function() {
  'use strict';

  angular
    .module('myApp')
    .config(Config);

  Config.$inject = ['$routeProvider', '$resourceProvider', '$mdThemingProvider'];

  function Config($routeProvider, $resourceProvider, $mdThemingProvider) {
    RouteProviderConfig($routeProvider);
    ThemeProviderConfig($mdThemingProvider);
  }

  function RouteProviderConfig($routeProvider) {
    $routeProvider
      .otherwise({
        templateUrl  : 'partials/home.html',
        controller   : 'HomeController',
        controllerAs : 'vm'
      });
  }

  function ThemeProviderConfig($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('orange');
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
      // - Libraries
      'ngRoute',
      'ngResource',
      'ngMaterial',
      // - Modules
      'myApp.shared',
      'myApp.home'
    ]);

  // - Generic
  var Constants = require('./app.constants');
  var Config    = require('./app.config');
  // - Modules
  var Shared    = require('./shared/shared.module');
  var Home      = require('./home/home.module');
})();
},{"./app.config":2,"./app.constants":3,"./home/home.module":6,"./shared/shared.module":10}],5:[function(require,module,exports){
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
    .module('myApp.shared')
    .constant('apiUri', 'http://jsonplaceholder.typicode.com');
})();
},{}],10:[function(require,module,exports){
module.exports = (function() {
  'use strict';

  angular
    .module('myApp.shared', [
      'ngResource'
    ]);

  var Constants   = require('./shared.constants');
  var UserService = require('./services/user.service');
  var PostService = require('./services/post.service');
})();
},{"./services/post.service":7,"./services/user.service":8,"./shared.constants":9}]},{},[4])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjZWxsanVzenRpbi9Db2RlL2dpdGh1Yi5jb20vYW5ndWxhci1zZWVkL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9tYXJjZWxsanVzenRpbi9Db2RlL2dpdGh1Yi5jb20vYW5ndWxhci1zZWVkL3BhY2thZ2UuanNvbiIsIi9Vc2Vycy9tYXJjZWxsanVzenRpbi9Db2RlL2dpdGh1Yi5jb20vYW5ndWxhci1zZWVkL3NyYy9hcHAuY29uZmlnLmpzIiwiL1VzZXJzL21hcmNlbGxqdXN6dGluL0NvZGUvZ2l0aHViLmNvbS9hbmd1bGFyLXNlZWQvc3JjL2FwcC5jb25zdGFudHMuanMiLCIvVXNlcnMvbWFyY2VsbGp1c3p0aW4vQ29kZS9naXRodWIuY29tL2FuZ3VsYXItc2VlZC9zcmMvZmFrZV83NDA0NWViZi5qcyIsIi9Vc2Vycy9tYXJjZWxsanVzenRpbi9Db2RlL2dpdGh1Yi5jb20vYW5ndWxhci1zZWVkL3NyYy9ob21lL2NvbnRyb2xsZXJzL2hvbWUuY29udHJvbGxlci5qcyIsIi9Vc2Vycy9tYXJjZWxsanVzenRpbi9Db2RlL2dpdGh1Yi5jb20vYW5ndWxhci1zZWVkL3NyYy9ob21lL2hvbWUubW9kdWxlLmpzIiwiL1VzZXJzL21hcmNlbGxqdXN6dGluL0NvZGUvZ2l0aHViLmNvbS9hbmd1bGFyLXNlZWQvc3JjL3NoYXJlZC9zZXJ2aWNlcy9wb3N0LnNlcnZpY2UuanMiLCIvVXNlcnMvbWFyY2VsbGp1c3p0aW4vQ29kZS9naXRodWIuY29tL2FuZ3VsYXItc2VlZC9zcmMvc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZS5qcyIsIi9Vc2Vycy9tYXJjZWxsanVzenRpbi9Db2RlL2dpdGh1Yi5jb20vYW5ndWxhci1zZWVkL3NyYy9zaGFyZWQvc2hhcmVkLmNvbnN0YW50cy5qcyIsIi9Vc2Vycy9tYXJjZWxsanVzenRpbi9Db2RlL2dpdGh1Yi5jb20vYW5ndWxhci1zZWVkL3NyYy9zaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJhbmd1bGFyLXNlZWRcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4xLjBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkEgc2ltcGxlIHNlZWQgYXBwbGljYXRpb24gZm9yIGFuZ3VsYXItYmFzZWQgcHJvamVjdHNcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInRlc3RcIjogXCJwcm90cmFjdG9yIGUyZS9jb25mLmpzXCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJhbmd1bGFyXCIsXG4gICAgXCJzZWVkXCJcbiAgXSxcbiAgXCJhdXRob3JcIjogXCJcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJyb3dzZXJpZnlcIjogXCJeOS4wLjNcIixcbiAgICBcImNoYWlcIjogXCJeMi4xLjJcIixcbiAgICBcImd1bHBcIjogXCJeMy44LjExXCIsXG4gICAgXCJndWxwLWJyb3dzZXJpZnlcIjogXCJeMC41LjFcIixcbiAgICBcImd1bHAtY29ubmVjdFwiOiBcIl4yLjIuMFwiLFxuICAgIFwiZ3VscC11Z2xpZnlcIjogXCJeMS4xLjBcIlxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdteUFwcCcpXG4gICAgLmNvbmZpZyhDb25maWcpO1xuXG4gIENvbmZpZy4kaW5qZWN0ID0gWyckcm91dGVQcm92aWRlcicsICckcmVzb3VyY2VQcm92aWRlcicsICckbWRUaGVtaW5nUHJvdmlkZXInXTtcblxuICBmdW5jdGlvbiBDb25maWcoJHJvdXRlUHJvdmlkZXIsICRyZXNvdXJjZVByb3ZpZGVyLCAkbWRUaGVtaW5nUHJvdmlkZXIpIHtcbiAgICBSb3V0ZVByb3ZpZGVyQ29uZmlnKCRyb3V0ZVByb3ZpZGVyKTtcbiAgICBUaGVtZVByb3ZpZGVyQ29uZmlnKCRtZFRoZW1pbmdQcm92aWRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBSb3V0ZVByb3ZpZGVyQ29uZmlnKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC5vdGhlcndpc2Uoe1xuICAgICAgICB0ZW1wbGF0ZVVybCAgOiAncGFydGlhbHMvaG9tZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlciAgIDogJ0hvbWVDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzIDogJ3ZtJ1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyQ29uZmlnKCRtZFRoZW1pbmdQcm92aWRlcikge1xuICAgICRtZFRoZW1pbmdQcm92aWRlclxuICAgICAgLnRoZW1lKCdkZWZhdWx0JylcbiAgICAgIC5wcmltYXJ5UGFsZXR0ZSgnYmx1ZS1ncmV5JylcbiAgICAgIC5hY2NlbnRQYWxldHRlKCdvcmFuZ2UnKTtcbiAgfVxufSkoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdteUFwcCcpXG4gICAgLmNvbnN0YW50KCd2ZXJzaW9uJywgcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbik7XG59KSgpOyIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ215QXBwJywgW1xuICAgICAgLy8gLSBMaWJyYXJpZXNcbiAgICAgICduZ1JvdXRlJyxcbiAgICAgICduZ1Jlc291cmNlJyxcbiAgICAgICduZ01hdGVyaWFsJyxcbiAgICAgIC8vIC0gTW9kdWxlc1xuICAgICAgJ215QXBwLnNoYXJlZCcsXG4gICAgICAnbXlBcHAuaG9tZSdcbiAgICBdKTtcblxuICAvLyAtIEdlbmVyaWNcbiAgdmFyIENvbnN0YW50cyA9IHJlcXVpcmUoJy4vYXBwLmNvbnN0YW50cycpO1xuICB2YXIgQ29uZmlnICAgID0gcmVxdWlyZSgnLi9hcHAuY29uZmlnJyk7XG4gIC8vIC0gTW9kdWxlc1xuICB2YXIgU2hhcmVkICAgID0gcmVxdWlyZSgnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZScpO1xuICB2YXIgSG9tZSAgICAgID0gcmVxdWlyZSgnLi9ob21lL2hvbWUubW9kdWxlJyk7XG59KSgpOyIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ215QXBwLmhvbWUnKVxuICAgIC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIEhvbWVDb250cm9sbGVyKTtcblxuICBIb21lQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbWRTaWRlbmF2JywgJ3ZlcnNpb24nLCAnVXNlcicsICdQb3N0J107XG5cbiAgdmFyIHZtO1xuXG4gIGZ1bmN0aW9uIEhvbWVDb250cm9sbGVyKCRtZFNpZGVuYXYsIHZlcnNpb24sIFVzZXIsIFBvc3QpIHtcbiAgICB2bSA9IHRoaXM7XG4gICAgXG4gICAgdm0udXNlciAgPSBVc2VyLmdldCh7IHVzZXJJZDogMSB9KTtcbiAgICB2bS5wb3N0cyA9IFBvc3QucXVlcnkoeyB1c2VySWQ6IDEgfSk7XG5cbiAgICB2bS5vcGVuU2lkZW5hdiA9IGZ1bmN0aW9uKCkge1xuICAgICAgJG1kU2lkZW5hdignbGVmdCcpLm9wZW4oKTtcbiAgICB9O1xuICB9XG59KSgpOyIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ215QXBwLmhvbWUnLCBbXSk7XG5cbiAgdmFyIEhvbWVDb250cm9sbGVyID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9ob21lLmNvbnRyb2xsZXInKTtcbn0pKCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnbXlBcHAuc2hhcmVkJylcbiAgICAuZmFjdG9yeSgnUG9zdCcsIFBvc3RTZXJ2aWNlKTtcblxuICAgIFBvc3RTZXJ2aWNlLiRpbmplY3QgPSBbJ2FwaVVyaScsICckcmVzb3VyY2UnXTtcblxuICAgIGZ1bmN0aW9uIFBvc3RTZXJ2aWNlKGFwaVVyaSwgJHJlc291cmNlKSB7XG4gICAgICByZXR1cm4gJHJlc291cmNlKGFwaVVyaSArICcvcG9zdHM/dXNlcklkPTp1c2VySWQnKTtcbiAgICB9XG59KSgpOyIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ215QXBwLnNoYXJlZCcpXG4gICAgLmZhY3RvcnkoJ1VzZXInLCBVc2VyU2VydmljZSk7XG5cbiAgICBVc2VyU2VydmljZS4kaW5qZWN0ID0gWydhcGlVcmknLCAnJHJlc291cmNlJ107XG5cbiAgICBmdW5jdGlvbiBVc2VyU2VydmljZShhcGlVcmksICRyZXNvdXJjZSkge1xuICAgICAgcmV0dXJuICRyZXNvdXJjZShhcGlVcmkgKyAnL3VzZXJzLzp1c2VySWQnKTtcbiAgICB9XG59KSgpOyIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ215QXBwLnNoYXJlZCcpXG4gICAgLmNvbnN0YW50KCdhcGlVcmknLCAnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20nKTtcbn0pKCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnbXlBcHAuc2hhcmVkJywgW1xuICAgICAgJ25nUmVzb3VyY2UnXG4gICAgXSk7XG5cbiAgdmFyIENvbnN0YW50cyAgID0gcmVxdWlyZSgnLi9zaGFyZWQuY29uc3RhbnRzJyk7XG4gIHZhciBVc2VyU2VydmljZSA9IHJlcXVpcmUoJy4vc2VydmljZXMvdXNlci5zZXJ2aWNlJyk7XG4gIHZhciBQb3N0U2VydmljZSA9IHJlcXVpcmUoJy4vc2VydmljZXMvcG9zdC5zZXJ2aWNlJyk7XG59KSgpOyJdfQ==
