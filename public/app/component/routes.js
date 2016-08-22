angular.module('davisLandscaping').config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('home', {
      url:'/',
      templateUrl:"home/homeView.html",
      controller:"homeCtrl"
    })
    .state('jobs', {
      url:'/jobs',
      templateUrl:"jobs/jobsView.html",
      controller:"jobsCtrl"
    })
    .state('job', {
      url:'/jobs/job',
      templateUrl:"jobs/job/jobView.html",
      controller:"jobCtrl"
    })
    .state('task', {
      url:'/jobs/job',
      templateUrl:"taskCtrl"
    })


})
