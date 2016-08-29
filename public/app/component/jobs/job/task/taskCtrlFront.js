angular.module('davisLandscaping').controller('taskCtrl', function($scope, taskSrv){


  $scope.getAllTasks = function(){
    taskSrv.getAllTasks().then(function(response){
      $scope.tasks = response;
    });
  }

  $scope.addTask = function(newTask){
    taskSrv.addTask(newTask).then(function(response){
      $scope.getAllTasks();
    });
  }

$scope.getTask = function(taskName){
  taskSrv.getTask(taskName).then(function(response){
    $scope.task = reponse;
  });
}

  $scope.deleteTask = function(taskID){
    taskSrv.deleteTask(taskID).then(function(response){
      $scope.getAllTasks();
    });
  }


});
