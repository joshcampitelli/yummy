const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const yelp = require('./yelp');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.post('/restaurant_data', async (req, res) => {
    const { latitude, longitude, radius, price, offset } = req.body;
    let result = await yelp.getNearby(latitude, longitude, radius, price, offset);
    res.send(result);
})

app.listen(port, () => {
    console.log(`Yummy server listening at http://localhost:${port}`)
})