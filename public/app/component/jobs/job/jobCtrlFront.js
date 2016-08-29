angular.module('davisLandscaping').controller('jobCtrl', function($scope, jobSrv){

  $scope.getAllTasks = function(){
    jobSrv.getAllTasks().then(function(response){
      $scope.tasks = response;
    });
  }

  $scope.addTask = function(newTask){
    jobSrv.addTask(newTask).then(function(response){
      $scope.getAllTasks();
    });
  }

  $scope.deleteTask = function(taskID){
    jobSrv.deleteTask(taskID).then(function(response){
      $scope.getAllTasks();
    });
  }

  $scope.getJob = function(jobName){
    jobSrv.getJob(jobName).then(function(response){
      $scope.job = response;
    })
  }

  // $scope.deleteJob = function(jobID){
  //   jobSrv.deleteJob(jobID).then(function(response){
  //     $scope
  //   });
  // } HOW TO IMPLEMENT?



});
