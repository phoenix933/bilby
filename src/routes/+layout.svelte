<script lang="ts">
	import '$styles/global.scss';
	import { documents } from '$stores/documents';
	import Navigation from './Navigation.svelte';
	import Spinner from '$components/Spinner.svelte';
</script>

{#await documents.get()}
	<div class="center">
		<Spinner --size="50px" --color="white" />

		Loading..
	</div>
{:then docs}
	<div class="layout">
		<Navigation />

		<main>
			<slot />
		</main>
	</div>
{:catch error}
	<div class="center">
		{error?.message}
	</div>
{/await}

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

	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		height: 100vh;

		font-size: 2rem;
	}
</style>
