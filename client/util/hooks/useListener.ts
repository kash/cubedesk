import {useEffect, useRef} from 'react';
type EventHandler = (data: any) => void;

export function useDocumentListener(eventName, handler: EventHandler, deps: any[] = []) {
	useElementListener(document, eventName, handler, deps);
}

export function useWindowListener(eventName, handler: EventHandler, deps: any[] = []) {
	if (typeof window === 'undefined') {
		return;
	}

	useElementListener(window, eventName, handler, deps);
}

/**
 * Used for when user clicks on the screen and we we want to get rid of a popup or modal.
 */
export function useWindowClickAwayListener(ignoreClassName: string, handler: EventHandler) {
	function clickChecker(e) {
		let target = e.target;
		while (target) {
			if (target && target.classList && target.classList.contains(ignoreClassName)) {
				return;
			}

			target = target.parentNode;
		}

		handler(e);
	}

	useWindowListener('click', clickChecker);
}

export function useElementListener(elem, eventName, handler: EventHandler, deps: any[] = []) {
	const savedHandler = useRef<EventHandler>();

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		if (!elem) {
			return;
		}

		const eventListener = (event) => savedHandler.current(event);
		elem.addEventListener(eventName, eventListener);

		return () => {
			elem.removeEventListener(eventName, eventListener);
		};
	}, [eventName, elem, ...deps]);
}
