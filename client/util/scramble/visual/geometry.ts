export type Point = [number, number];
export type Vec3 = [number, number, number];

export interface VisualPolygon {
	points: Point[];
	color: string;
}

export interface VisualLine {
	from: Point;
	to: Point;
}

export interface PuzzleVisual {
	width: number;
	height: number;
	polygons: VisualPolygon[];
	lines: VisualLine[];
	round: number;
}

interface VisualOptions {
	lines?: VisualLine[];
	gap: number;
	round: number;
}

export interface Sticker {
	center: Vec3;
	polygon: Point[];
	color: string;
	front: boolean;
}

export interface Turn {
	axis: Vec3;
	threshold: number;
}

function dot(a: Vec3, b: Vec3): number {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function normalize(v: Vec3): Vec3 {
	const len = Math.sqrt(dot(v, v));
	return [v[0] / len, v[1] / len, v[2] / len];
}

function rotate(v: Vec3, axis: Vec3, angle: number): Vec3 {
	const [x, y, z] = axis;
	const cos = Math.cos(angle);
	const sin = Math.sin(angle);
	const d = dot(axis, v) * (1 - cos);
	return [
		v[0] * cos + (y * v[2] - z * v[1]) * sin + x * d,
		v[1] * cos + (z * v[0] - x * v[2]) * sin + y * d,
		v[2] * cos + (x * v[1] - y * v[0]) * sin + z * d,
	];
}

function distanceSquared(a: Vec3, b: Vec3): number {
	return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;
}

export function buildClockwisePermutation(
	stickers: Sticker[],
	turn: Turn,
	order: number,
): number[] {
	const axis = normalize(turn.axis);
	const angle = (-2 * Math.PI) / order;

	return stickers.map((sticker, index) => {
		if (dot(sticker.center, axis) <= turn.threshold) {
			return index;
		}

		const moved = rotate(sticker.center, axis, angle);
		let best = index;
		let bestDistance = Infinity;
		stickers.forEach((other, otherIndex) => {
			const distance = distanceSquared(moved, other.center);
			if (distance < bestDistance) {
				bestDistance = distance;
				best = otherIndex;
			}
		});
		return best;
	});
}

export function applyPermutation(colors: string[], permutation: number[]): string[] {
	const next = [...colors];
	permutation.forEach((target, source) => {
		next[target] = colors[source];
	});
	return next;
}

export function buildVisual(polygons: VisualPolygon[], options: VisualOptions): PuzzleVisual {
	const {gap, round} = options;
	const lines = options.lines ?? [];

	const xs: number[] = [];
	const ys: number[] = [];
	for (const polygon of polygons) {
		for (const [x, y] of polygon.points) {
			xs.push(x);
			ys.push(y);
		}
	}
	for (const line of lines) {
		xs.push(line.from[0], line.to[0]);
		ys.push(line.from[1], line.to[1]);
	}

	const minX = Math.min(...xs);
	const minY = Math.min(...ys);
	const width = Math.max(...xs) - minX;
	const height = Math.max(...ys) - minY;
	const pad = Math.max(width, height) * 0.02;
	const shift = (p: Point): Point => [p[0] - minX + pad, p[1] - minY + pad];

	return {
		width: width + pad * 2,
		height: height + pad * 2,
		polygons: polygons.map((polygon) => ({
			...polygon,
			points: insetPolygon(polygon.points, gap / 2 + round).map(shift),
		})),
		lines: lines.map((line) => ({from: shift(line.from), to: shift(line.to)})),
		round,
	};
}

function insetPolygon(points: Point[], distance: number): Point[] {
	let area = 0;
	for (let i = 0; i < points.length; i++) {
		const [x1, y1] = points[i];
		const [x2, y2] = points[(i + 1) % points.length];
		area += x1 * y2 - x2 * y1;
	}
	const sign = area > 0 ? 1 : -1;

	const edges = points.map((start, i) => {
		const end = points[(i + 1) % points.length];
		const dx = end[0] - start[0];
		const dy = end[1] - start[1];
		const len = Math.hypot(dx, dy);
		const nx = (-dy / len) * sign;
		const ny = (dx / len) * sign;
		return {
			point: [start[0] + nx * distance, start[1] + ny * distance] as Point,
			dir: [dx, dy] as Point,
		};
	});

	return edges.map((edge, i) => {
		const prev = edges[(i - 1 + edges.length) % edges.length];
		const cross = prev.dir[0] * edge.dir[1] - prev.dir[1] * edge.dir[0];
		if (Math.abs(cross) < 1e-9) {
			return edge.point;
		}
		const t =
			((edge.point[0] - prev.point[0]) * edge.dir[1] -
				(edge.point[1] - prev.point[1]) * edge.dir[0]) /
			cross;
		return [prev.point[0] + prev.dir[0] * t, prev.point[1] + prev.dir[1] * t];
	});
}
