const Mongoose = require( 'mongoose' );
const TimerSchema = new Mongoose.Schema( {
	title: String,
	type: String,
	duration: Number
} );
const Timer = Mongoose.model( "Timer", TimerSchema );

module.exports = Timer;