import { Model } from "@vuex-orm/core";

export default class User extends Model {
	static entity = 'users';

	static fields () {
		return {
			id: this.string( '' ),
			name: this.string( '' ),
			email: this.string( '' ),
			password: this.string( '' ),
			token: this.string( '' ),
			createdAt: this.string( '' ),
			role: this.string( '' ),
			updatedAt: this.string( '' ),
		};
	}

	static $fetch () {
		return this.api().get('/auth/user/all');
	}

	static apiConfig = {
		headers: { 'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFiZGQzY2QxMTUxNzNlODQ5NTYxZmQiLCJpYXQiOjE1OTU2NjE2Mjh9.tKUp95d0cwer8CLlqDcWM9xBxmxclalxKGCPqqIT00w' },
	}
}