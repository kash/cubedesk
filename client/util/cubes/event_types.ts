export interface EventType {
	id: string;
	name: string;
	scramble: string;
	hidden?: boolean;
	size?: number;
	default?: boolean;
}

function getEventType(id: string, name: string, scramble: string, size?: number): EventType {
	const data: EventType = {
		id,
		name,
		scramble,
		default: true,
	};

	if (size) {
		data.size = size;
	}

	return data;
}

export const EVENT_TYPES = {
	'222': getEventType('222', '2x2', '222', 2),
	'333': getEventType('333', '3x3', '333', 3),
	'444': getEventType('444', '4x4', '444', 4),
	'555': getEventType('555', '5x5', '555', 5),
	'666': getEventType('666', '6x6', '666', 6),
	'777': getEventType('777', '7x7', '777', 7),
	sq1: getEventType('sq1', 'Square-1', 'sq1'),
	pyram: getEventType('pyram', 'Pyraminx', 'pyram'),
	clock: getEventType('clock', 'Clock', 'clock'),
	skewb: getEventType('skewb', 'Skewb', 'skewb'),
	minx: getEventType('minx', 'Megaminx', 'minx'),
	'333mirror': getEventType('333mirror', '3x3 Mirror', '333', 3),
	'222oh': getEventType('222oh', '2x2 One-Handed', '222', 2),
	'333oh': getEventType('333oh', '3x3 One-Handed', '333', 3),
	'333bl': getEventType('333bl', '3x3 Blind', '333bl', 3),
	other: getEventType('other', 'Other', 'none'),
};
