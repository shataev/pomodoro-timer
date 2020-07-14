const expect = require( 'expect' );
const app = require( '@server' );
const request = require( 'supertest' );
const Timer = require( '@models/Timer' );

//Перед началом теста удаляем все записи таблицы Timer
//Затем проверяем, что после запуска теста в таблице появилась одна запись,
//и ее поля, например title, совпадают с полями созданного в процессе теста объекта
beforeEach( async () => Timer.deleteMany() );

describe( 'POST /timers/new', () => {
	it( 'should create new timer', async () => {
		const body = {
			title: 'testTimer',
			type: 'work',
			duration: 45
		};

		const result = await request( app )
			.post( '/timers/new' )
			.send( body )
			.expect( 201 );

		expect( result.body.title ).toBe( body.title );

		const timers = await Timer.find();

		expect( timers.length ).toBe( 1 );
		expect( timers[ 0 ].title ).toBe( body.title );

	} );
} );