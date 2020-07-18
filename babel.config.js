module.exports = {
	presets: [
		'@vue/cli-plugin-babel/preset'
	],
	"plugins": [
		[
			"module-resolver",
			{
				"root": [
					"./"
				],
				"alias": {
					"@server": "./server",
					"@client": "./client",
					"@store": "./client/store",
					"@components": "./client/components",
					"@validators": "./server/validators",
					"@middlewares": "./server/middlewares",
					"@pages": "./client/pages",
					"@config": "./server/config",
					"@controllers": "./server/controllers",
					"@routes": "./server/routes",
					"@models": "./server/models"
				}
			}
		]
	]
};
