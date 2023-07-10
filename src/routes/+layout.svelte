<script lang="ts">
	import '$styles/global.scss';
	import Navigation from './Navigation.svelte';
</script>

<div>
	<Navigation />

	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: 25% 1fr;
		min-height: 100vh;
	}
</style>
