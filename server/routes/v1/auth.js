const Express = require( "express" );
const authRouter = new Express.Router();
const authController = require( "@controllers/v1/auth.controller" );

authRouter.post('/register', authController.register);

module.exports = authRouter;