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
}