<script lang="ts">
	import CheckIcon from '$components/icons/CheckIcon.svelte';
	import type { Document } from '$types/Document';
	import RobotIcon from '$components/icons/RobotIcon.svelte';
	import { getRandomLabel } from '$lib/labels';
	import Spinner from '$components/Spinner.svelte';
	import { documents } from '$stores/documents';

	export let document: Document;

	let saving = false;
	let label: string;

	const handleInput = (e: any) => (label = e.target?.value);
	const suggest = () => (label = getRandomLabel());

	async function save() {
		try {
			saving = true;

			await documents.updateDocumentLabel(document.id, label?.trim());
		} catch (e: any) {
			alert(e?.message || "Couldn't save changes");
		} finally {
			saving = false;
		}
	}

	$: label = document.label || '';
</script>

<form on:submit|preventDefault={save}>
	<div class="input-container">
		<label for="label"> Label </label>

		<input id="label" placeholder="e.g. china" type="text" value={label} on:input={handleInput} />
	</div>

	<div class="footer">
		<button class="ringed" type="button" on:click={suggest}>
			<RobotIcon />

			Suggest label
		</button>

		<button type="submit" disabled={!label || !label?.trim().length || saving}>
			{#if saving}
				<Spinner />

				Saving...
			{:else}
				<CheckIcon />

				Save label
			{/if}
		</button>
	</div>
</form>

<style lang="scss">
	form {
		padding-top: 2rem;
		margin-top: 2rem;
		border-top: 1.5px solid var(--border-color);
	}

	.input-container {
		display: flex;
		flex-direction: column;

		margin: 1rem 0;

		label {
			color: white;
			margin-bottom: 0.5rem;
			font-size: 0.875rem;
			text-transform: uppercase;
			font-weight: bold;
		}

		input {
			padding: 1.5rem 1rem;
			outline: none;

			background-color: rgb(55, 68, 107);
			border: 1.5px solid var(--border-color);
			color: white;
			font-size: 1rem;
			text-transform: uppercase;

			border-radius: 0.5rem;

			&::placeholder {
				color: var(--border-color);
			}

			&:focus-visible {
				border-color: var(--primary-color);
			}
		}
	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1rem;
	}
</style>
