<template>
  <div id="app" class="h-screen w-full flex justify-center align-middle bg-blue-900">
    <timer></timer>
  </div>
</template>
<script>
	import Timer from './views/Timer.vue';

	export default {
		components: {
			Timer
        }
    }
</script>
<style>
</style>
