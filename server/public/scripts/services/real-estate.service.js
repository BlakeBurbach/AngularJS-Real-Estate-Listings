ListingsApp.service('RealEstateService', ['$http', function($http){
    console.log('RealEstateService is loaded');
    let self = this;

    self.purchaseListings = { list: [] }; 

    self.getPurchaseListings = function(){
        $http.get('/listings').then(function(response){
            console.log('getPurchaseListings success', response);
            self.purchaseListings.list = response.data;
        }).catch(function(error){
            console.log('getPurchaseListings error', error);
        });
    }
    self.getPurchaseListings();

    self.rentalListings = { list: [] };

    self.getRentalListings = function(){
        $http.get('/listings').then(function(response){
            console.log('getRentalListings success', response);
            self.rentalListings.list = response.data;
        }).catch(function(error){
            console.log('getRentalListings error', error);
        });
    };
    self.getRentalListings();
}]);