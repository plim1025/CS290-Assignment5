/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Paul Lim
 * Email: limp@oregonstate.edu
 */

const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const twitData = require('./twitData.json');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: null}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {twitData: twitData});
  res.status(200);
});

app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => console.log("== Server is listening on port", port));
