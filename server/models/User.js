const Mongoose = require( 'mongoose' );
const validator = require('validator');
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
	}
} );
const User = Mongoose.model( "User", UserSchema );

module.exports = User;