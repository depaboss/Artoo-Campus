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
