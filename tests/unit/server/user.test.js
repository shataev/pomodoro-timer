const expect = require( 'expect' );
const bcrypt = require( 'bcryptjs' );
const app = require( '@server' );
const request = require( 'supertest' );
const User = require( '@models/User' );
const { seedUsers, populateUsers, createSeedUsers } = require( '@seeds/user' );

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

	//Если пользователь не авторизован, т.е. в запросе нет заголовка 'Authorization',
	//ответ от сервера должен приходить со статусом 401 и без данных
	it( 'Should return 401 if unauthenticated', async () => {
		const res = await request( app )
			.get( '/auth/user' )
			.expect( 401 );

		expect( res.body.user ).toBeUndefined();
	} );

	//Если пользователь админ, то ему доступен список пользователей
	it( 'Should return user list if user admin', async () => {
		const res = await request( app )
			.get( '/auth/user/all' )
			.set( 'authorization', `Bearer ${seedUsers[ 0 ].token}` )
			.expect( 200 );

		expect( res.body.users.length ).toBeGreaterThan( 0 );
	} );

	//Если пользователь не админ, то список пользователей ему не доступен
	it( 'Should return 403 if user is not admin', async () => {
		const res = await request( app )
			.get( '/auth/user/all' )
			.set( 'authorization', `Bearer ${seedUsers[ 1 ].token}` )
			.expect( 403 );

		expect( res.body.users ).toBeUndefined();
	} );
} );

describe( 'POST/auth/register', () => {

	//Создание нового пользователя
	it( 'Should create user', async () => {
		const { name, email, password } = createSeedUsers( 1 )[ 0 ];

		const res = await request( app )
			.post( '/auth/register' )
			.send( { name, email, password } )
			.expect( 201 );

		expect( res.header.authorization ).toBeDefined();
		expect( res.body.email ).toBe( email );

		const doc = await User.findOne( { email } );
		expect( doc ).toBeTruthy();

		//Простая проверка того, что пароль сохраняемый пароль
		//не равен паролю в базе, потому что последний должен быть захэширован
		const isEqualPassword = await bcrypt.compare( password, doc.password );

		expect( doc.password ).not.toBe( password );
		expect( isEqualPassword ).toBe( true );
	} );

	//Пользователь с некорректными данными создаваться не должен
	it( 'Should not create an user with invalid data', async () => {
		await request( app )
			.post( '/auth/register' )
			.send( {} )
			.expect( 400 );

		const users = await User.find();

		//Проверяем, что к этому моменту в базе есть 2 записи в таблице users
		//2 - потому что перед каждым тестом запускется функция populateUsers
		expect( users.length ).toBe( 2 );
	} );

	//Новый пользователь с имейлом, который уже есть в базе создаваться не должен
	it( 'Should not create a new user with duplicate email', async () => {
		const user = await User.find()[ 0 ];

		await request( app )
			.post( '/auth/register' )
			.send( user )
			.expect( 400 );

		const users = await User.find();

		expect( users.length ).toBe( 2 );
	} );
} );