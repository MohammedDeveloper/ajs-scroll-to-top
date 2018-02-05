/**
 * Creating the module's router for this app
 */
// <script src="angular/app.module.js"></script>
// <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>

/// set the router configuration...
myModule.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider) {

    /// scroll to top...
    $uiViewScrollProvider.useAnchorScroll();

    /// default route...
    $urlRouterProvider.otherwise('profile');

    /// routes using state provider...
    $stateProvider
        .state('profile', {
            url: '/profile',
            templateUrl: "angular/templates/profile.html",
            controller: 'profileCtrl'
        })
        .state('contactus', {
            url: '/contactus',
            templateUrl: "angular/templates/contactUs.html"
        })
        .state('about', {
            url: '/about',
            templateUrl: "angular/templates/about.html"
        });

    /// use the HTML5 History API
    $locationProvider.html5Mode(true);
});