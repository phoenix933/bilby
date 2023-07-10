<script lang="ts">
	import type { Document } from '$types/Document';
	import Label from '$components/Label.svelte';
	import ShareIcon from '$components/icons/ShareIcon.svelte';
	import LabelForm from './LabelForm.svelte';
	import { documents } from '$stores/documents';
	import { page } from '$app/stores';

	$: document = $documents.find((doc) => doc.id === $page.params.id) as Document;
</script>

<article>
	<h1>
		{document.title}
	</h1>

	<div>
		{#if document.label}
			<Label>{document.label}</Label>
		{/if}

		<a href={document.url} target="_blank" title="Full article">
			<ShareIcon />

			Read full article
		</a>
	</div>

	<p>
		{document.body}
	</p>

	<LabelForm {document} />
</article>

<style lang="scss">
	article {
		background: rgba(73, 90, 143, 0.2);

		border-radius: 1.5rem;
		padding: 2rem;

		h1 {
			margin-bottom: 1rem;
		}

		div {
			display: flex;
			align-items: center;
			height: 40px;

			margin-bottom: 2rem;

			a {
				margin-left: auto;
				color: rgb(15, 186, 129);
			}
		}

		p {
			margin: 0;
			color: rgb(210, 214, 227);
			line-height: 2rem;
		}
	}
</style>
