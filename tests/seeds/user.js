const User = require( '@models/User' );
const { ObjectId } = require( 'mongodb' );
const faker = require( 'faker' );
const jwt = require( 'jsonwebtoken' );
const config = require( '@config' );

const createSeedUsers = ( count ) => {
	let seedUsers = [];

	for ( let userCount = 0; userCount < count; userCount++ ) {
		const userOneObjectId = new ObjectId();

		const seedUser = {
			_id: userOneObjectId,
			name: faker.name.firstName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
			token: jwt.sign( { _id: userOneObjectId }, config.jwtSecret )
		};

		seedUsers.push( seedUser );
	}

	return seedUsers;
};

const seedUsers = createSeedUsers( 2 );

const populateUsers = async () => {
	await User.deleteMany();

	for ( const seedUser of seedUsers ) {
		await new User( seedUser ).save();
	}
};


module.exports = {
	seedUsers,
	populateUsers,
	createSeedUsers
};