<script lang="ts">
	import '$styles/global.scss';
	import Navigation from './Navigation.svelte';
	import Spinner from '$components/Spinner.svelte';
</script>

<div class="layout">
	<Navigation />

	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.layout {
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
