import type {AppRouter} from '@/server/trpc/router';
import type {TRPCLink} from '@trpc/client';
import {getMe} from '@/components/store';
import {observable} from '@trpc/server/observable';

let redirecting = false;

// Being logged out isn't an error — it's a state. When the server rejects a
// call as UNAUTHORIZED while the client still holds account state, the session
// expired out from under us and every subsequent protected call would fail the
// same way. Send the user to the login page to re-authenticate instead.
function onUnauthorized() {
	if (typeof window === 'undefined' || redirecting) {
		return;
	}

	if (!getMe() || window.location.pathname === '/login') {
		return;
	}

	redirecting = true;
	window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
}

export const sessionExpiredLink: TRPCLink<AppRouter> = () => {
	return ({next, op}) =>
		observable((observer) =>
			next(op).subscribe({
				next: (value) => observer.next(value),
				complete: () => observer.complete(),
				error: (err) => {
					if (err.data?.code === 'UNAUTHORIZED') {
						onUnauthorized();
					}

					observer.error(err);
				},
			})
		);
};
