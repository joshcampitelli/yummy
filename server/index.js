const express = require('express')
const app = express()
const port = 3000
const yelp = require('./yelp');
const cors = require('cors');

app.use(cors());

app.get('/restaurant_data', async (req, res) => {
    let result = await yelp.getNearby(44.428600, -78.273560, 20000, 5, '1, 2, 3, 4', 5);
    res.send(result);
})

app.listen(port, () => {
    console.log(`Yummy server listening at http://localhost:${port}`)
})