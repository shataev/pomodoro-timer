module.exports = function ( req, res, next ) {
	if ( req.user && req.user.role === 'admin' ) {
		next();
	} else {
		//403 - Forbidden
		res.status( 403 ).send( { message: 'Only admin users can take this action.' } );
	}
};