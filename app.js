const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const gameRoute = require('./routes/gameRoute.js');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://timagribanov.github.io");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);

app.get('/', (req, res) => {
    res.json({message: 'OK'});
});

app.use('/songs', gameRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});