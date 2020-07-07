const express = require( 'express' );
const app = express();
const path = require( 'path' );

require( "dotenv" ).config( {
	path: path.join( __dirname, "..", ".env.server" )
} );

//Routes
const timersRouter = require( '@routes/v1/timers' );

app.use( "/timers", timersRouter );
//Routes end

const port = process.env.PORT;

app.listen( port, () => {
	console.log( `Started on port ${port}` );
} );