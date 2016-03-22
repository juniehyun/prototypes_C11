var app = angular.module("protoInstructions", ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider, navigationProvider){

    var toTs = navigationProvider.toTs;

    navigationProvider.protoList = {
        HTML: [
            {
                title: 'HTML-One-Card-Proto',
                date: toTs('2/22/2018 01:00'),
                controller: 'htmlOneCardController',
                template: 'featureSetsB.html'
            },
            {
                title: 'HTML-Responsive-Design',
                date: toTs('1/13/2018 12:00'),
                controller: 'htmlResponsiveDesignController',
                template: 'featureSetsB.html'
            },
            {
                title: 'HTML-Forms',
                date: toTs('1/13/2018 09:00'),
                controller: 'htmlFormsController',
                template: 'featureSetsB.html'
            },
            {
                title: 'HTML-Fundamentals-5',
                date: toTs('1/5/2018 15:00'),
                controller: 'htmlFund5Controller',
                template: 'featureSetsB.html'
            },
            {
                title: 'HTML-Fundamentals-4',
                date: toTs('1/5/2018 12:00'),
                controller: 'htmlFund4Controller',
                template: 'featureSetsB.html'
            },
            {
                title: 'HTML-Fundamentals-3',
                date: toTs('1/5/2018 09:00'),
                controller: 'htmlFund3Controller',
                template: 'featureSetsB.html'
            },
            {
                title: 'HTML-Fundamentals-2',
                date: toTs('1/4/2018 12:00'),
                controller: 'htmlFund2Controller',
                template: 'featureSetsB.html'
            },
            {
                title: 'HTML-Fundamentals-1',
                date: toTs('1/4/2018 09:00'),
                controller: 'htmlFund1Controller',
                template: 'featureSetsA.html'
            }
        ],
        CSS: [
            {
                title: 'CSS-Bootstrap-Redux',
                date: toTs('1/14/2018 16:00'),
                controller: 'cssBsReduxController',
                template: 'featureSetsB.html'
            },
            {
                title: 'CSS-Bootstrap-Grid',
                date: toTs('1/14/2018 18:00'),
                controller: 'cssBsGridController',
                template: 'featureSetsB.html'
            },
            {
                title: 'CSS-Selectors',
                date: toTs('1/12/2018 09:00'),
                controller: 'cssSelectorsController',
                template: 'featureSetsB.html'
            },
            {
                title: 'CSS-Design-Layout-2',
                date: toTs('1/11/2018 12:00'),
                controller: 'cssLayout2Controller',
                template: 'featureSetsB.html'
            },
            {
                title: 'CSS-Design-Layout-1',
                date: toTs('1/11/2018 09:00'),
                controller: 'cssLayout1Controller',
                template: 'featureSetsB.html'
            }
        ],
        JS: [
            {
                title: 'JS-AJAX',
                date: toTs('2/08/2018 10:00'),
                controller: 'jsAjaxController',
                template: 'featureSetsB.html'
            },
            {
                title: 'JS-Event-Delegation',
                date: toTs('1/26/2018 13:00'),
                controller: 'jsEventDelegationController',
                template: 'featureSetsB.html'
            },
            {
                title: 'JS-Repeat-Blocks',
                date: toTs('1/26/2018 11:00'),
                controller: 'jsLoopsController',
                template: 'featureSetsB.html'
            },
            {
                title: 'JS-Ref-Data-Types',
                date: toTs('1/23/2018 19:00'),
                controller: 'jsRefDataTypesController',
                template: 'featureSetsB.html'
            },
            {
                title: 'JS-DOM-Creation',
                date: toTs('1/22/2018 11:00'),
                controller: 'jsDomCreationController',
                template: 'featureSetsB.html'
            },
            {
                title: 'JS-jQuery',
                date: toTs('1/21/2018 10:00'),
                controller: 'jsJqueryController',
                template: 'featureSetsB.html'
            },
            {
                title: 'JS-Functions',
                date: toTs('1/20/2018 12:00'),
                controller: 'jsFunctionsController',
                template: 'featureSetsB.html'
            },
            {
                title: 'JS-DOM-Events',
                date: toTs('1/20/2018 09:00'),
                controller: 'jsDomEventsController',
                template: 'featureSetsB.html'
            },
            {
                title: 'JS-Comparisons-Conditionals',
                date: toTs('1/19/2018 15:00'),
                controller: 'jsCompCondController',
                template: 'featureSetsB.html'
            },
            {
                title: 'JS-Special-Data-Types',
                date: toTs('1/19/2018 10:00'),
                controller: 'jsSpecDataTypesController',
                template: 'featureSetsB.html'
            },
            {
                title: 'JS-Primitive-Data-Types',
                date: toTs('1/18/2018 14:00'),
                controller: 'jsPrimDataTypesController',
                template: 'featureSetsB.html'
            }
        ],
        PHP: [
            {
                title: 'PHP-Intro',
                date: toTs('3/03/2018 11:00'),
                controller: 'phpIntroController',
                template: 'featureSetsB.html'
            },
            {
                title: 'PHP-MySQL',
                date: toTs('3/09/2018 15:00'),
                controller: 'phpMysqlController',
                template: 'featureSetsB.html'
            },
            {
                title: 'PHP-Directory-Operations',
                date: toTs('3/07/2018 10:00'),
                controller: 'phpDirOpsController',
                template: 'featureSetsB.html'
            },
            {
                title: 'PHP-File-Upload',
                date: toTs('3/22/2018 11:30'),
                controller: 'phpFileUploadController',
                template: 'featureSetsB.html'
            },
            {
                title: 'PHP-Includes',
                date: toTs('3/04/2018 11:00'),
                controller: 'phpIncludesController',
                template: 'featureSetsB.html'
            },
            {
                title: 'PHP-Mail-Example',
                date: toTs('3/21/2018 11:00'),
                controller: 'phpMailerController',
                template: 'featureSetsB.html'
            },
            {
                title: 'PHP-Sessions',
                date: toTs('3/07/2018 10:00:01'),
                controller: 'phpSessionsController',
                template: 'featureSetsB.html'
            },
            {
                title: 'PHP-Super-Globals',
                date: toTs('3/04/2018 11:00'),
                controller: 'phpSuperGlobalsController',
                template: 'featureSetsB.html'
            },
            {
                title: 'PHP-User-Auth',
                date: toTs('3/18/2018 11:00'),
                controller: 'phpUserAuthController',
                template: 'featureSetsB.html'
            },
            {
                title: 'PHP-RegEx',
                date: toTs('3/21/2018 11:00'),
                controller: 'phpRegexController',
                template: 'featureSetsB.html'
            }
        ],
        AngularJS: [
            {
                title: 'AngularJS-Intro',
                date: toTs('3/03/2018 15:00'),
                controller: 'angIntroController',
                template: 'featureSetsB.html'
            },
            {
                title: 'AngularJS-DOM-Events',
                date: toTs('3/04/2018 11:30'),
                controller: 'angDomEventsController',
                template: 'featureSetsB.html'
            },
            {
                title: 'AngularJS-Controllers',
                date: toTs('3/04/2018 15:00'),
                controller: 'angControllersController',
                template: 'featureSetsB.html'
            },
            {
                title: 'AngularJS-Routes',
                date: toTs('3/07/2018 10:00'),
                controller: 'angRoutesController',
                template: 'featureSetsB.html'
            },
            {
                title: 'AngularJS-Services-Intro',
                date: toTs('3/07/2018 10:00'),
                controller: 'angServiceIntroController',
                template: 'featureSetsB.html'
            },
            {
                title: 'AngularJS-Services-Creation',
                date: toTs('3/08/2018 14:00'),
                controller: 'angServiceCreationController',
                template: 'featureSetsB.html'
            },
            {
                title: 'AngularJS-Directive-Creation',
                date: toTs('3/10/2018 12:00'),
                controller: 'angDirectiveCreationController',
                template: 'featureSetsB.html'
            }
        ],
        Databases: [
            {
                title: 'Databases-MySQL-Basics',
                date: toTs('3/09/2018 15:00'),
                controller: 'mysqlBasicsController',
                template: 'featureSetsB.html'
            },
            {
                title: 'Databases-Firebase-Intro',
                date: toTs('3/09/2018 15:00'),
                controller: 'fbIntroController',
                template: 'featureSetsB.html'
            }
        ],
        Tutorials: [
            {
                title: 'Tutorials-Dev-Tools-Mobile-View',
                date: toTs('1/13/2018 12:01'),
                controller: 'dtMobileViewController',
                template: 'tutorials.html'
            }
        ],
        Example: [
            {
                title: 'Example-1',
                date: toTs('1/4/2018 08:00'),
                controller: 'exampleController',
                template: 'featureSetsA.html'
            }
        ]
    };

   $routeProvider
       .when('/', {
          templateUrl: 'assets/templates/default.html',
          controller: 'mainController'
       })
       .when('/AngularJS', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'angController'
       })
       .when('/Bootstrap', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'bootstrapController'
       })
       .when('/CSS', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'cssController'
       })
       .when('/HTML', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'htmlController'
       })
       .when('/JS', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'jsController'
       })
       .when('/PHP', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'phpController'
       })
       .when('/Databases', {
           templateUrl: 'assets/templates/lang.html',
           controller: 'dbController'
       })
       .when('/Tutorials', {
           templateUrl: 'assets/templates/lang.html',
           controller: 'tutorialController'
       })
       .when('/Example', {
           templateUrl: 'assets/templates/default.html',
           controller: 'mainController'
       })
       .otherwise({
           redirectTo: '/'
       });

    var list = navigationProvider.protoList;
    var pn = navigationProvider.pastNow;

    for(var k in list){
        if(list.hasOwnProperty(k)) {
            var length = list[k].length;
            for (var i = 0; i < length; i++) {
                var proto = list[k][i];
                if (pn(proto.date)) {
                    $routeProvider.when('/' + proto.title, {
                        templateUrl: "assets/templates/" + proto.template,
                        controller: proto.controller,
                        controllerAs: 'fs'
                    });
                }
            }
        }
    }
});