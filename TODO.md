TO DO List

- Database 
    - [x] Create the database "listings" in postico
    - [x] create the table "listings" and populate with the data from 
         listings.sql   
    
- npm init
    - [x] npm install express
    - [x] install body-parser
    - [x] install angular
    - [x] install angular-route
    - [x] install pg

- setup folder hierarchy
    - [x] create gitignore
    - [x] create folder 'server'
        - [x] inside 'server' folder:
            - [x] server.js file
            - [x] routes folder
                - [x] listings.routes.js
            - [x] modules folder:
                - [x] pool.js
            - [x] public folder:
                - [x] index.html
                - [x] views folder:
                    - [x] purchase.html
                    - [x] rental.html
                    - [x] template folder:
                        - [x] nav.html
                - [x] scripts folder:
                    - [x] client.js
                    - [x] controller folder:
                        - [x] rental.controller.js
                        - [x] purchase.controller.js
                    - [x] services folder:
                        - [x] realEstate.service.js
                - [x] styles folder:
                    - [x] styles.css
                - [x] vendors folder:
                    - [x] angular
                    - [x] angular-route

- [x] HTML setup 
    - [x] source in vendors and js client, controllers, and services
    - [x] create html structure with ng-app, ng-include, ng-view
    - [x] create the views - purchase and rental html structures
    - [x] create nav.html structures in templates

- [x] JS setup
    - [x] create the ListingsApp in client.js
        - [x] setup the $routeProvider in client
    - [x] setup the controller structures for purchase and rental
        - [] create the connections between views and service
    - [x] setup the ListingService structure in services
        - [] create the functions for POST and GET
    
                