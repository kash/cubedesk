import {
	buildVisual,
	Point,
	PuzzleVisual,
	VisualLine,
	VisualPolygon,
} from '@/util/scramble/visual/geometry';

type SlotKind = 'edge' | 'corner0' | 'corner1';

interface Slot {
	face: string;
	side: string;
	kind: SlotKind;
}

const TOP_KINDS: SlotKind[] = [
	'corner0',
	'corner1',
	'edge',
	'corner0',
	'corner1',
	'edge',
	'corner0',
	'corner1',
	'edge',
	'corner0',
	'corner1',
	'edge',
];
const BOTTOM_KINDS: SlotKind[] = [
	'edge',
	'corner0',
	'corner1',
	'edge',
	'corner0',
	'corner1',
	'edge',
	'corner0',
	'corner1',
	'edge',
	'corner0',
	'corner1',
];

const TOP_START = 15;
const BOTTOM_START = -15;
const STICKER_SCALE = 0.7;
const EDGE_RADIUS = 1 / Math.cos(Math.PI / 12);
const CORNER_RADIUS = Math.SQRT2;
const VIEW_GAP = 0.35;
const GAP = 0.06;
const ROUND = 0.025;

function nearestFace(angle: number, faces: string[]): string {
	return faces[Math.round((((angle % 360) + 360) % 360) / 90) % 4];
}

function solvedLayer(kinds: SlotKind[], face: string, start: number, sideFaces: string[]): Slot[] {
	return kinds.map((kind, index) => ({
		face,
		kind,
		side: nearestFace(start + 15 + index * 30, sideFaces),
	}));
}

function turnLayer(layer: Slot[], amount: number): Slot[] {
	const next = [...layer];
	layer.forEach((slot, index) => {
		next[(((index + amount) % 12) + 12) % 12] = slot;
	});
	return next;
}

function polar(center: Point, angle: number, radius: number): Point {
	const rad = (angle * Math.PI) / 180;
	return [center[0] + Math.sin(rad) * radius, center[1] - Math.cos(rad) * radius];
}

function scaleFrom(center: Point, point: Point, scale: number): Point {
	return [center[0] + (point[0] - center[0]) * scale, center[1] + (point[1] - center[1]) * scale];
}

function drawLayer(layer: Slot[], center: Point, start: number): VisualPolygon[] {
	const polygons: VisualPolygon[] = [];
	const first = layer.findIndex((slot) => slot.kind !== 'corner1');

	for (let step = 0; step < 12; step++) {
		const index = (first + step) % 12;
		const slot = layer[index];
		const angle = start + index * 30;

		if (slot.kind === 'edge') {
			const outer = [
				polar(center, angle, EDGE_RADIUS),
				polar(center, angle + 30, EDGE_RADIUS),
			];
			const inner = outer.map((point) => scaleFrom(center, point, STICKER_SCALE));
			polygons.push({points: [center, inner[0], inner[1]], color: slot.face});
			polygons.push({points: [inner[0], inner[1], outer[1], outer[0]], color: slot.side});
		} else if (slot.kind === 'corner0') {
			const next = layer[(index + 1) % 12];
			const outer = [
				polar(center, angle, EDGE_RADIUS),
				polar(center, angle + 30, CORNER_RADIUS),
				polar(center, angle + 60, EDGE_RADIUS),
			];
			const inner = outer.map((point) => scaleFrom(center, point, STICKER_SCALE));
			polygons.push({points: [center, inner[0], inner[1], inner[2]], color: slot.face});
			polygons.push({points: [inner[0], inner[1], outer[1], outer[0]], color: slot.side});
			polygons.push({points: [inner[1], inner[2], outer[2], outer[1]], color: next.side});
		}
	}

	return polygons;
}

function sliceLine(center: Point, start: number): VisualLine {
	return {
		from: polar(center, start, CORNER_RADIUS + 0.1),
		to: polar(center, start + 180, CORNER_RADIUS + 0.1),
	};
}

function drawMiddle(flipped: boolean, top: number, left: number, width: number): VisualPolygon[] {
	const height = 0.22;
	const unit = (width - 0.12) / 12;
	const leftPiece: [string, number][] = [
		['O', 2],
		['B', 3],
		['R', 1],
	];
	const rightPiece: [string, number][] = [
		['R', 2],
		['G', 3],
		['O', 1],
	];
	const segments = [...leftPiece, null, ...(flipped ? [...rightPiece].reverse() : rightPiece)];

	const polygons: VisualPolygon[] = [];
	let x = left;
	for (const segment of segments) {
		if (!segment) {
			x += 0.12;
			continue;
		}
		const [color, size] = segment;
		const w = unit * size;
		polygons.push({
			color,
			points: [
				[x, top],
				[x + w, top],
				[x + w, top + height],
				[x, top + height],
			],
		});
		x += w;
	}
	return polygons;
}

export function layoutSquare1(scramble: string, frontFace = false): PuzzleVisual | null {
	let top = solvedLayer(TOP_KINDS, 'Y', TOP_START, ['O', 'G', 'R', 'B']);
	let bottom = solvedLayer(BOTTOM_KINDS, 'W', BOTTOM_START, ['R', 'G', 'O', 'B']);
	let flipped = false;

	const tokenPattern = /\(?\s*(-?\d+)\s*,\s*(-?\d+)\s*\)?|\//g;
	if (scramble.replace(tokenPattern, '').trim()) {
		return null;
	}

	for (const match of scramble.matchAll(tokenPattern)) {
		if (match[0] === '/') {
			const blocked = [top[0], top[6], bottom[0], bottom[6]].some(
				(slot) => slot.kind === 'corner1',
			);
			if (blocked) {
				return null;
			}
			const topHalf = top.slice(0, 6);
			top = [...bottom.slice(0, 6), ...top.slice(6)];
			bottom = [...topHalf, ...bottom.slice(6)];
			flipped = !flipped;
		} else {
			top = turnLayer(top, Number(match[1]));
			bottom = turnLayer(bottom, Number(match[2]));
		}
	}

	const topCenter: Point = [0, 0];
	const bottomCenter: Point = [CORNER_RADIUS * 2 + VIEW_GAP, 0];

	if (frontFace) {
		return buildVisual(drawLayer(top, topCenter, TOP_START), {gap: GAP, round: ROUND});
	}

	const middleWidth = CORNER_RADIUS * 2 + VIEW_GAP + 0.6;
	const polygons = [
		...drawLayer(top, topCenter, TOP_START),
		...drawLayer(bottom, bottomCenter, BOTTOM_START),
		...drawMiddle(
			flipped,
			CORNER_RADIUS + 0.3,
			bottomCenter[0] / 2 - middleWidth / 2,
			middleWidth,
		),
	];
	const lines = [sliceLine(topCenter, TOP_START), sliceLine(bottomCenter, BOTTOM_START)];

	return buildVisual(polygons, {lines, gap: GAP, round: ROUND});
}
