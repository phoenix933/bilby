<script lang="ts">
	import { getDocuments } from '$api/documents';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import NavigationItem from './NavigationItem.svelte';

	let documents: any[] = [];

	onMount(async () => {
		documents = await getDocuments();
	});
</script>

<aside>
	<h1>Documents</h1>

	<ul>
		{#each documents as document}
			{@const selected = $page.params.id === document.id}

			<NavigationItem {document} {selected} />
		{/each}
	</ul>
</aside>

<style lang="scss">
	aside {
		border-right: 2px solid rgba(73, 90, 143, 0.3);
		color: white;
		padding: 1rem;

		h1 {
			padding-left: 1rem;
		}

		ul {
			list-style-type: none;
			padding: 0;
			margin: 0;

			overflow-x: scroll;
		}
	}
</style>
