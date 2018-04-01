const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET function to retrieve purchase data from database
router.get('/', (req, res) => {
    // get all of the purchase data function for Postico
    let queryText = `SELECT * FROM purchases ORDER BY id ASC`;
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
    let sale = req.body;
    // add user's listing data to listing database under purchases
    let queryText = `INSERT INTO purchases (cost, sqft, type, city)
                     VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [sale.cost, sale.sqft, sale.type, sale.city]).then( (result) => {
        console.log('purchase router POST success', result);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('purchase router POST error', err);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.post

// DELETE function to remove listing from database
router.delete('/:id', (req, res) => {
    let listingId = req.params.id;
    let queryText = `DELETE FROM purchases WHERE id = $1`;
    pool.query(queryText, [listingId]).then( (response) => {
        console.log('purchase router DELETE success', response);
        res.sendStatus(200);
    }).catch( (err) => {
        console.log('purchase router DELETE error', error);
        res.sendStatus(500);
    }); // end pool.query
}); // end router.delete

module.exports = router;