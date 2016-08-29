angular.module('davisLandscaping').controller('clientCtrl', function($scope, clientSrv){

$scope.getAllClients = function(){
  clientSrv.getAllClients().then(function(response){
    $scope.clients = response;
  });
}

$scope.addClient = function(newClient){
  clientSrv.addClient(newClient).then(function(response){
    $scope.getAllClients();
  });
}

$scope.deleteClient = function(clientID){
  clientSrv.addClient(clientID).then(function(response){
    $scope.getAllClients();
  });
}

$scope.getClient = function(clientName){
  clientSrv.getClient(clientName).then(function(response){
    $scope.client = response;
  });
}

});
