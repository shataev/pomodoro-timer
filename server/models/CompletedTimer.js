const Mongoose = require( 'mongoose' );
const CompletedTimerSchema = new Mongoose.Schema( {
	timerId: String,
	taskId: String,
} );
const CompletedTimer = Mongoose.model( "CompletedTimer", CompletedTimerSchema );

module.exports = CompletedTimer;