const express = require('express');
const router = express.Router();
const game = require('../services/game.js');
const util = require('util');

router.get('/', async function(req, res, next) {
    try {
        //res.json(util.inspect(await game.getSongs()));
        res.json(await game.getSongs());
    } catch (err) {
        console.error('Error while getting songs: ', err.message);
        next(err);
    }
});

module.exports = router;