<script lang="ts">
	import { getDocuments } from '$api/documents';
	import { onMount } from 'svelte';

	let documents: any[] = [];

	onMount(async () => {
		documents = await getDocuments();
	});
</script>

<div>
	<aside>
        <h1>Documents</h1>

		<ul>
			{#each documents as doc}
				<li class="selected">
					{doc.title}
					{doc.title}
				</li>
			{/each}
		</ul>
	</aside>

	<main />
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: 25% 1fr;
		min-height: 100vh;
	}

	aside {
		background-color: rgb(44, 54, 86);
		border: 1px solid rgba(73, 90, 143, 0.3);
		color: white;
		padding: 1rem;

		ul {
			list-style-type: none;
			padding: 0;
			margin: 0;

			li {
				padding: 0.5rem 1rem;
				overflow: hidden;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				height: 2rem;
				margin-top: 0.25rem;
				cursor: pointer;
                border-radius: 1.5rem;

                &.selected {
                    background-color: rgb(15, 186, 129);
                    color: black;
                }
			}
		}
	}
</style>
