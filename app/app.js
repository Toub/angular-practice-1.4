(function () {

    'use strict';

    angular.module('tpAngular', ['tpAngular.profile', 'mgcrea.ngStrap', 'ngMessages', 'ui.router']);

    angular.module('tpAngular').config(function ($stateProvider, $urlRouterProvider) {

        // states configuration
        $stateProvider
            .state('edit-user', {
                url: "/profile/user/edit",
                templateUrl: 'profile/profile.user-edit.html',
                controller: 'TpaProfileUserEditController'
            });

        // default route
        $urlRouterProvider.otherwise('/profile/user/edit');


    });

})();