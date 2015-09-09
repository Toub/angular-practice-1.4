(function () {

    'use strict';

    angular.module('tpAngular', ['tpAngular.profile', 'mgcrea.ngStrap', 'ngMessages', 'ui.router']);

    angular.module('tpAngular').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        // HTML5 mode
        $locationProvider.html5Mode(true);

        // states configuration
        $stateProvider
            .state('edit-user', {
                url: "/profile/user/edit/:firstName",
                templateUrl: 'profile/profile.user-edit.html',
                controller: 'TpaProfileUserEditController',
                controllerAs: 'userVm',
                params: {
                    firstName: {
                        // default value
                        value: 'Peter'
                    }
                }
            })
            .state('edit-password', {
                url: "/profile/password/edit/",
                templateUrl: 'profile/profile.password-edit.html',
                controller: 'TpaProfilePasswordEditController',
                controllerAs: 'passwordVm',
                params: {
                    // additional paramter (not in url) & default value
                    firstName: 'Peter'
                }
            });

        // default route
        $urlRouterProvider.otherwise('/profile/user/edit/');

    });

})();