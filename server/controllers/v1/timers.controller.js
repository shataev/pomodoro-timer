const Timer = require( '@models/Timer' );

exports.timersList = ( req, res ) => {
	res.send( {
		message: "It works from timers controller"
	} );
};

exports.createTimer = async ( req, res ) => {
	const { title, type, duration } = req.body;

	try {
		const timer = await Timer.create( {
			title,
			type,
			duration
		} );

		return res.status( 201 ).json( timer );
	} catch (e) {
		console.log(e)
	}
};