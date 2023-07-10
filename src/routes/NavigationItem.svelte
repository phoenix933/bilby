<script lang="ts">
	import Chip from '$components/Chip.svelte';
	import DocumentIcon from '$components/icons/DocumentIcon.svelte';
	import type { Document } from '$types/Document';

	export let document: Document;
	export let selected: boolean;
</script>

<li class:selected>
	<a href="/{document.id}">
		<DocumentIcon />

		<span>
			{document.title}
		</span>

		{#if document.label}
			<Chip>{document.label}</Chip>
		{/if}
	</a>
</li>

<style lang="scss">
	li {
		border-radius: 1rem;
		transition: background-color 0.25s ease-in-out;
		margin-top: 1rem;

		&.selected {
			background-color: rgb(15, 186, 129);
			color: black;

			&:hover {
				a {
					opacity: 1;
				}
			}
		}

		a {
			padding: 1rem;
			color: inherit;

			:global(svg) {
				flex-basis: 1rem;
				flex-shrink: 0;
			}

			span {
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
		}
	}
</style>
