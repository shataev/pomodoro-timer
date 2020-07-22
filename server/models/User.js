const Mongoose = require( 'mongoose' );
const validator = require( 'validator' );
const jwt = require( 'jsonwebtoken' );
const config = require( '@config' );
const bcrypt = require( 'bcryptjs' );
const UserSchema = new Mongoose.Schema( {
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 2
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		validate: {
			validator: validator.isEmail,
			message: "{VALUE} is not a valid email"
		}
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 6
	},
	token: {
		type: String
	},
	createdAt: {
		type: Date
	},
	updatedAt: {
		type: Date
	}
} );

UserSchema.methods.generateAuthToken = async function () {
	const token = jwt.sign(
		{ _id: this._id.toHexString() },
		config.jwtSecret
	).toString();

	this.token = token;

	await this.save();

	return token;
};

UserSchema.statics.findByToken = async function ( token ) {
	try {
		const { _id } = jwt.verify( token, config.jwtSecret );
		return this.findOne( { _id, token } );
	} catch ( e ) {
		throw err;
	}
};

UserSchema.pre( 'save', async function ( next ) {
	if ( this.isModified( 'password' ) ) {
		try {
			this.password = await bcrypt.hash( this.password, 8 );
			this.createdAt = new Date();
			next();
		} catch ( err ) {
			next( err );
		}
	} else {
		next();
	}
} );

module.exports = Mongoose.model( "User", UserSchema );