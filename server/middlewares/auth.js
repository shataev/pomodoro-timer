const User = require( '@models/User' );

module.exports = async ( req, res, next ) => {
	let token;

	try {
		token = req.header( 'authorization' ).split( ' ' )[ 1 ];

		req.user = await User.findByToken( token );
		req.token = token;

		next();
	} catch ( e ) {
		//401 - Authorization error
		return res.status( 401 ).send( { message: 'Authorization error' } );
	}
};