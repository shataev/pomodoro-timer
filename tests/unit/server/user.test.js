const expect = require( 'expect' );
const app = require( '@server' );
const request = require( 'supertest' );
const User = require( '@models/User' );
const { seedUsers, populateUsers } = require( '@seeds/user' );

//Перед началом теста удаляем все записи таблицы users
beforeEach( populateUsers );

describe( 'GET/auth/user', () => {
	it( 'Should return user if authenticated', async () => {
		const res = await request( app )
			.get( '/auth/user' )
			.set( 'authorization', `Bearer ${seedUsers[ 0 ].token}` )
			.expect( 200 );

		expect( res.body.user._id ).toBe( seedUsers[ 0 ]._id.toHexString() );
	} );
} );