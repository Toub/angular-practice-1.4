(function () {

    'use strict';

    angular.module('tpAngular', []);

    angular.module('tpAngular').controller('TpaProfileUserEditController', TpaProfileUserEditController);

    function TpaProfileUserEditController($scope, $log) {

        // public attributes
        $scope.user = {
            firstName: 'John'
        };

        // public methods
        $scope.getFullName = getFullName;
        
        // initialization
        init();

        function init() {
            $log.info('Initializing controller...');
        }
        
        function getFullName(){
            // TODO
        }
        
    }


})();