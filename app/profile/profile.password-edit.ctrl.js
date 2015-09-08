(function () {
    'use strict';

    angular
        .module('tpAngular')
        .controller('TpaProfilePasswordEditController', TpaProfilePasswordEditController);

    /** @ngInject */
    function TpaProfilePasswordEditController($scope) {

        // view model
        var vm = this;

        // public attributes

        // initialization
        init();

        function init() {
        }

        return vm;

    }
}());
