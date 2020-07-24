const seed = require( '@seeds/user' );
const mongoose = require( 'mongoose' );
const config = require( '@config' );

mongoose.connect( config.databaseUrl, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
} );

( async () => {
	try {
		await seed.populateUsers();

		console.log( "Successfully seeded user accounts" );

		process.exit( 0 );
	} catch ( err ) {
		console.log( err );

		process.exit( 1 );
	}
} )();