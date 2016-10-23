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
