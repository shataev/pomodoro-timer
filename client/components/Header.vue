<template>
	<header class="page-header w-full h-12 flex justify-between px-2 text-white">
		<div class="page-header__logo">
			<div class="logo__img w-3 h-3 bg-blue-700"></div>
		</div>
		<div class="page-header__buttons">
			<div class="page-header__button button-login">Sign In</div>
			<div class="page-header__button register-button">Register</div>
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