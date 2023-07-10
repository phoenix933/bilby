<div class="spinner">
	<div />
	<div />
	<div />
	<div />
</div>

<style lang="scss">
	.spinner {
		display: inline-block;
		position: relative;

		$size: var(--size, 16px);
		$border: calc($size / 8);

		width: $size;
		height: $size;

		div {
			box-sizing: border-box;
			display: block;
			position: absolute;
			width: calc($size - $border);
			height: calc($size - $border);
			margin: 1px;
			border: $border solid var(--color, var);
			border-radius: 50%;
			animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
			border-color: var(--color, black) transparent transparent transparent;

			&:nth-child(1) {
				animation-delay: -0.45s;
			}

			&:nth-child(2) {
				animation-delay: -0.3s;
			}

			&:nth-child(3) {
				animation-delay: -0.15s;
			}
		}
	}

	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
