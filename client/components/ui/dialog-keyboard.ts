let escapeInProgress = false;

export function isDialogEscapeInProgress() {
	return escapeInProgress;
}

export function getTopDialog(): HTMLElement | undefined {
	return Array.from(document.querySelectorAll<HTMLElement>('[data-dialog-layer]'))
		.filter((element) => element.isConnected)
		.sort((a, b) => Number(a.dataset.dialogLayer) - Number(b.dataset.dialogLayer))
		.at(-1);
}

// Radix dismisses on keydown; the timer listens on keyup. Keep this listener
// alive through unmount so one Escape gesture cannot both close and reset.
export function consumeEscapeUntilKeyUp() {
	escapeInProgress = true;
	function cleanup() {
		escapeInProgress = false;
		window.removeEventListener('keydown', consume, true);
		window.removeEventListener('keyup', consume, true);
		window.removeEventListener('blur', cleanup);
	}
	function consume(event: KeyboardEvent) {
		if (event.key !== 'Escape') return;
		event.preventDefault();
		event.stopImmediatePropagation();
		if (event.type === 'keyup') cleanup();
	}
	window.addEventListener('keydown', consume, true);
	window.addEventListener('keyup', consume, true);
	window.addEventListener('blur', cleanup);
}
