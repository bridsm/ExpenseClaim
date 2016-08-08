(function () {
    'use strict';

    angular.module('ExpenseClaimApp')
        .factory('DropDownApi', ['$resource', dropDownApi])
    ;

    function dropDownApi($resource) {
        return $resource('/api/dropdown', null, {
            //capmt: { method: 'GET', url: '/api/dropdown/capmt', isArray: true },
            //itmg: { method: 'GET', url: '/api/dropdown/itmg', isArray: true },
            //sltmt: { method: 'POST', url: '/api/dropdown/sltmt', isArray: true},
            //ospo: { method: 'POST', url: '/api/dropdown/ospo', isArray: true},
            //mrnumber: { method: 'GET', url: '/api/dropdown/mrnumber', isArray: true },
            //metb: { method: 'GET', url: '/api/dropdown/metb', isArray: true }
        });
    }

}());