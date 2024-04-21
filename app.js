const express = require( "express" );

const app = express(); 

app.use( cors() );
app.use( express.json() )

app.get( "/", ( req, res ) =>
{
	res.send( "Welcome to Streaming Guide" );
} );

app.get( "*", ( req, res ) =>
{
	res.status( 404 ).send( "Page Not Found!" );
} );

module.exports = app;