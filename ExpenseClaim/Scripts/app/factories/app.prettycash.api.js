(function () {
    'use strict';

    angular.module('ExpenseClaimApp')
        .factory('PrettycashApi', ['$resource', prettycashApi])
    ;

    function PrettycashApi($resource) {
        return $resource('/api/prettycash', null, {
            //list: { method: 'POST', url: '/api/millroll/list', isArray: false },
            //listB: { method: 'POST', url: '/api/millroll/listB', isArray: false },
            //searchplan: { method: 'POST', url: '/api/millroll/searchplan', isArray: true },
            //addPlan: { method: 'POST', url: '/api/millroll/addplan', isArray: true },
            //getByPlantNo: { method: 'GET', url: '/api/millroll/byplantno', isArray: true },
            //remove: { method: 'DELETE', url: '/api/millroll/remove', isArray: false },
            //updatePlan: { method: 'PUT', url: '/api/millroll/updateplan', isArray: true },
            //getTotalPlan: { method: 'POST', url: '/api/millroll/totalplan', isArray: true }
        });
    }

}());