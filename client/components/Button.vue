<template>
	<button type="button"
			@click="$emit('click')"
			class="pomodoro-timer__button w-40 my-3 px-3 py-1 text-white rounded hover:opacity-75 focus:outline-none">{{label}}
	</button>
</template>

<script>
	export default {
		name: "Button",
		props: {
			label: {
				required: true,
				type: String,
				default: 'Button'
			}
		}
	};
</script>

<style scoped>
	.is-disabled {
		pointer-events: none;
		opacity: 0.4;
	}
</style>