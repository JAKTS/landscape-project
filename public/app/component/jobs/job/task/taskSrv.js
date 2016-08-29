angular.module('davisLandscaping').service('taskSrv', function($http){

  this.addTask = function(newTask){
    return $http({
      method:'POST',
      url: '/task',
      data: newTask
    }).then(function(response){
      return response;
    })
  },

  this.deleteTask = function(taskId){
    return $http({
      method: 'DELETE',
      url: '/task/' + taskId
    }).then(function(response){
      return response;
    })
  },

  this.getAllTasks = function(){
      return $http({
        method: 'GET',
        url: '/task'
      }).then(function(response){
        console.log(response.data)
        return response.data;
      });

    },

  this.getTask = function (taskName){
    return $http({
      method: 'GET',
      url: '/task/' + taskName
    }).then(function(response){
      return response;
    })
  }


});
