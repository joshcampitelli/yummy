const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const yelp = require('./yelp');
const cors = require('cors');

const httpServer = require('http').createServer(app);

// Note: Can specify specific IP:port in an array
// Ex: IOS Empulator / Web respectively: ['http://localhost:19000', 'http://localhost:19006']
const options = { 
    cors: {
        origin: '*'
    }
};

const io = require('socket.io')(httpServer, options);

app.use(cors());
app.use(bodyParser.json());

app.post('/restaurant_data', async (req, res) => {
    const { latitude, longitude, radius, price, offset } = req.body;
    let result = await yelp.getNearby(latitude, longitude, radius, price, offset);
    res.send(result);
})

//Whenever someone connects this gets executed
io.on('connection', function (socket) {
    console.log('A device has connected (', socket.id, ')');
    socket.on('create-room', (arg) => {
        console.log('Host requested to create room');
        socket.emit('result')
    });

    socket.on('join-room', (arg) => {
        console.log('User request to join room: ', arg);
    });

    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
        console.log('A device has disonnected (', socket.id, ')');
    });
});


httpServer.listen(port, () => {
    console.log(`Yummy server listening at http://localhost:${port}`)
})