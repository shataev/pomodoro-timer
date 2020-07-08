const Express = require( 'express' );
const BodyParser = require('body-parser');
const app = Express();
const config = require('@config');

app.use( BodyParser.json() );

//Database connection
const mongoose = require( 'mongoose' );
mongoose.connect( config.databaseUrl, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
} );
//Database connection end

//Routes
const timersRouter = require( '@routes/v1/timers' );

app.use( "/timers", timersRouter );
//Routes end

app.listen( config.port, () => {
	console.log( `Started on port ${config.port}` );
} );