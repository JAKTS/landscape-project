angular.module('davisLandscaping').service('clientSrv', function($http){

  this.addClient = function(newClient){
    return $http({
      method:'POST',
      url: '/client',
      data: newTask
    }).then(function(response){
      return response;
    })
  },

  this.deleteClient = function(clientId){
    return $http({
      method: 'DELETE',
      url: '/client/' + clientId
    }).then(function(response){
      return response;
    })
  },

  this.getClient = function (clientName){
    return $http({
      method: 'GET',
      url: '/client/' + clientName
    }).then(function(response){
      return response;
    })
  },

  this.getAllClients = function(){
      return $http({
        method: 'GET',
        url: '/client'
      }).then(function(response){
        console.log(response.data)
        return response.data;
      });

    }

});
