const User = require( '@models/User' );
const { ObjectId } = require( 'mongodb' );
const faker = require( 'faker' );
const jwt = require( 'jsonwebtoken' );
const config = require( '@config' );


let seedUsers = [];

for ( let userCount = 0; userCount < 10; userCount++ ) {
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

const populateUsers = async () => {
	await User.deleteMany();
	await User.insertMany( seedUsers );
};


module.exports = {
	seedUsers,
	populateUsers
};