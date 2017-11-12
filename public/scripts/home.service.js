myApp.service('HomeService', function($http, $location){
    console.log('HomeService Loaded');
    
    var self = this
    self.dogArray = {data: []}

    self.getDogs = function() {
        console.log('HS getDogs running')
        $http({
            method: 'GET',
            url: '/dog'
        }).then(function(res) {
            console.log('HS Get response', res)
            self.dogArray.data = (res.data)
            console.log('HS Get response.data', self.dogArray.data)
        })
    }



});


