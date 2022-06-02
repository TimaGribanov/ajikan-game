const db = require('./db.js');

async function getSongs() {
    const data = await db.query(
        'SELECT title_ja, title_ro, title_en, spotify_uri FROM songs'
    );

    return data;
}

module.exports = { getSongs };