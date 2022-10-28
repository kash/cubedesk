let changeTitleInterval = null;
let pageHasFocus = false;
let isOldTitle = false;
let init = false;
let originalPageTitle = 'CubeDesk';

export function initPageTitleBlink() {
	if (init) {
		return;
	}

	init = true;

	window.addEventListener('focus', onWindowFocus);
	window.addEventListener('blur', onWindowBlur);
	window.addEventListener('locationchange', onLocationChange)
}

function onLocationChange() {
	onWindowFocus();
}

function onWindowFocus() {
	pageHasFocus = true;

	if (changeTitleInterval) {
		clearInterval(changeTitleInterval);
		changeTitleInterval = null;
		isOldTitle = false;
		document.title = originalPageTitle;
	}
}

function onWindowBlur() {
	pageHasFocus = false;
}

export function blinkPageTitle(message) {
	if (pageHasFocus) {
		return;
	}

	originalPageTitle = document.title;
	isOldTitle = true;

	changeTitleInterval = setInterval(() => {
		document.title = isOldTitle ?  message : originalPageTitle;
		isOldTitle = !isOldTitle;
	}, 700);
}
