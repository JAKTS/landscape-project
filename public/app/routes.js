angular.module('davisLandscaping')
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('home', {
      url:'/',
      templateUrl:"/app/component/home/homeView.html",
      controller:'homeCtrl',
      data: {
        css: '/app/asssets/styles/homeStyle.css'
      }
    })
    .state('inventory',{
      url:'/inventory',
      templateUrl:"/app/component/inventory/inventoryView.html",
      data: {
        css: '/app/asssets/styles/inventoryStyle.css'  //can add multiple css sheets but has to be in array format
      }
    })
    .state('jobs', {
      url:'/jobs',
      templateUrl:"/app/component/jobs/jobsView.html",
      controller:'jobsCtrl',
      data: {
        css:'/app/asssets/styles/jobsStyle.css'
      }
    })
    .state('job', {
      url:'/jobs/job',
      templateUrl:"/app/component/jobs/job/jobView.html",
      controller:'jobCtrl',
      data: {
        css:'/app/asssets/styles/jobStyle.css'
      }
    })
    .state('task', {
      url:'/jobs/job',
      templateUrl:"/app/component/jobs/job/taskView.html",
      controller:'taskCtrl',
      data: {
        css:'/app/asssets/styles/taskStyle.css'
      }
    })
    .state('client', {
      url:'/client',
      templateUrl:"/app/component/jobs/client/clientView.html",
      controller:'clientCtrl',
      data: {
        css:'/app/asssets/styles/taskStyle.css'
      }
    })
    .state('employee', {
      url:'/employee',
      templateUrl:"/app/component/employee/employeeView.html",
      controller:'employeeCtrl',
      data: {
        css:'/app/asssets/styles/userStyle.css'
      }
    });
    $urlRouterProvider.otherwise('/');



});
