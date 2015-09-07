(function () {

        'use strict';

        angular.module('tpAngular', ['tpAngular.profile', 'mgcrea.ngStrap', 'ngMessages', 'ui.router']);

        angular.module('tpAngular'.config(function ($stateProvider, $urlRouterProvider) {

                // For any unmatched url, redirect to /state1
                // TODO $urlRouterProvider.otherwise(...);

                // Now set up the states
                $stateProvider
                    .state('edit-user', {
                        url: "/profile/user/edit",
                        templateUrl: 'profile/profile.user-edit.html',
                        controller: 'TpaProfileUserEditController'
                    });
            });

        })();