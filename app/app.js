(function () {

    'use strict';

    angular.module('tpAngular', []);

    angular.module('tpAngular').controller('TpaProfileUserEditController', TpaProfileUserEditController);

    function TpaProfileUserEditController($scope, $log) {

        // public attributes
        $scope.user;

        // public methods
        $scope.getFullName = getFullName;
        $scope.reset = reset;

        // initialization
        init();

        function init() {
            $log.info('Initializing controller...');

            reset();
            
            $scope.$on('$destroy', onDestroy);
        }

        function onDestroy() {
            $log.info('Releasing resources...');
        }

        function getFullName() {
            return $scope.user.firstName + ' ' + $scope.user.lastName;
        }
        
        function reset(){
            $scope.user = {
                firstName: 'John',
                lastName: 'Smith'
            };
        }

    }


})();