const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const championsRoute = require('./routes/champion');


app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use('/champion', championsRoute);


app.listen(4000, () => console.log('server is running!'));