ListingsApp.service('RealEstateService', ['$http', function($http){
    console.log('RealEstateService is loaded');
    // allow service a connection to all controllers
    let self = this;
    // --------------------------------- PurchaseController connections --------------------------------//
    self.purchaseListings = { list: [] }; // empty object that will hold listing data for DOM
        // GET function to get purchase listing data from server
    self.getPurchaseListings = function(){
        $http.get('/listings/purchases').then(function(response){
            console.log('getPurchaseListings success', response);
            self.purchaseListings.list = response.data;
            // set the response data to object array to display on DOM
        }).catch(function(error){
            console.log('getPurchaseListings error', error);
        }); // end $http GET
    } // end getPurchaseListings
    self.getPurchaseListings(); // call to display on DOM upon page load

        // POST function to send user's listing to server
    self.addPurchaseListing = function(newListing){
        $http.post('/listings/purchases', newListing).then(function(response){
            console.log('addPurchaseListing success', response);
            self.getPurchaseListings();
        }).catch(function(error){
            console.log('addPurchaseListing error', error);
        }); // end $http POST
    } // end addPurchaseListing

    // DELETE function to delete purchase listing from database
    self.removePurchaseListing = function(listing){
        $http.delete(`/listings/purchases/${listing.id}`).then(function(result){
            console.log('removePurchaseListing DELETE success', result);
            self.getPurchaseListings();
        }).catch(function(error){
            console.log('removePurchaseListing DELETE error', error);
        }); // end $http DELETE
    } // end removePurchaseListings


    // ---------------------------------- RentalController connections ----------------------------------// 

    self.rentalListings = { list: [] }; // empty object to hold listing data for DOM
        // GET function to get rental listing data from server
    self.getRentalListings = function(){
        $http.get('/listings/rentals').then(function(response){
            console.log('getRentalListings success', response);
            // set the response data to object array to display on DOM
            self.rentalListings.list = response.data;
        }).catch(function(error){
            console.log('getRentalListings error', error);
        }); // end $http
    };// end getRentalListings
    self.getRentalListings(); // call to display on DOM upon page load

    // POST function to send user's listing to server
    self.addRentalListing = function(newListing){
        $http.post('/listings/rentals', newListing).then(function(response){
            console.log('addRentalListing success', response);
            self.getRentalListings();
        }).catch(function(error){
            console.log('addRentalListing error', error);
        }); // end $http POST
    } // end addRentalListing

    // DELETE function to delete rental listing from database
    self.removeRentalListing = function(listing){
        $http.delete(`/listings/rentals/${listing.id}`).then(function(result){
            console.log('removeRentalListing DELETE success', result);
            self.getRentalListings();
        }).catch(function(error){
            console.log('removeRentalListing DELETE error', error);
        }); // end $http DELETE
    } // end removeRentalListings
}]);