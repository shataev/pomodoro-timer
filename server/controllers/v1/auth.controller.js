const User = require( '@models/User' );

exports.register = async ( req, res ) => {
	const { name, email, password } = req.body;

	try {
		const user = await User.create( {
			name,
			email,
			password
		} );

		const token = await user.generateAuthToken();

		return res
			.status( 201 )
			.header( 'authorization', `Bearer ${token}` )
			.json( user );
	} catch ( e ) {
		res.status( 400 ).send( { message: `Failed to register: ${e.errmsg}`, error: e } );
	}
};

exports.login = async ( req, res ) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOneByCredentials( email, password );
		const token = await user.generateAuthToken();

		res
			.header( 'authorization', `Bearer ${token}` )
			.send( { user } );
	} catch ( err ) {
		res.status( 400 ).send( err );
	}
};

exports.getUser = async ( req, res ) => {
	res.send( { user: req.user } );
};

