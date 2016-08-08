(function () {
    'use strict';

    angular.module('ExpenseClaimApp.prettycash')
        .controller('PrettyCashController', ['$scope', 'PrettycashApi', 'DropDownApi', '$uibModal', prettyCashController])
    ;

    function prettyCashController($scope, PrettycashApi, DropDownApi, $uibModal) {
        var vm = this;

        activated();

        function activated() {

            vm.millrolls = [];
         
            vm.displayed = [];

            vm.line = {
                displayed: [],
                data: []
            }

            vm.dropdown = {
               
            };


            angular.element(document).ready(function () {
                angular.element('.calendar').datepicker({ format: 'dd/mm/yyyy' });

                //angular.element('#thick').popover({
                //    title: 'Required !',
                //    content: 'Please input thick',
                //    placement: 'bottom'
                //});
            });

        }

    }

}());