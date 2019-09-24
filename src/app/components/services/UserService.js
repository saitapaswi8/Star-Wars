(function(){
  'use strict';

  angular.module('app')
        .service('userService', [
        '$q','$http',
      userList
  ]);

  function userList($q, $http){
    return {
      loadUsers : function(query) {
        var page = 1;
        if(query && query.page){
          page = query.page;
        }
        return $http.get('https://swapi.co/api/people/?page='+ page);
      }
    };
  }
})();
