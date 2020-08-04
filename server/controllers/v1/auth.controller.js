const User = require( '@models/User' );

exports.register = async ( req, res ) => {
	const { name, email, password, role } = req.body;

	try {
		const user = await User.create( {
			name,
			email,
			password,
			role
		} );

		const token = await user.generateAuthToken();

		return res
			.status( 201 )
			.header( 'authorization', `Bearer ${token}` )
			.json( user );
	} catch ( err ) {
		//Если ошибка возникает на стороне mongoose,
		//создаем из нее стандартную
		if ( err.name === 'MongoError' ) {
			err = new Error( err.errmsg );
		}

		res.status( 400 ).send( { message: `Failed to register: ${err.message}`, error: err } );
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

exports.getAllUsers = async ( req, res ) => {

	try {
		const users = await User.find({});

		res.send( users );

	} catch ( err ) {
		res.status( 400 ).send( err );
	}
};

