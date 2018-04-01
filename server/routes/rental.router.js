const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET function to retrieve rental data from database
router.get('/', (req, res) => {
    // get all of the rental data function for Postico
    let queryText = `SELECT * FROM rentals ORDER BY id ASC`;
    pool.query(queryText).then((result)=>{
        const listingsArray = result.rows;
        console.log(listingsArray);
        res.send(listingsArray);
    }).catch((err)=>{
        res.sendStatus(500);
    }); // end pool.query
}); // end router.get

// POST function to send user's listing data to database
router.post('/', (req, res) => {
    let rental = req.body;
    // add user's listing data to listing database under rentals
    let queryText = `INSERT INTO rentals (cost, sqft, type, city)
                     VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [rental.cost, rental.sqft, rental.type, rental.city]).then( (result) => {
        console.log('rental router POST success', result);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('rental router POST error', err);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.post

// DELETE function to remove listing from database
router.delete('/:id', (req, res) => {
    let listingId = req.params.id;
    let queryText = `DELETE FROM rentals WHERE id = $1`;
    pool.query(queryText, [listingId]).then( (response) => {
        console.log('rental router DELETE success', response);
        res.sendStatus(200);
    }).catch( (err) => {
        console.log('rental router DELETE error', error);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.delete

module.exports = router;