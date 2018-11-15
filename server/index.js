const express = require('express');
const app = express();
const api = require('./api');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

api(app);
app.listen(8888);