const express = require( 'express' );
const app = express();
const path = require( 'path' );

require( "dotenv" ).config( {
	path: path.join( __dirname, "..", ".env.server" )
} );

const port = process.env.PORT;

app.listen( 3000, () => {
	console.log( `Started on port ${port}`);
} );