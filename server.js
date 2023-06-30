const express = require('express');

const morgan = require('morgan')
morgan.token('input', function(req, res) {
    const input = Object.assign(req.body);
    return Object.keys(input).length ? JSON.stringify(input) : '-';
});

const app = express();
const port = 3300;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(morgan('[:date] [:method :url] :status [request body::input]')); // for setting format of morgan

app.listen(port, () => {
    console.log('connect success!');
});

const router = require('./router');
Object.keys(router).map(r => {
    app.use(`/${r}`, router[r]);
});