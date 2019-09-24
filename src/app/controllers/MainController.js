(function(){

  angular
       .module('app')
       .controller('MainController', [
          '$state', '$mdToast',
          MainController
       ]);

  function MainController($state, $mdToast) {
    var vm = this;
    vm.title = $state.current.data.title;
    vm.showSimpleToast = showSimpleToast;

    function showSimpleToast(title) {
      $mdToast.show(
        $mdToast.simple()
          .content(title)
          .hideDelay(2000)
          .position('bottom right')
      );
    }
  }

})();
