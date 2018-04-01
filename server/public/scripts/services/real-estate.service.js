ListingsApp.service('RealEstateService', ['$http', function($http){
    console.log('RealEstateService is loaded');
    // allow service a connection to all controllers
    let self = this;
   
    self.allListings = { list: [] }; // empty object that will hold listing data for DOM
        // GET function to get all listing data from server
    self.getListings = function(){
        $http.get('/listings').then(function(response){
            console.log('getListings success', response);
            self.allListings.list = response.data;
            // set the response data to object array to display on DOM
        }).catch(function(error){
            console.log('getListings error', error);
        }); // end $http GET
    } // end getListings
    self.getListings(); // call to display on DOM upon page load

        // POST function to send user's listing to server
    self.addListing = function(newListing){
        $http.post('/listings', newListing).then(function(response){
            console.log('addListing success', response);
            self.getListings();
        }).catch(function(error){
            console.log('addListing error', error);
        }); // end $http POST
    } // end addListing

    // DELETE function to delete purchase listing from database
    self.removeListing = function(listing){
        $http.delete(`/listings/${listing.id}`).then(function(result){
            console.log('removeListing DELETE success', result);
            self.getListings();
        }).catch(function(error){
            console.log('removeListing DELETE error', error);
        }); // end $http DELETE
    } // end removeListings
}]);