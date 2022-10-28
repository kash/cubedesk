export interface CubeType {
	id: string;
	name: string;
	scramble: string;
	hidden?: boolean;
	size?: number;
	default?: boolean;
}

function getCubeType(id: string, name: string, scramble: string, size?: number): CubeType {
	const data: CubeType = {
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

export const CUBE_TYPES = {
	'222': getCubeType('222', '2x2', '222', 2),
	'333': getCubeType('333', '3x3', '333', 3),
	'444': getCubeType('444', '4x4', '444', 4),
	'555': getCubeType('555', '5x5', '555', 5),
	'666': getCubeType('666', '6x6', '666', 6),
	'777': getCubeType('777', '7x7', '777', 7),
	sq1: getCubeType('sq1', 'Square-1', 'sq1'),
	pyram: getCubeType('pyram', 'Pyraminx', 'pyram'),
	clock: getCubeType('clock', 'Clock', 'clock'),
	skewb: getCubeType('skewb', 'Skewb', 'skewb'),
	minx: getCubeType('minx', 'Megaminx', 'minx'),
	'333mirror': getCubeType('333mirror', '3x3 Mirror', '333', 3),
	'222oh': getCubeType('222oh', '2x2 One-Handed', '222', 2),
	'333oh': getCubeType('333oh', '3x3 One-Handed', '333', 3),
	'333bl': getCubeType('333bl', '3x3 Blind', '333bl', 3),
	other: getCubeType('other', 'Other', 'none'),
};
