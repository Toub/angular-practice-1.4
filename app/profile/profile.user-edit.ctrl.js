(function () {
    'use strict';

    angular
        .module('tpAngular.profile')
        .controller('TpaProfileUserEditController', TpaProfileUserEditController);

    function TpaProfileUserEditController($scope, $log, $state, $stateParams) {

        // view model
        var vm = this;

        // public attributes
        vm.user;

        // public methods
        vm.getFullName = getFullName;
        vm.reset = reset;
        vm.getAgeInYears = getAgeInYears;
        vm.employedUpdated = employedUpdated;
        vm.submit = submit;

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
        
        function submit(userForm){
            userForm.$setSubmitted();
            
            if (userForm.$valid){
                $state.go('edit-password', {firstName: vm.user.firstName});
            }
        }
        
        function reset(){
            
            vm.user = {
                firstName: $stateParams.firstName ? $stateParams.firstName : 'John',
                lastName: null,
                email: 'john.smith@sqli.com',
                birthdate: moment("01/07/1980", "DD/MM/YYYY").toDate(),
                gender: 'male',
                employed: true,
                salary: 10000
            };
        }
        
        function getAgeInYears() {
            if (!vm.user.birthdate) {
                return null;
            }
            var years = moment(new Date()).diff(moment(vm.user.birthdate), 'years', false);
            if (years >= 0) {
                return years;
            } else {
                return null;
            }
        }
        
        function employedUpdated(){
            if (!vm.user.employed) {
                vm.user.salary = null;
            }
        }

    }
}());