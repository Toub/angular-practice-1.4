(function () {
    'use strict';

    angular
        .module('tpAngular.profile')
        .controller('TpaProfileUserEditController', TpaProfileUserEditController);

    function TpaProfileUserEditController($scope, $log) {

        // view model
        var vm = this;

        // public attributes
        vm.user;

        // public methods
        vm.getFullName = getFullName;
        vm.reset = reset;

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
            return vm.user.firstName + ' ' + vm.user.lastName;
        }
        
        function reset(){
            vm.user = {
                firstName: 'John',
                lastName: 'Smith'
            };
        }

    }
}());