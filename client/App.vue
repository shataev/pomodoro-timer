<template>
	<div id="app" class="h-screen w-full flex flex-col bg-blue-900">
		<app-header></app-header>
		<router-view></router-view>
	</div>
</template>
<script>
	import Header from '@/components/Header.vue';

	export default {
		components: {
			'app-header': Header
		}
	};
</script>
<style>
</style>
