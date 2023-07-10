<script lang="ts">
	export let ringed = false;
</script>

<span class:ringed>
	<slot />
</span>

<style lang="scss">
	span {
		padding: 0.5rem 1rem;

		background-color: var(--secondary-color);
		border: 2px solid transparent;

		color: white;
		border-radius: 1.5rem;

		font-size: 0.75rem;
		font-weight: bold;
		text-align: center;
		text-transform: uppercase;

		&.ringed {
			border-color: var(--secondary-color);
			background-color: transparent;
		}
	}
</style>
