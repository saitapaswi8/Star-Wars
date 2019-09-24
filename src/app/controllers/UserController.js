(function(){

  angular
    .module('app')
    .controller('UserController', [
      'userService',
      '$scope',
      UserController
    ]);

  function UserController(userService,$scope) {
    var vm = this;

    vm.users = [];
    var vm = this;
    vm.totalItems = 0;

    $scope.selected = [];

    $scope.query = {
      order: 'name',
      limit: 10,
      page: 1
    };
    $scope.selected = [];

    $scope.render = function (T) {
      return T;
    }
    var lastQuery = null;
    vm.getItems = function (page, limit) { 
      /**
       * I don't know why this function is being called too many times,
       * it supposed to call once per pagination, so the next 3 lines are only to avoid
       * multiple requests. 
       */
      console.log(page);
      console.log(limit);
      var query = JSON.stringify($scope.query);
      if (query == lastQuery) return;
      lastQuery = query;
      GetItemsData($scope.query);
    }

    function GetItemsData(query) {
      userService
      .loadUsers(query)
      .then(function(response) {
        if(response && response.status == 200){
          vm.users = response.data.results;
          vm.totalItems = response.data.count;
        } 
      });

    } 
    
    GetItemsData($scope.query);
  }

})();
