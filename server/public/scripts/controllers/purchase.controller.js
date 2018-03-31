ListingsApp.controller('PurchaseController', ['RealEstateService', function(RealEstateService){
    console.log('PurchaseController loaded');
    let self = this;

    let listingService = RealEstateService;

    self.getPurchaseListings = listingService.getPurchaseListings;
    self.getPurchaseListings();

    self.purchaseListings = listingService.purchaseListings;
}]);