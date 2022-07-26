const express = require('express');
const app = express();
const port = 3300;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(port, () => {
    console.log('connect success!');
});

const router = require('./router');
Object.keys(router).map(r => {
    app.use(`/${r}`, router[r], (req, res) => {
        console.log(res);
    });
});
