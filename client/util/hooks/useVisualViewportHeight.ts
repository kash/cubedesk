import {useEffect, useState} from 'react';

/**
 * Tracks the height of the visual viewport (the area not covered by the on-screen keyboard).
 * Returns null when disabled or unsupported.
 */
export function useVisualViewportHeight(enabled: boolean): number | null {
	const [height, setHeight] = useState<number | null>(null);

	useEffect(() => {
		const viewport = typeof window !== 'undefined' ? window.visualViewport : null;
		if (!enabled || !viewport) {
			setHeight(null);
			return;
		}

		function update() {
			setHeight(viewport!.height);
			// iOS scrolls the page to reveal the focused input when the keyboard opens. Everything
			// already fits in the visual viewport, so pin the page back to the top.
			if (window.scrollY !== 0) {
				window.scrollTo(0, 0);
			}
		}

		update();
		viewport.addEventListener('resize', update);
		viewport.addEventListener('scroll', update);
		return () => {
			viewport.removeEventListener('resize', update);
			viewport.removeEventListener('scroll', update);
		};
	}, [enabled]);

	return height;
}
