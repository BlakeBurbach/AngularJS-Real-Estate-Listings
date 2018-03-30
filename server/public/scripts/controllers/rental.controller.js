ListingsApp.controller('RentalController', ['RealEstateService', function(RealEstateService){
    console.log('RentalController loaded');
    let self = this;

    let listingService = RealEstateService;

    self.getListings = listingService.getListings;
    self.getListings();

    self.listingsArray = listingService.listingsArray;
}]);