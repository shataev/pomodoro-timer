const Express = require( "express" );
const authRouter = new Express.Router();
const authController = require( "@controllers/v1/auth.controller" );
const authMiddleware = require( '@middlewares/auth' );

authRouter.post( '/register', authController.register );
authRouter.post( '/login', authController.login );
authRouter.get( '/user', authMiddleware, authController.getUser );


module.exports = authRouter;