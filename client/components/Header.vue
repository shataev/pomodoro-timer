<template>
	<header class="page-header w-full flex justify-between p-4 text-white">
		<router-link to="/" class="page-header__logo flex items-center text-xl">
			<div class="logo__text">Tomat</div>
			<div class="logo__img flex mx-1 w-3 h-3"></div>
			<div class="logo__text">Timer</div>
		</router-link>
		<div class="page-header__buttons flex items-center">
			<router-link to="/login"
						 class="page-header__button button-login mr-5 text-lg cursor-pointer hover:opacity-75">Sign
				In
			</router-link>
			<router-link to="register"
						 class="page-header__button register-button text-lg cursor-pointer hover:opacity-75">Register
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
		width: 2em;
		height: 2em;
		background: url("../assets/images/tomato-colored.svg") no-repeat 0 0;
		background-size: contain;
	}
</style>