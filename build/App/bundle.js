(function(){
  'use strict';

  var App = angular
    .module('App',[

    ]);

 })();

(function(){

  'use strict';

  angular.module('App')
    .controller('UserController', UserController);

    UserController.$inject=[];

    function UserController(){
      var vm = this;

      vm.nome = 'Christian';

      console.log(vm);
    }


})();

//# sourceMappingURL=build/App/bundle.js.map
