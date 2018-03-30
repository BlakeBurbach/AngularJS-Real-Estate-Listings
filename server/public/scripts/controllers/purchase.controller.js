ListingsApp.controller('PurchaseController', ['RealEstateService', function(RealEstateService){
    console.log('PurchaseController loaded');
    let self = this;

    let listingService = RealEstateService;

    self.getListings = listingService.getListings;
    self.getListings();

    self.listingsArray = listingService.listingsArray;
}]);