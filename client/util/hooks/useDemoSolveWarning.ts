import {fetchSolveCount} from '@/db/solves/query';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {useEffect} from 'react';

export function useDemoSolveWarning(enabled: boolean) {
	const solveDbVersion = useSolveDb();

	useEffect(() => {
		if (!enabled || fetchSolveCount({demo_mode: true}) === 0) return;

		function warnBeforeUnload(event: BeforeUnloadEvent) {
			if (fetchSolveCount({demo_mode: true}) === 0) return;
			event.preventDefault();
			// Browsers show their own warning text; returnValue supports older browsers.
			event.returnValue = '';
		}

		window.addEventListener('beforeunload', warnBeforeUnload);
		return () => window.removeEventListener('beforeunload', warnBeforeUnload);
	}, [enabled, solveDbVersion]);
}
