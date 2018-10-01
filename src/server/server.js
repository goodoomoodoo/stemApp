import express from 'express';

// HTML template function
import { template } from './template';

// Port number
const PORT = process.env.PORT || 3000;

// Start new app
const app = express();

// Host the static public folder
app.use( express.static( 'public' ) );

// GET method
app.get( '*', ( req, res ) => {

    // indexHTML
    const indexHTML = template();

    res.send( indexHTML );
});

// Listen to call
app.listen( PORT, () => {
    console.log( `Listening on PORT:${PORT}` );
});