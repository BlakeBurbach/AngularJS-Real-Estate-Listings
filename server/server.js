const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const listingRouter = require('./routes/listing.router.js');

app.use('/listings', listingRouter);

app.use(express.static('server/public'));

app.listen(PORT, (req, res)=>{
    console.log(`Server running on port ${PORT}`);
});
