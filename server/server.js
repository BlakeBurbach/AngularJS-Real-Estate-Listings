const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const rentalRouter = require('./routes/rental.router.js');
const purchaseRouter = require('./routes/purchase.router.js');

app.use('/listings/rentals', rentalRouter);
app.use('/listings/purchases', purchaseRouter);

app.use(express.static('server/public'));

app.listen(PORT, (req, res)=>{
    console.log(`Server running on port ${PORT}`);
});
