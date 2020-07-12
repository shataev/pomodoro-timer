const User = require( '@models/User' );

exports.register = async ( req, res ) => {
	const { name, email, password } = req.body;

	console.log( name );

	try {
		const user = await User.create( {
			name,
			email,
			password
		} );

		return res.status( 201 ).json( user );
	} catch ( e ) {
		res.status( 400 ).send( { message: "Failed to register" } );
	}
};