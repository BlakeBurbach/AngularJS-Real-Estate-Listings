ListingsApp.controller('RentalController', ['RealEstateService', function(RealEstateService){
    console.log('RentalController loaded');
    // allow this controller access to manipulate it's html via angular
    let self = this;

    // connect RentalController to RealEstateService
    let listingService = RealEstateService;

    // connect to the GET function for rental listings
    self.getRentalListings = listingService.getRentalListings;
    self.getRentalListings();// display the listings upon page load

    // the rental listing results from database
    self.rentalListings = listingService.rentalListings;

    // connect inputs to POST function to send users new listing
    self.addRentalListing = listingService.addRentalListing;
}]);