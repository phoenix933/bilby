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
		grid-template-columns: 30% 1fr;
		height: 100vh;
		overflow: hidden;

		main {
			padding: 1rem 2rem;

			overflow-y: scroll;
		}
	}
</style>
