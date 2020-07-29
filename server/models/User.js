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
	role: {
		type: String,
		enum: [ 'user', 'admin' ],
		default: 'user'
	},
	updatedAt: {
		type: Date
	}
}, {
	toJSON: {
		transform: ( doc, { _id, name, email, password, token, createdAt, role, updatedAt } ) => {
			return { id: _id, name, email, password, token, createdAt, role, updatedAt };
		}
	}
} );

UserSchema.methods.generateAuthToken = async function () {
	if ( this.token ) {
		return this.token;
	}

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

UserSchema.statics.findOneByCredentials = async function ( email, password ) {
	const user = await this.findOne( { email } );

	if ( !user ) {
		throw {
			errors: {
				email: {
					message: 'User not found.'
				}
			}
		};
	} else {
		if ( await bcrypt.compare( password, user.password ) ) {
			return user;
		} else {
			throw {
				errors: {
					email: {
						message: 'Incorrect password.'
					}
				}
			};
		}
	}
};

UserSchema.pre( 'save', async function ( next ) {
	try {
		if ( this.isModified( 'password' ) ) {
			this.password = await bcrypt.hash( this.password, 8 );
			this.createdAt = new Date();
		}


		if ( this.isModified( 'role' ) && this.role === 'admin' ) {
			const adminUsers = await this.constructor.find( { role: 'admin' } );

			if ( adminUsers.length >= 1 ) {
				next( new Error( 'Only one admin user can be added.' ) );
			}
		}

		next();
	} catch ( err ) {
		next( err );
	}
} );

module.exports = Mongoose.model( "User", UserSchema );