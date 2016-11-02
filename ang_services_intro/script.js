var app = angular.module('myApp', []);
app.controller ('myController', function($http, $log){
    this.getData = function(){
        this.userInput =
        $http({
            url:'https://itunes.apple.com/search?term='+userInput+'&callback=JSON_CALLBACK',
            method: get,
        }).then(
            function(response){
                $log.log('call success', response);
            },
            function(response){
                $log.log('call failed');
            })

    }

        )
})
