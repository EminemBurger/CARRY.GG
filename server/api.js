const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const championsRoute = require('./routes/champion');
const summonersRoute = require('./routes/summoners');
const runeRoute = require('./routes/rune');

app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use('/champion', championsRoute);
app.use('/summoner' , summonersRoute);
app.use('/rune', runeRoute);

const port = process.env.server_port || 4000;

app.listen(port, () => console.log('server is running!'));