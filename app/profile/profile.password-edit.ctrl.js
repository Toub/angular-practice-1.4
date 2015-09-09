(function () {
    'use strict';

    angular
        .module('tpAngular')
        .controller('TpaProfilePasswordEditController', TpaProfilePasswordEditController);

    /** @ngInject */
    function TpaProfilePasswordEditController($stateParams) {

        // view model
        var vm = this;
        vm.firstName = $stateParams.firstName ? $stateParams.firstName : 'John';

        // public attributes

        // initialization
        init();

        function init() {
        }

        return vm;

    }
}());
