import {checkForAveragePBUpdate} from '@/db/solves/stats/solves/cache/average-cache';
import {checkForSinglePB} from '@/db/solves/stats/solves/cache/single-cache';
import {Solve} from '@/types/solve';
import {emitEvent} from '@/util/event_handler';
import jsonStr from 'json-stable-stringify';

export function checkForPB(solve: Solve, isNew: boolean) {
	const updatedSinglePbs = checkForSinglePB(solve);
	const updatedAvgPbs = checkForAveragePBUpdate(solve, isNew);

	// Disqualify items that don't qualify for confetti
	if (!solve.from_timer || !isNew) {
		return;
	}

	const eventType = solve.event_type;

	// We only want PBs that are for this event type
	const pbFilter = jsonStr({
		event_type: eventType,
		from_timer: true,
	});

	const isAvgPb = updatedAvgPbs.some((pb) => jsonStr(pb.filterOptions) === pbFilter);
	const isSinglePb = updatedSinglePbs.some((pb) => jsonStr(pb.filterOptions) === pbFilter);

	if (isSinglePb && isAvgPb) {
		emitEvent('singleAndAvgPbEvent', eventType);
	} else if (isSinglePb) {
		emitEvent('singlePbEvent', eventType);
	} else if (isAvgPb) {
		emitEvent('avgPbEvent', eventType);
	}
}
