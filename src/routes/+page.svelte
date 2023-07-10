<script lang="ts">
	import { getDocuments } from '$api/documents';
	import { onMount } from 'svelte';

	let documents: any[] = [];

	onMount(async () => {
		documents = await getDocuments();
	});
</script>

{#each documents as doc}
	<p>{doc.title}</p>
{/each}
