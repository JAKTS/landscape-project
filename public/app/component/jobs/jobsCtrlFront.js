angular.module('davisLandscaping').controller('jobsCtrl', function($scope, jobsSrv, modals){

  $scope.getAllJobs = function(){
    jobsSrv.getAllJobs().then(function(response){
      $scope.jobs = response;
    });
  }

  $scope.addJob = function(newJob){
    jobsSrv.addJob(newJob).then(function(response){
      $scope.getAllJobs();
    });
  }

  $scope.deleteJob = function(jobID){
    jobsSrv.deleteJob(jobID).then(function(response){
      $scope.getAllTasks();
    });
  }

  $scope.getJob = function(jobName){
    jobSrv.getJob(jobName).then(function(response){
      $scope.job = response;
    });
  }

$scope.open = function(){
  var please = modals.open(
    
  )
}


});
