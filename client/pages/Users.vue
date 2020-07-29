<template>
	<div class="wrapper">
		<h1>User List</h1>
		<ul>
			<li v-for="user in users">
				Name: {{user.name}}
				<br>
				Role: {{user.role}}
			</li>
		</ul>
	</div>
</template>

<script>
	import User from '@store/models/User';

	export default {
		name: "Users",
		computed: {
			users: () => User.all(),
		},
		created () {
			User.create( {
				data: {
					id: 1,
					name: 'Serega',
					role: 'user'
				}
			} );
		}

	};
</script>

<style scoped>

</style>