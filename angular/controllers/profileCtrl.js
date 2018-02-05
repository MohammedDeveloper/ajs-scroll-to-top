/**
 * Profile controller
 */
myModule.controller("profileCtrl", ["$state", "$scope",
    function ($state, $scope) {

        /**
         * redirect to about
         */
        $scope.Redirect = function () {
            $state.go("about");
        };
    }]);