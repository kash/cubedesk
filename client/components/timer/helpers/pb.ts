import {displayTimerAlert} from '@/components/timer/helpers/notification';
import {ITimerContext} from '@/components/timer/Timer';
import {getSetting} from '@/db/settings/query';
import {FilterSolvesOptions} from '@/db/solves/query';
import {getAveragePB} from '@/db/solves/stats/solves/average/average-pb';
import {getSinglePB} from '@/db/solves/stats/solves/single/single-pb';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useEventListener} from '@/util/event_handler';
import confetti from 'canvas-confetti';

let lastConfetti: Date | null = null;

export function listenForPbEvents(context: ITimerContext) {
	const ignorePbEvents = !!context.ignorePbEvents;

	// In case the user doesn't have Quick Stats selected, we need to fetch the single and average PB so that it can be
	// find in the cache
	if (!ignorePbEvents) {
		const pbFilter: FilterSolvesOptions = {
			cube_type: context.cubeType,
		};

		getSinglePB(pbFilter);
		getAveragePB(pbFilter, 5);
	}

	function pbEventCallback(msg: string) {
		triggerConfetti();
		displayTimerAlert({
			text: msg,
			backgroundColor: 'green',
		});
	}

	// These hooks must always be called, in the same order, regardless of `ignorePbEvents` -
	// conditionally calling hooks based on a prop that can change between renders of the same
	// component violates the Rules of Hooks and throws "Rendered fewer/more hooks than during
	// the previous render", crashing the whole app since there's no error boundary to catch it.
	useEventListener(
		'singlePbEvent',
		(ct) => {
			if (ignorePbEvents) return;
			const cubeType = getCubeTypeInfoById(ct);
			pbEventCallback(`New ${cubeType?.name ?? ct} Single PB!`);
		},
		[context.cubeType, ignorePbEvents]
	);

	useEventListener(
		'avgPbEvent',
		(ct) => {
			if (ignorePbEvents) return;
			const cubeType = getCubeTypeInfoById(ct);
			pbEventCallback(`New ${cubeType?.name ?? ct} Average of 5 PB!`);
		},
		[context.cubeType, ignorePbEvents]
	);

	useEventListener(
		'singleAndAvgPbEvent',
		(ct) => {
			if (ignorePbEvents) return;
			const cubeType = getCubeTypeInfoById(ct);
			pbEventCallback(`New ${cubeType?.name ?? ct} Single and Average of 5 PB!`);
		},
		[context.cubeType, ignorePbEvents]
	);
}

export function triggerConfetti() {
	const pbConfetti = getSetting('pb_confetti');
	if (!pbConfetti) {
		return;
	}

	const duration = 1000;
	if (lastConfetti && new Date().getTime() - lastConfetti.getTime() < duration / 2) {
		return;
	}

	lastConfetti = new Date();
	const defaults = {startVelocity: 40, spread: 190, ticks: 50, zIndex: 10000, particleCount: 50};

	function randomInRange(min, max) {
		return Math.random() * (max - min) + min;
	}

	confetti({
		...defaults,
		origin: {x: randomInRange(0.1, 0.3), y: randomInRange(0.1, 0.3)},
	});
	confetti({
		...defaults,
		origin: {x: randomInRange(0.3, 0.7), y: randomInRange(0.3, 0.7)},
	});
	confetti({
		...defaults,
		origin: {x: randomInRange(0.7, 0.9), y: randomInRange(0.7, 0.9)},
	});
}
