(function(){
  'use strict';

  angular.module('App.table')
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/table', {
          controller: 'TableController',
          controllerAs: 'vm',
          templateUrl: 'view/table/template/table.template.html'
        })
    }
})();
