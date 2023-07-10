<script lang="ts">
	export let data;

	$: document = data.document;
</script>

<article>
	<h1>
		{document.title}
	</h1>

	<p>
		{document.body}
	</p>
</article>

<style lang="scss">
	p {
		line-height: 2rem;
	}
</style>
