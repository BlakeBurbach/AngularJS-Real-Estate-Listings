ListingsApp.controller('RentalController', ['RealEstateService', function(RealEstateService){
    console.log('RentalController loaded');
    let self = this;

    let listingService = RealEstateService;

    self.getRentalListings = listingService.getRentalListings;
    self.getRentalListings();

    self.rentalListings = listingService.rentalListings;
}]);