import {
	applyPermutation,
	buildClockwisePermutation,
	buildVisual,
	Point,
	PuzzleVisual,
	Sticker,
	Turn,
	Vec3,
} from '@/util/scramble/visual/geometry';

const H = Math.sqrt(3) / 2;
const GAP = 0.08;

const VERTICES: Record<string, Vec3> = {
	U: [0, 1, 0],
	L: [-Math.sqrt(2 / 3), -1 / 3, Math.sqrt(2) / 3],
	R: [Math.sqrt(2 / 3), -1 / 3, Math.sqrt(2) / 3],
	B: [0, -1 / 3, (-2 * Math.sqrt(2)) / 3],
};

const FACES: {
	color: string;
	front: boolean;
	net: [Point, Point, Point];
	vertices: [Vec3, Vec3, Vec3];
}[] = [
	{
		color: 'G',
		front: true,
		net: [
			[1, 0],
			[0.5, H],
			[1.5, H],
		],
		vertices: [VERTICES.U, VERTICES.L, VERTICES.R],
	},
	{
		color: 'R',
		front: false,
		net: [
			[0, 0],
			[1, 0],
			[0.5, H],
		],
		vertices: [VERTICES.B, VERTICES.U, VERTICES.L],
	},
	{
		color: 'B',
		front: false,
		net: [
			[1, 0],
			[2, 0],
			[1.5, H],
		],
		vertices: [VERTICES.U, VERTICES.B, VERTICES.R],
	},
	{
		color: 'Y',
		front: false,
		net: [
			[0.5, H],
			[1.5, H],
			[1, 2 * H],
		],
		vertices: [VERTICES.L, VERTICES.R, VERTICES.B],
	},
];

const FRONT_CENTROID: Point = [1, (2 * H) / 3];

function subTriangles(): [number, number, number][][] {
	const triangles: [number, number, number][][] = [];
	for (let i = 0; i <= 2; i++) {
		for (let j = 0; j <= 2 - i; j++) {
			const k = 2 - i - j;
			triangles.push([
				[i + 1, j, k],
				[i, j + 1, k],
				[i, j, k + 1],
			]);
		}
	}
	for (let i = 0; i <= 1; i++) {
		for (let j = 0; j <= 1 - i; j++) {
			const k = 1 - i - j;
			triangles.push([
				[i, j + 1, k + 1],
				[i + 1, j, k + 1],
				[i + 1, j + 1, k],
			]);
		}
	}
	return triangles;
}

function buildStickers(): Sticker[] {
	const stickers: Sticker[] = [];

	for (const face of FACES) {
		const centroid: Point = [
			(face.net[0][0] + face.net[1][0] + face.net[2][0]) / 3,
			(face.net[0][1] + face.net[1][1] + face.net[2][1]) / 3,
		];
		const dx = centroid[0] - FRONT_CENTROID[0];
		const dy = centroid[1] - FRONT_CENTROID[1];
		const len = Math.hypot(dx, dy) || 1;
		const offset: Point = face.front ? [0, 0] : [(dx / len) * GAP, (dy / len) * GAP];

		for (const triangle of subTriangles()) {
			const polygon = triangle.map(([a, b, c]) => {
				const x = (a * face.net[0][0] + b * face.net[1][0] + c * face.net[2][0]) / 3;
				const y = (a * face.net[0][1] + b * face.net[1][1] + c * face.net[2][1]) / 3;
				return [x + offset[0], y + offset[1]] as Point;
			});

			const weights = [0, 1, 2].map(
				(n) => (triangle[0][n] + triangle[1][n] + triangle[2][n]) / 9,
			);
			const center = [0, 1, 2].map(
				(axis) =>
					weights[0] * face.vertices[0][axis] +
					weights[1] * face.vertices[1][axis] +
					weights[2] * face.vertices[2][axis],
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
	for (const name of Object.keys(VERTICES)) {
		const axis = VERTICES[name];
		const layer: Turn = {axis, threshold: 1 / 9};
		const tip: Turn = {axis, threshold: 5 / 9};
		permutations[name] = buildClockwisePermutation(stickers, layer, 3);
		permutations[name.toLowerCase()] = buildClockwisePermutation(stickers, tip, 3);
	}

	cache = {stickers, permutations};
	return cache;
}

export function layoutPyraminx(scramble: string, frontFace = false): PuzzleVisual | null {
	const {stickers, permutations} = getModel();
	let colors = stickers.map((sticker) => sticker.color);

	for (const token of scramble.split(/\s+/).filter(Boolean)) {
		const match = token.match(/^([ULRBulrb])(2?)('?)$/);
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

	return buildVisual(polygons, {gap: 0.035, round: 0.012});
}
