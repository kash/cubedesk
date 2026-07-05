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
	if (context.ignorePbEvents) {
		return;
	}

	// In case the user doesn't have Quick Stats selected, we need to fetch the single and average PB so that it can be
	// find in the cache
	const pbFilter: FilterSolvesOptions = {
		cube_type: context.cubeType,
	};

	getSinglePB(pbFilter);
	getAveragePB(pbFilter, 5);

	function pbEventCallback(msg: string) {
		triggerConfetti();
		displayTimerAlert({
			text: msg,
			backgroundColor: 'green',
		});
	}

	useEventListener(
		'singlePbEvent',
		(ct) => {
			const cubeType = getCubeTypeInfoById(ct);
			pbEventCallback(`New ${cubeType?.name ?? ct} Single PB!`);
		},
		[context.cubeType]
	);

	useEventListener(
		'avgPbEvent',
		(ct) => {
			const cubeType = getCubeTypeInfoById(ct);
			pbEventCallback(`New ${cubeType?.name ?? ct} Average of 5 PB!`);
		},
		[context.cubeType]
	);

	useEventListener(
		'singleAndAvgPbEvent',
		(ct) => {
			const cubeType = getCubeTypeInfoById(ct);
			pbEventCallback(`New ${cubeType?.name ?? ct} Single and Average of 5 PB!`);
		},
		[context.cubeType]
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
