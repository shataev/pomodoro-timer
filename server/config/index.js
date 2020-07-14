const path = require( 'path' );
const dotenv = require( "dotenv" );

dotenv.config( {
	path: path.join( __dirname, "../..", ".env.server" )
} );

module.exports = {
	databaseUrl: process.env.NODE_ENV === 'test' ? process.env.DATABASE_URL_TEST : process.env.DATABASE_URL,
	port: process.env.PORT || 8090,
	jwtSecret: process.env.JWT_SECRET || 'OYaUca15gEIR7i70ZrIa'
};