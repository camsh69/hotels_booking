const express = require('express');
const app = express();
const MongoClient = require("mongodb").MongoClient;

const cors = require('cors');
const createRouter = require("./helpers/create_router.js")

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('hotel');
    const bookingsCollection = db.collection('bookings');
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter);
  })
  .catch(console.error);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});