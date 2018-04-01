ListingsApp.controller('PurchaseController', ['RealEstateService', function(RealEstateService){
    console.log('PurchaseController loaded');
    // allow this controller access to manipulate it's html via angular
    let self = this;

    // connect PurchaseController to RealEstateService
    let listingService = RealEstateService;

    // connect to the GET function for purchase listings
    self.getPurchaseListings = listingService.getPurchaseListings;
    self.getPurchaseListings(); // display the listings upon page load
    // the purchase listing results from database
    self.purchaseListings = listingService.purchaseListings;

    // connect inputs to POST function to send users new listing
    self.addPurchaseListing = listingService.addPurchaseListing;

    // connect delete button to DELETE function to delete from database
    self.removePurchaseListing = listingService.removePurchaseListing;
}]);