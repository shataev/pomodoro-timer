const express = require( "express" );
const timersRouter = new express.Router();

const timersController = require( "@controllers/v1/timers.controller" );

timersRouter.get( '/', timersController.timersList );

module.exports = timersRouter;

