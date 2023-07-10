<script lang="ts">
	import ShareIcon from '$components/icons/ShareIcon.svelte';

	export let data;

	$: document = data.document;
</script>

<article>
	<h1>
		{document.title}
	</h1>

	<a href={document.url} target="_blank" title="Full article">
		<ShareIcon />

		Read full article
	</a>

	<p>
		{document.body}
	</p>
</article>

<style lang="scss">
	article {
		background: rgba(73, 90, 143, 0.2);

		border-radius: 1.5rem;
		padding: 2rem;

		h1 {
			margin-bottom: 1rem;
		}

		a {
			background-color: rgb(15, 186, 129);
			color: black;
			padding: 1rem;
			border-radius: 1rem;

			margin-bottom: 2rem;
		}

		p {
			margin: 0;
			color: rgb(210, 214, 227);
			line-height: 2rem;
		}
	}
</style>
