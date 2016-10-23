(function(){
  'use strict';

  var App = angular.module('App',[
    'ngRoute',

    'App.user'

  ]);

 })();

(function(){
  'use strict';

  angular.module('App.user', [

  ]);

})();

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

(function(){

  'use strict';

  angular.module('App.user')
    .controller('TestController', TestController);

    TestController.$inject=[];

    function TestController(){
      var vm = this;

      vm.nome = 'Christian';

      console.log(vm);
    }


})();

//# sourceMappingURL=build/App/bundle.js.map
