myApp.controller('HomeController', function(HomeService) {
    console.log('HomeController created');
    
    var vm = this;

    vm.dogArray = HomeService.dogArray

    vm.getDogs = function() {
        HomeService.getDogs();
        console.log('HC getDogs running');
        console.log('hc- dogArray', vm.dogArray);
    }

});//end HomeController