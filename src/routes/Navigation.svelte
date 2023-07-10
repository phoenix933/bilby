<script lang="ts">
	import { page } from '$app/stores';
	import { documents } from '$stores/documents';
	import NavigationItem from './NavigationItem.svelte';
</script>

<aside>
	<h1>Documents</h1>

	<ul>
		{#each $documents as document}
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

		height: 100vh;
		overflow-y: scroll;

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
