var app = angular.module('sgtApp', []);

app.provider('sgtData', function(){
    //Create a variable to hold this
    var self = this;

    //Create a variable to hold your api key but set it to an empty string
    self.apiKey = '';

    //Create a variable to hold the API url but set it to an empty string
    self.apiUrl = '';

    //Add the necessary services to the function parameter list
    this.$get = function($http, $q, $log){
        //return an object that contains a function to call the API and get the student data
        //Refer to the prototype instructions for more help

        //everything below object is what is accessible in the provider for the controller
        return {
            call_api: function(){
                var data = "api_key=" + self.apiKey;
                $log.log(data);
                return $http({
                    url: self.apiUrl,
                    method: 'post',
                    data: data,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}

                })
            }
        };

    };
});


//Config your provider here to set the api_key and the api_url
app.config(function(sgtDataProvider){
    sgtDataProvider.apiKey = '0KbFUJKZiD';
    sgtDataProvider.apiUrl = 'http://s-apis.learningfuze.com/sgt/get';
})

//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function($log, sgtData){
    //Create a variable to hold this, DO NOT use the same name you used in your provider
    var ioSelf = this;
    //Add an empty data object to your controller, make sure to call it 'data'
    ioSelf.data = {};
    //Add a function called getData to your controller to call the SGT API
    ioSelf.getData = function(){
        $log.info('Get function called');
        sgtData.call_api().then(function(response){
            $log.info('In success call', response);
            ioSelf.data = response.data;
        },
            function(){
            $log.error('unable to retrieve data');
            }
        )
    }

});