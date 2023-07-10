<script lang="ts">
	import { getDocuments } from '$api/documents';
	import { onMount } from 'svelte';

	let documents: any[] = [];

	onMount(async () => {
		documents = await getDocuments();
	});
</script>

<div>
	Please select a document
</div>

<style lang="scss">
	
</style>
