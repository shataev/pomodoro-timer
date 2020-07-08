const Express = require( "express" );
const timersRouter = new Express.Router();
const timersController = require( "@controllers/v1/timers.controller" );

timersRouter.get( '/', timersController.timersList );
timersRouter.post('/new', timersController.createTimer);

module.exports = timersRouter;

