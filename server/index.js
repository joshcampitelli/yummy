const express = require('express')
const app = express()
const port = 3000
const yelp = require('./yelp');
const cors = require('cors');

app.use(cors());

app.get('/restaurant_data', async (req, res) => {
    let result = await yelp.getNearby(45.424721, -75.695000, 2000, 5, '1, 2, 3, 4');
    res.send(result);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})