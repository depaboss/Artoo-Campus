(function(){
  'use strict';

  angular.module('App.user')
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/user', {
          templateUrl: 'view/test/test.template.html',
          controller: 'TestController',
          controllerAs : 'vm'

        })
    }

})();
