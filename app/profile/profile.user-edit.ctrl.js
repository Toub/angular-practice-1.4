(function () {
    'use strict';

    angular
        .module('tpAngular.profile')
        .controller('TpaProfileUserEditController', TpaProfileUserEditController);

    angular
        .module('tpAngular.profile').directive('awDatepickerPattern',function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope,elem,attrs,ngModelCtrl) {
      var dRegex = new RegExp(attrs.awDatepickerPattern);

      ngModelCtrl.$parsers.unshift(function(value) {

        if (typeof value === 'string') {
          var isValid = dRegex.test(value);
          ngModelCtrl.$setValidity('date',isValid);
          if (!isValid) {
            return undefined;
          }
        }

        return value;
      });

    }
  };
});
    
    function TpaProfileUserEditController($scope, $log) {

        // view model
        var vm = this;

        // public attributes
        vm.user;

        // public methods
        vm.getFullName = getFullName;
        vm.reset = reset;
        vm.getAgeInYears = getAgeInYears;
        vm.employedUpdated = employedUpdated;

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