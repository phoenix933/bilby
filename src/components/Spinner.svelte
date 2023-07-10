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
		width: 16px;
		height: 16px;

		div {
			box-sizing: border-box;
			display: block;
			position: absolute;
			width: 13px;
			height: 13px;
			margin: 1px;
			border: 2px solid var(--color, black);
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
