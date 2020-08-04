const path = require( 'path' );

function resolve ( dir ) {
	return path.join( __dirname, dir );
}


module.exports = {
	chainWebpack: config => {
		config
			.entry( "app" )
			.clear()
			.add( "./client/main.js" )
			.end();

		config.resolve.alias
			.set( '@', resolve( './client' ) );
	},
	devServer: {
		port: process.env.PORT,
		proxy: `http://localhost:${process.env.SERVER_PORT}`
	}
};