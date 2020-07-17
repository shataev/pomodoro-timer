const User = require( '@models/User' );

exports.register = async ( req, res ) => {
	const { name, email, password } = req.body;

	try {
		const user = await User.create( {
			name,
			email,
			password
		} );

		console.log( 'from controller ', user );

		const token = await user.generateAuthToken();

		return res
			.status( 201 )
			.header( 'authorization', `Bearer ${token}` )
			.json( user );
	} catch ( e ) {
		res.status( 400 ).send( { message: `Failed to register: ${e.errmsg}`, error: e } );
	}
};

exports.getUser = async ( req, res ) => {
	let token;

	try {
		token = req.header( 'authorization' ).split( ' ' )[ 1 ];

		const user = await User.findByToken( token );

		res.send( { user } );
	} catch ( e ) {
		//401 - Authorization error
		return res.status( 401 ).send( { message: 'Authorization error' } );
	}
};

