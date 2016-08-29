angular.module('davisLandscaping').service('jobsSrv', function($http){

  this.getAllJobs = function(){
      return $http({
        method: 'GET',
        url: '/jobs'
      }).then(function(response){
        console.log(response.data)
        return response.data;
      });

    },

    this.addJob = function(newJob){
      return $http({
        method:'POST',
        url: '/jobs',
        data: newJob
      }).then(function(response){
        return response;
      })
    }
    this.deleteJob = function(jobId){
      return $http({
        method: 'DELETE',
        url: '/jobs/' + jobId
      }).then(function(response){
        return response;
      })
    },

    this.getJob = function(jobName){
        return $http({
          method: 'GET',
          url: '/job' + jobName
        }).then(function(response){
          console.log(response.data)
          return response.data;
        });

      }
    

});
