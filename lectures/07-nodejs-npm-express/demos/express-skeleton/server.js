console.log( 'writing a nifty server!' );

// Load Express
const express = require( 'express' );

// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port to serve our app on
const PORT = process.env.PORT || 4567;

// Define which directory we will serve files from
app.use( express.static( './public' ) );




// Here is one way to set up a route... bats...
app.get( '/bat', function ( request, response ) {
    // console.log( response );
    var numbers = 5 + 3;

    response.sendFile( '/public/bat-country.html', { root: '.'} );
    console.log( 'after sendFile' );
});

// Here is our sneaky secret 'weasels' route...

// Let's 404 everything except for our routes and index.html
app.get( '*', function ( request, response ) {
    console.log( 'they made a request to something??' );
    response.status('404').sendFile( '/public/404.html', { root: '.' } );
});




// Now let's tell the app to listen so that it can do its thing
app.listen( PORT, function () {
    console.log( `listening on ${PORT}` );
});