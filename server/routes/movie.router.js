const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// ---- GET ALL MOVIES ---- //
router.get('/', (req, res) => {
    const queryText =   `SELECT * FROM "movies";`
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT movie query', error);
            resl.sendStatus(500);
        });
}); // end GET ALL MOVIES



module.exports = router;