const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const purchaseRouter = require('./routes/purchase.router.js');
const rentalRouter = require('./routes/rental.router.js');

app.use('/listings', purchaseRouter);
app.use('/listings', rentalRouter);

app.use(express.static('server/public'));

app.listen(PORT, (req, res)=>{
    console.log(`Server running on port ${PORT}`);
});
