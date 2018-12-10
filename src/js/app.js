angular.module('PhanAnhSuCo', [
  'ngRoute',
  'mobile-angular-ui',
  'PhanAnhSuCo.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false})
  .when('/phananh', {templateUrl:'phananh.html',  reloadOnSearch: false})
  .when('/gioithieu', {templateUrl:'gioithieu.html',  reloadOnSearch: false})
  .when('/thongke', {templateUrl:'thongke.html',  reloadOnSearch: false})
  .when('/hdsd', {templateUrl:'hdsd.html',  reloadOnSearch: false})
  .when('/chitiet', {templateUrl:'detail.html',  reloadOnSearch: false, controller: 'ContentController'});
});