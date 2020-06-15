<template>
	<header class="page-header w-full h-12 flex justify-between px-2 pt-2 text-white">
		<div class="page-header__logo">
			<router-link to="/" class="logo__img flex w-3 h-3 bg-blue-700"></router-link>
		</div>
		<div class="page-header__buttons flex items-center">
			<router-link to="/login"
					class="page-header__button button-login mr-5 text-lg cursor-pointer hover:opacity-75">Sign
				In</router-link>
			<router-link to="register"
					class="page-header__button register-button mr-5 text-lg cursor-pointer hover:opacity-75">Register
			</router-link>
		</div>
	</header>
</template>

<script>
	export default {
		name: "Header"
	};
</script>

<style scoped>
	.logo__img {
		width: 3em;
		height: 3em;
		background: url("../assets/images/tomato.png") no-repeat 0 0.3em;
		background-size: contain;
	}
</style>