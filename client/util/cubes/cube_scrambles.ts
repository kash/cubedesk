export interface ScrambleType {
	name: string;
	length: number;
	id: string;
	size?: number;
}

function getCubeScramble(name: string, length: number, id: string, size?: number): ScrambleType {
	const data: ScrambleType = {
		name,
		length,
		id,
	};

	if (size) {
		data.size = size;
	}

	return data;
}

// Use getCubeScramble to replace the objects in CUBE_SCRAMBLES

export const CUBE_SCRAMBLES: Record<string, ScrambleType> = {
	'222': getCubeScramble('2x2', 9, '222', 2),
	'333': getCubeScramble('3x3', 20, '333', 3),
	'333bl': getCubeScramble('3x3 Blind', 20, '333', 3),
	'444': getCubeScramble('4x4', 46, '444', 4),
	'555': getCubeScramble('5x5', 60, '555', 5),
	'666': getCubeScramble('6x6', 89, '666', 6),
	'777': getCubeScramble('7x7', 100, '777', 7),
	pyram: getCubeScramble('Pyraminx', 10, 'pyraminx'),
	skewb: getCubeScramble('Skewb', 8, 'skewb'),
	sq1: getCubeScramble('Square-1', 9, 'square1'),
	clock: getCubeScramble('Clock', 36, 'clock'),
	minx: getCubeScramble('Megaminx', 10, 'megaminx'),
	none: getCubeScramble('None', 0, 'none'),
};
