const LOGIN_PATH = '/login';
const SIGN_UP_PATH = '/signup';
const REDIRECT_PARAM_NAME = 'redirect';

function getRawURI() {
	if (typeof window === 'undefined') {
		return '';
	}

	return window.location.href;
}

function getLinkHelper(path: string) {
	if (typeof window === 'undefined') {
		return '';
	}

	const urlParams = new URLSearchParams(window.location.search);
	let redirect = urlParams.get(REDIRECT_PARAM_NAME);

	const uri = getRawURI();

	if (!redirect) {
		redirect = encodeURIComponent(uri);
	} else if (redirect.indexOf('/') > -1) {
		redirect = encodeURIComponent(redirect);
	}

	return `${path}?${REDIRECT_PARAM_NAME}=${redirect}`;
}

export function getLoginLink() {
	return getLinkHelper(LOGIN_PATH);
}

export function getSignUpLink() {
	return getLinkHelper(SIGN_UP_PATH);
}

// Falls back to root path if nothing can be found
export function getRedirectLink() {
	if (typeof window === 'undefined') {
		return '/';
	}

	const urlParams = new URLSearchParams(window.location.search);
	const redirect = urlParams.get(REDIRECT_PARAM_NAME);

	if (!redirect) {
		return '/';
	}

	if (redirect.indexOf('/') > -1) {
		return redirect;
	}

	return decodeURIComponent(redirect) || '/';
}
