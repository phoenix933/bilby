<script lang="ts">
	import CheckIcon from '$components/icons/CheckIcon.svelte';
	import RobotIcon from '$components/icons/RobotIcon.svelte';
	import { getRandomLabel } from '$lib/labels';

	export let label = '';

	function suggestLabel() {
		label = getRandomLabel();
	}
</script>

<form>
	<div class="input-container">
		<label for="label"> Label </label>

		<input id="label" placeholder="E.g. china" type="text" value={label || ''} />
	</div>

	<div class="footer">
		<button class="ringed" type="button" on:click={suggestLabel}>
			<RobotIcon />

			Suggest label
		</button>

		<button type="submit">
			<CheckIcon />

			Save changes
		</button>
	</div>
</form>

<style lang="scss">
	form {
		padding-top: 2rem;
		margin-top: 2rem;
		border-top: 1.5px solid rgb(73, 90, 143);
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
			border: 1.5px solid rgb(73, 90, 143);
			color: white;
			font-size: 1rem;
			text-transform: uppercase;

			border-radius: 0.5rem;

			&::placeholder {
				color: rgb(73, 90, 143);
			}

			&:focus-visible {
				border-color: rgb(15, 186, 129);
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
