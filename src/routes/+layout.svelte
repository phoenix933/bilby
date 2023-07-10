<script lang="ts">
	import '$styles/global.scss';

	import { getDocuments } from '$api/documents';
	import { onMount } from 'svelte';
	import Navigation from './Navigation.svelte';

	let documents: any[] = [];

	onMount(async () => {
		documents = await getDocuments();
	});
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
