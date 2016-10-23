(function(){
  'use strict';

  var App = angular.module('App',[

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
    .controller('UserController', UserController);

    UserController.$inject=[];

    function UserController(){
      var vm = this;

      vm.nome = 'Christian';

      console.log(vm);
    }


})();

//# sourceMappingURL=build/App/bundle.js.map
