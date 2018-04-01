TO DO List
                                            BASE MODE
- [x] Initial Database setup
    - Create the database "listings" in postico
    - create two tables "rentals" and "purchases" and populate with the data from 
      listings.sql   
    
- [x] npm init
    - npm install express
    - install body-parser
    - install angular
    - install angular-route
    - install pg

- [x] setup folder hierarchy
    - for server 
        - server.js, routes, modules
    - for public
        - html: index, views, templates
        - scripts:client, controllers, and services
        - css
        - vendors

- [x] Initial HTML setup 
    - source in vendors and js client, controllers, and services
    - create html structure with ng-app, ng-include, ng-view
    - create the views - purchase and rental html structures
    - create nav.html structures in templates

- [x] Initial JS setup
    - create the ListingsApp in client.js
        - setup the $routeProvider in client
    - setup the controller structures for purchase and rental
        - create the connections between views and service
    - setup the ListingService structure in services
        - create the functions for GET

- [x] get the server side up and running
    - bring in express, body-parser, setup PORT, and routes to database
    - create a pool.js to setup a connection to Postico postgreSQL database
    - setup a router for rental
    - setup a router for purchases
    - create a GET request to SQL database to retrieve listing info
         from both rental and purchases
    - send back listing info from database to client

- [x] database
    - create a 'listings' database. 
        - create two tables 
            - purchases - with all 'sale' listings
            - rentals - with all 'rent' listings

- [x] on the client side 
    - Create two separate get functions:
        - one for all 'sale' listings
        - one for all 'rent' listings
    - send to respective htmls and display listings

- [x] create POST requests to allow a user to create listings of their own
    - client-side:
        - inputs and a button on both 'for sale' and 'for rent' htmls 
        - two post requests in real-estate.service
            - one for puchases and one for rentals

    - server-side: 
        - in both routers, a POST to send user's listing info to database
        - the GET functions will then send back to client to display on DOM
    
                                            HARD MODE

- [x] create a DELETE route in client and server
    - client-side:
        - add a delete button on every listing on html
        - add a DELETE function in service
    
    - server-side:
        - create a DELETE route to delete listing from database


                                            STRETCH GOALS

- 