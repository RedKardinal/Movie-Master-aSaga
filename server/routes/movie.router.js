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

// ---- GET ID OF MOVIES ---- //

router.get('/:id', (req, res)=> {
    console.log('In ROUTER GET ID', req.params);
    const sqlText = 
                            
                            // `SELECT "movies".id, "movies".poster, "movies".title, "movies".description, "genres".name FROM "movies"
                            // JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
                            // JOIN "genres" ON "genres".id = "movies_genres".genres_id
                            // WHERE "movies".id = $1;`;

                            `SELECT "movies".id, "movies".poster, "movies".title, "movies".description, "genres".name AS "genre_name" FROM "movies"
                            JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
                            JOIN "genres" ON "genres".id = "movies_genres".genres_id
                            WHERE "movies".id = $1;`;                 
    value = req.params.id                  
    pool.query(sqlText, [value] )
    .then((response)=>{
      res.send(response.rows);})
    .catch((error) => {
        console.log('Error GET ID', error);
      res.sendStatus(500);
    });
}); // end ID request


// router.get('/details/:id', (req, res) => {
//     const queryText = 
//         `SELECT "movies".id, "movies".poster, "movies".title, "movies".description, "genres".name FROM "movies"
//         JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
//         JOIN "genres" ON "genres".id = "movies_genres".genres_id
//         WHERE "movies".id = $1;`;
//         pool.query(queryText, [req.params.id])
//           .then((result) => { res.send(result.rows); })
//           .catch((err) => {
//             console.log('Error completing SELECT movie query', err);
//             res.sendStatus(500);
//           });
//       });



module.exports = router;