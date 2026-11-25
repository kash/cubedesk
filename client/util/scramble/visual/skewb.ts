import {
	applyPermutation,
	buildClockwisePermutation,
	buildVisual,
	Point,
	PuzzleVisual,
	Sticker,
	Vec3,
} from '@/util/scramble/visual/geometry';

const GAP = 0.06;

const CORNERS: Record<string, Vec3> = {
	U: [-1, 1, -1],
	R: [1, -1, -1],
	L: [-1, -1, 1],
	B: [-1, -1, -1],
};

const FACES: {color: string; front: boolean; net: Point; origin: Vec3; right: Vec3; down: Vec3}[] =
	[
		{
			color: 'W',
			front: false,
			net: [1, 0],
			origin: [-1, 1, -1],
			right: [1, 0, 0],
			down: [0, 0, 1],
		},
		{
			color: 'O',
			front: false,
			net: [0, 1],
			origin: [-1, 1, -1],
			right: [0, 0, 1],
			down: [0, -1, 0],
		},
		{
			color: 'G',
			front: true,
			net: [1, 1],
			origin: [-1, 1, 1],
			right: [1, 0, 0],
			down: [0, -1, 0],
		},
		{
			color: 'R',
			front: false,
			net: [2, 1],
			origin: [1, 1, 1],
			right: [0, 0, -1],
			down: [0, -1, 0],
		},
		{
			color: 'B',
			front: false,
			net: [3, 1],
			origin: [1, 1, -1],
			right: [-1, 0, 0],
			down: [0, -1, 0],
		},
		{
			color: 'Y',
			front: false,
			net: [1, 2],
			origin: [-1, -1, 1],
			right: [1, 0, 0],
			down: [0, 0, -1],
		},
	];

const PIECES: Point[][] = [
	[
		[0.5, 0],
		[1, 0.5],
		[0.5, 1],
		[0, 0.5],
	],
	[
		[0, 0],
		[0.5, 0],
		[0, 0.5],
	],
	[
		[1, 0],
		[1, 0.5],
		[0.5, 0],
	],
	[
		[1, 1],
		[0.5, 1],
		[1, 0.5],
	],
	[
		[0, 1],
		[0, 0.5],
		[0.5, 1],
	],
];

function buildStickers(): Sticker[] {
	const stickers: Sticker[] = [];

	for (const face of FACES) {
		const offsetX = face.net[0] * (1 + GAP);
		const offsetY = face.net[1] * (1 + GAP);

		for (const piece of PIECES) {
			const polygon = piece.map(([u, v]) => [u + offsetX, v + offsetY] as Point);
			const u = piece.reduce((sum, p) => sum + p[0], 0) / piece.length;
			const v = piece.reduce((sum, p) => sum + p[1], 0) / piece.length;
			const center = [0, 1, 2].map(
				(axis) => face.origin[axis] + 2 * u * face.right[axis] + 2 * v * face.down[axis],
			) as Vec3;
			stickers.push({center, polygon, color: face.color, front: face.front});
		}
	}

	return stickers;
}

let cache: {stickers: Sticker[]; permutations: Record<string, number[]>} | null = null;

function getModel() {
	if (cache) {
		return cache;
	}

	const stickers = buildStickers();
	const permutations: Record<string, number[]> = {};
	for (const name of Object.keys(CORNERS)) {
		permutations[name] = buildClockwisePermutation(
			stickers,
			{axis: CORNERS[name], threshold: 0},
			3,
		);
	}

	cache = {stickers, permutations};
	return cache;
}

export function layoutSkewb(scramble: string, frontFace = false): PuzzleVisual | null {
	const {stickers, permutations} = getModel();
	let colors = stickers.map((sticker) => sticker.color);

	for (const token of scramble.split(/\s+/).filter(Boolean)) {
		const match = token.match(/^([ULRB])(2?)('?)$/);
		if (!match) {
			return null;
		}

		const permutation = permutations[match[1]];
		const turns = (match[2] ? 2 : 1) * (match[3] ? 2 : 1);
		for (let i = 0; i < turns % 3; i++) {
			colors = applyPermutation(colors, permutation);
		}
	}

	const polygons = stickers
		.map((sticker, index) => ({
			points: sticker.polygon,
			color: colors[index],
			front: sticker.front,
		}))
		.filter((polygon) => !frontFace || polygon.front)
		.map(({points, color}) => ({points, color}));

	return buildVisual(polygons, {gap: 0.045, round: 0.02});
}
