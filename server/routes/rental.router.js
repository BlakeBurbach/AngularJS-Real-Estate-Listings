const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res)=>{
    let queryText = `SELECT * FROM listings WHERE type = 'rent' ORDER BY id ASC`;
    pool.query(queryText).then((result)=>{
        const listingsArray = result.rows;
        console.log(listingsArray);
        res.send(listingsArray);
    }).catch((err)=>{
        res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
    
});

module.exports = router;