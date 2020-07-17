const Express = require( "express" );
const authRouter = new Express.Router();
const authController = require( "@controllers/v1/auth.controller" );

authRouter.post('/register', authController.register);
authRouter.get('/user', authController.getUser);


module.exports = authRouter;