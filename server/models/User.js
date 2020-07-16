const Mongoose = require( 'mongoose' );
const validator = require( 'validator' );
const jwt = require( 'jsonwebtoken' );
const config = require( '@config' );
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
	}
} );

UserSchema.methods.generateAuthToken = async function () {
	const token = jwt.sign(
		{ _id: this._id.toHexString() },
		config.jwtSecret
	).toString();

	this.token = token;

	await this.save();

	console.log('from model', this);
	return token;
};

module.exports = Mongoose.model( "User", UserSchema );