(function () {
    'use strict';

    angular.module('ExpenseClaimApp', [
        'ngRoute',
        'ngResource',
        'smart-table',
        'ui.bootstrap',
        'ExpenseClaimApp.expense'
        //'LocalStorageModule'
    ])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                //resolve: {
                //    "check": function ($location, $rootScope) {
                //        if (!$rootScope.loggedIn) {
                //            $location.path('/');
                //        }
                //    }
                //},
                templateUrl: '/scripts/app/templates/expense/index.html',
                //controller: 'ExpenseController',
                controllerAs: 'ctrl'
            })
            .when('/employee', {
                //resolve: {
                //    "check": function ($location, $rootScope) {
                //        if (!$rootScope.loggedIn) {
                //            $location.path('/');
                //        }
                //    }
                //},
                templateUrl: '/scripts/app/templates/master/employee.html',
                controller: 'MasteritemEmployeeController',
                controllerAs: 'ctrl'
            })
            .when('/department', {
                //resolve: {
                //    "check": function ($location, $rootScope) {
                //        if (!$rootScope.loggedIn) {
                //            $location.path('/');
                //        }
                //    }
                //},
                templateUrl: '/scripts/app/templates/master/department.html',
                controller: 'MasteritemDepartmentController',
                controllerAs: 'ctrl'
            })
            //.when('/login', {
            //     templateUrl: '/scripts/app/templates/account/login.html',
            //     controller: 'LoginController',
            //     controllerAs: 'ctrl'
            // })
            //.when('/logout', {
            //    templateUrl: '/scripts/app/templates/account/logout.html',
            //    controller: 'LogoutController',
            //    controllerAs: 'ctrl'
            //})
            .otherwise({ redirectTo: '/home' });

    })
   
    .directive('csSelect', function () {
        return {
            require: '^stTable',
            template: '<input type="checkbox"/>',
            scope: {
                row: '=csSelect',
                addItem: '=addItem'
            },
            link: function (scope, element, attr, ctrl) {

                if (scope.row.isSelected) {
                    element.children().prop('checked', true);
                }

                element.bind('change', function (evt) {
                    scope.$apply(function () {
                        ctrl.select(scope.row, 'multiple');
                        if (scope.addItem) scope.addItem(scope.row);
                    });
                });

                scope.$watch('row.isSelected', function (newValue, oldValue) {
                    if (newValue === true) {
                        element.parent().addClass('st-selected');
                    } else {
                        element.parent().removeClass('st-selected');
                    }
                });
            }
        };
    }).directive('csSingle', function () {
        return {
            require: '^stTable',
            template: '<input type="radio" name="{{itemName}}"/>',
            scope: {
                row: '=csSingle',
                addItem: '=addItem'
            },
            link: function (scope, element, attr, ctrl) {

                scope.itemName = attr['itemName'];

                if (scope.row.isSelected) {
                    element.children().prop('checked', true);
                }

                element.bind('change', function (evt) {
                    scope.$apply(function () {

                        if (scope.addItem) scope.addItem(scope.row);
                    });
                });

                scope.$watch('row.isSelected', function (newValue, oldValue) {
                    if (newValue === true) {
                        element.parent().addClass('st-selected');
                    } else {
                        element.parent().removeClass('st-selected');
                    }
                });
            }
        };
    }).directive('csCalendar', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr, ctrl) {

                if (scope.$last) {
                    $(element.parent()).find('.calendar').datepicker({
                        format: 'dd/mm/yyyy'
                    });
                }

            }
        };
    }
    )
    ;

}())