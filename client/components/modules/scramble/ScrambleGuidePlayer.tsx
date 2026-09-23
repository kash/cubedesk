import type {BufferAttribute, BufferGeometry, MeshBasicMaterial} from 'three';
import SelectField from '@/components/common/inputs/SelectField';
import {Button} from '@/components/ui/button';
import {Slider} from '@/components/ui/slider';
import {Alg, Move} from 'cubing/alg';
import {
	type ExperimentalLeafIndex,
	type ExperimentalMillisecondTimestamp,
	TwistyPlayer,
	type TwistyPlayerConfig,
} from 'cubing/twisty';
import {
	ArrowCounterClockwise,
	CameraRotate,
	CaretLeft,
	CaretRight,
	Eye,
	EyeSlash,
	Pause,
	Play,
} from 'phosphor-react';
import React, {useEffect, useMemo, useRef, useState} from 'react';

const PUZZLES_BY_SIZE: Record<number, TwistyPlayerConfig['puzzle']> = {
	2: '2x2x2',
	3: '3x3x3',
	4: '4x4x4',
	5: '5x5x5',
	6: '6x6x6',
	7: '7x7x7',
};

const FACES: Record<string, string> = {
	F: 'front',
	B: 'back',
	U: 'top',
	D: 'bottom',
	R: 'right',
	L: 'left',
};

// Misma paleta que el visualizador 2D de ScrambleVisual.
const CUBE_FACE_COLORS = [0xffffff, 0xff9826, 0x43ff43, 0xff4343, 0x246bfd, 0xffff49];
const CUBE_BODY_COLOR = 0x3f464f;
const PG3D_CUBE_COLORS: Record<number, number> = {
	0x44ee00: 0x43ff43,
	0xf4f400: 0xffff49,
	0xff8000: 0xff9826,
	0x2266ff: 0x246bfd,
	0xffffff: 0xffffff,
	0xff0000: 0xff4343,
};

type FaceletMesh = {geometry: BufferGeometry; material: MeshBasicMaterial};
type CubeFacelet = {faceIdx: number; facelet: FaceletMesh; hintFacelet?: FaceletMesh};
type Cube3DWithFacelets = {
	kpuzzleFaceletInfo: Record<string, CubeFacelet[][]>;
	experimentalFoundationMeshes: Array<{material: MeshBasicMaterial}>;
};
type PG3DSticker = {
	origColor: number;
	stickerStart: number;
	stickerEnd: number;
	hintStart: number;
	hintEnd: number;
};
type PG3DWithStickers = {
	stickers: Record<string, PG3DSticker[][]>;
	fixedGeo: BufferGeometry;
	hintMaterial: MeshBasicMaterial;
	materialArray1: MeshBasicMaterial[];
	materialArray2: MeshBasicMaterial[];
	showFoundations: boolean;
	showHintStickers: boolean;
	updateMaterialArrays: () => void;
	setStickeringMask: (
		mask: Awaited<
			ReturnType<
				TwistyPlayer['experimentalModel']['twistySceneModel']['stickeringMask']['get']
			>
		>,
	) => void;
};
type SceneWrapperWithPuzzle = HTMLElement & {
	experimentalTwisty3DPuzzleWrapper: () => Promise<{
		twisty3DPuzzle: () => Promise<unknown>;
		scheduleRender: () => void;
	}>;
};

function recolorFacelet(mesh: FaceletMesh, color: number) {
	const material = mesh.material.clone() as MeshBasicMaterial;
	material.color.setHex(color);
	mesh.material = material;
}

function recolorCubeFoundation(meshes: Array<{material: MeshBasicMaterial}>) {
	if (!meshes.length) return;
	const material = meshes[0].material.clone() as MeshBasicMaterial;
	material.color.setHex(CUBE_BODY_COLOR);
	material.opacity = 1;
	material.transparent = false;
	for (const mesh of meshes) mesh.material = material;
}

function addRoundedPG3DUvs(pg3D: PG3DWithStickers) {
	const position = pg3D.fixedGeo.getAttribute('position');
	const roundedUvs = new Float32Array(position.count * 2).fill(0.5);
	const getCoordinate = (vertex: number, axis: number) =>
		axis === 0
			? position.getX(vertex)
			: axis === 1
				? position.getY(vertex)
				: position.getZ(vertex);
	const addStickerUvs = (startTriangle: number, endTriangle: number) => {
		const start = startTriangle * 3;
		const end = endTriangle * 3;
		if (end <= start) return;
		const min = [Infinity, Infinity, Infinity];
		const max = [-Infinity, -Infinity, -Infinity];
		for (let vertex = start; vertex < end; vertex++) {
			for (let axis = 0; axis < 3; axis++) {
				const coordinate = getCoordinate(vertex, axis);
				min[axis] = Math.min(min[axis], coordinate);
				max[axis] = Math.max(max[axis], coordinate);
			}
		}
		const axes = [0, 1, 2].sort((a, b) => max[b] - min[b] - (max[a] - min[a]));
		const width = max[axes[0]] - min[axes[0]];
		const height = max[axes[1]] - min[axes[1]];
		if (width < 1e-6 || height < 1e-6) return;
		for (let vertex = start; vertex < end; vertex++) {
			roundedUvs[vertex * 2] = (getCoordinate(vertex, axes[0]) - min[axes[0]]) / width;
			roundedUvs[vertex * 2 + 1] = (getCoordinate(vertex, axes[1]) - min[axes[1]]) / height;
		}
	};
	for (const orbit of Object.values(pg3D.stickers)) {
		for (const orientation of orbit) {
			for (const sticker of orientation) {
				addStickerUvs(sticker.stickerStart, sticker.stickerEnd);
				addStickerUvs(sticker.hintStart, sticker.hintEnd);
			}
		}
	}
	const Attribute = position.constructor as new (
		array: Float32Array,
		itemSize: number,
	) => BufferAttribute;
	pg3D.fixedGeo.setAttribute('roundedUv', new Attribute(roundedUvs, 2));
}

function roundedPG3DMaterial(source: MeshBasicMaterial) {
	const material = source.clone() as MeshBasicMaterial;
	material.onBeforeCompile = (shader) => {
		shader.vertexShader = shader.vertexShader
			.replace(
				'#include <common>',
				'#include <common>\nattribute vec2 roundedUv;\nvarying vec2 vRoundedUv;',
			)
			.replace('void main() {', 'void main() {\n  vRoundedUv = roundedUv;');
		shader.fragmentShader = shader.fragmentShader
			.replace('#include <common>', '#include <common>\nvarying vec2 vRoundedUv;')
			.replace(
				'void main() {',
				'void main() {\n  vec2 corner = max(abs(vRoundedUv - vec2(0.5)) - vec2(0.37), vec2(0.0));\n  if (length(corner) > 0.13) discard;',
			);
	};
	material.customProgramCacheKey = () => 'rounded-cube-facelets-v1';
	return material;
}

function stylePG3D(pg3D: PG3DWithStickers) {
	addRoundedPG3DUvs(pg3D);
	const stickerMaterial = roundedPG3DMaterial(pg3D.materialArray1[0]);
	const hintMaterial = roundedPG3DMaterial(pg3D.hintMaterial);
	const foundationMaterial = pg3D.materialArray1[6]?.clone() as MeshBasicMaterial | undefined;
	foundationMaterial?.color.setHex(CUBE_BODY_COLOR);
	const updateMaterialArrays = pg3D.updateMaterialArrays.bind(pg3D);
	pg3D.updateMaterialArrays = () => {
		updateMaterialArrays();
		pg3D.materialArray1[0] = stickerMaterial;
		pg3D.materialArray2[1] = stickerMaterial;
		if (pg3D.showHintStickers) {
			pg3D.materialArray1[2] = hintMaterial;
			pg3D.materialArray2[3] = hintMaterial;
		}
		if (pg3D.showFoundations && foundationMaterial) {
			pg3D.materialArray1[6] = foundationMaterial;
			pg3D.materialArray2[7] = foundationMaterial;
		}
	};
	pg3D.updateMaterialArrays();
}

function createRoundedStickerGeometry(source: BufferGeometry) {
	const Geometry = source.constructor as new () => BufferGeometry;
	const Attribute = source.getAttribute('position').constructor as new (
		array: Float32Array,
		itemSize: number,
	) => BufferAttribute;
	const geometry = new Geometry();
	const positions: number[] = [];
	const uvs: number[] = [];
	const half = 0.5;
	const radius = 0.13;
	const segments = 6;
	const corners = [
		{centerX: half - radius, centerY: half - radius, start: 0},
		{centerX: -half + radius, centerY: half - radius, start: 90},
		{centerX: -half + radius, centerY: -half + radius, start: 180},
		{centerX: half - radius, centerY: -half + radius, start: 270},
	];
	const outline = corners.flatMap(({centerX, centerY, start}) =>
		Array.from({length: segments + 1}, (_, index) => {
			const angle = ((start + (index * 90) / segments) * Math.PI) / 180;
			return {x: centerX + radius * Math.cos(angle), y: centerY + radius * Math.sin(angle)};
		}),
	);
	const addVertex = (x: number, y: number) => {
		positions.push(x, y, 0);
		uvs.push(x + half, y + half);
	};
	for (let index = 0; index < outline.length; index++) {
		const current = outline[index];
		const next = outline[(index + 1) % outline.length];
		addVertex(0, 0);
		addVertex(current.x, current.y);
		addVertex(next.x, next.y);
	}
	geometry.setAttribute('position', new Attribute(new Float32Array(positions), 3));
	geometry.setAttribute('uv', new Attribute(new Float32Array(uvs), 2));
	geometry.computeBoundingSphere();
	return geometry;
}

async function applySmartCubeColors(
	player: TwistyPlayer,
	scene: SceneWrapperWithPuzzle,
	isActive: () => boolean,
) {
	const wrapper = await scene.experimentalTwisty3DPuzzleWrapper();
	const puzzle3D = await wrapper.twisty3DPuzzle();
	if (!isActive()) return;
	if ('kpuzzleFaceletInfo' in (puzzle3D as object)) {
		const {kpuzzleFaceletInfo} = puzzle3D as Cube3DWithFacelets;
		const facelets = Object.values(kpuzzleFaceletInfo).flat(2);
		const roundedGeometry =
			facelets[0] && createRoundedStickerGeometry(facelets[0].facelet.geometry);
		for (const {faceIdx, facelet, hintFacelet} of facelets) {
			const color = CUBE_FACE_COLORS[faceIdx];
			if (color === undefined) continue;
			if (roundedGeometry) facelet.geometry = roundedGeometry;
			recolorFacelet(facelet, color);
			if (hintFacelet) {
				const hintGeometry = hintFacelet.geometry;
				if (!hintGeometry.getAttribute('roundedUv')) {
					hintGeometry.setAttribute('roundedUv', hintGeometry.getAttribute('uv'));
				}
				hintFacelet.material = roundedPG3DMaterial(hintFacelet.material);
				hintFacelet.material.color.setHex(color);
			}
		}
		recolorCubeFoundation((puzzle3D as Cube3DWithFacelets).experimentalFoundationMeshes);
	} else if ('stickers' in (puzzle3D as object)) {
		const pg3D = puzzle3D as PG3DWithStickers;
		const stickeringMask = await player.experimentalModel.twistySceneModel.stickeringMask.get();
		if (!isActive()) return;
		for (const orbit of Object.values(pg3D.stickers)) {
			for (const orientation of orbit) {
				for (const sticker of orientation) {
					sticker.origColor = PG3D_CUBE_COLORS[sticker.origColor] ?? sticker.origColor;
				}
			}
		}
		pg3D.setStickeringMask(stickeringMask);
		stylePG3D(pg3D);
	}
	wrapper.scheduleRender();
}

type Indexer = Awaited<ReturnType<TwistyPlayer['experimentalModel']['indexer']['get']>>;
type StepAnimationController = {
	play(options?: {
		direction?: 1 | -1;
		untilBoundary?: 'move' | 'entire-timeline';
		autoSkipToOtherEndIfStartingAtBoundary?: boolean;
	}): void;
};

function normalizeScramble(scramble: string) {
	const normalized = scramble.trim().replace(/\s+/g, ' ');
	if (normalized.includes(' ')) return normalized;

	const moves = normalized.match(/(?:\d+)?[URFDLBMESXYZurfdlb](?:w)?(?:2|')?/g);
	return moves && moves.join('') === normalized ? moves.join(' ') : normalized;
}

function explainMove(move: string) {
	const parts = move.match(/^(\d+)?([FBDURL])(w)?(2|')?$/);
	if (!parts) return 'Turn the indicated layer while keeping the cube orientation.';
	const [, layers, face, wide, turn] = parts;
	const faceName = FACES[face];
	const layer = wide
		? `${layers || 'two'} layer${layers === '1' ? '' : 's'} of the ${faceName} face`
		: `the ${faceName} face`;
	const direction =
		turn === '2'
			? 'a half turn (180°)'
			: turn === "'"
				? 'a quarter turn counterclockwise'
				: 'a quarter turn clockwise';
	return `Turn ${layer} ${direction}, looking directly at that face.`;
}

interface Props {
	scramble: string;
	size?: number;
	puzzle?: TwistyPlayerConfig['puzzle'];
}

type GuideVisualization = '3D' | '2D';

export default function ScrambleGuidePlayer({scramble, size, puzzle}: Props) {
	const mountRef = useRef<HTMLDivElement>(null);
	const playerRef = useRef<TwistyPlayer | null>(null);
	const indexerRef = useRef<Indexer | null>(null);
	const moveButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
	const [step, setStep] = useState(0);
	const [playing, setPlaying] = useState(false);
	const [speed, setSpeed] = useState(1);
	const [visualization, setVisualization] = useState<GuideVisualization>('3D');
	const [showHints, setShowHints] = useState(false);
	const speedRef = useRef(1);
	const [ready, setReady] = useState(false);
	const [error, setError] = useState(false);
	const normalizedScramble = useMemo(() => normalizeScramble(scramble), [scramble]);
	const puzzleId = puzzle ?? PUZZLES_BY_SIZE[size ?? 3];

	const moves = useMemo(() => {
		try {
			return Array.from(new Alg(normalizedScramble).expand().childAlgNodes())
				.filter((node): node is Move => node instanceof Move)
				.map((move) => move.toString());
		} catch {
			return [];
		}
	}, [normalizedScramble]);

	useEffect(() => {
		if (!mountRef.current || !moves.length || !puzzleId) return;
		let active = true;
		const player = new TwistyPlayer({
			puzzle: puzzleId,
			alg: normalizedScramble,
			visualization: '3D',
			background: 'none',
			backView: 'top-right',
			hintFacelets: 'none',
			controlPanel: 'none',
			viewerLink: 'none',
		});
		player.timestamp = 'start';
		player.tempoScale = speedRef.current;
		player.style.width = '82%';
		player.style.height = '100%';
		player.style.marginInline = 'auto';
		mountRef.current.appendChild(player);
		playerRef.current = player;
		const styledScenes = new WeakSet<SceneWrapperWithPuzzle>();
		const checkForScene = () => {
			if (!active || !Object.values(PUZZLES_BY_SIZE).includes(puzzleId)) return;
			const scene =
				player.contentWrapper.querySelector<SceneWrapperWithPuzzle>(
					'twisty-3d-scene-wrapper',
				);
			if (!scene || styledScenes.has(scene)) return;
			styledScenes.add(scene);
			void applySmartCubeColors(
				player,
				scene,
				() => active && player.contentWrapper.contains(scene),
			).catch((error) => {
				console.warn('No se pudieron aplicar los colores del cubo:', error);
			});
		};
		const paletteObserver = new MutationObserver(checkForScene);
		paletteObserver.observe(player.contentWrapper, {childList: true, subtree: true});
		checkForScene();
		setStep(0);
		setPlaying(false);
		setReady(false);
		setError(false);

		const onTimeline = ({timestamp, atEnd}: {timestamp: number; atEnd: boolean}) => {
			const indexer = indexerRef.current;
			if (!active || !indexer) return;
			let completed = 0;
			for (let i = 0; i < indexer.numAnimatedLeaves(); i++) {
				const leaf = i as ExperimentalLeafIndex;
				if (
					indexer.indexToMoveStartTimestamp(leaf) + indexer.moveDuration(leaf) >
					timestamp + 0.5
				)
					break;
				completed++;
			}
			setStep(completed);
			if (atEnd) setPlaying(false);
		};
		const onPlayingInfo = ({playing: isPlaying}: {playing: boolean}) => {
			if (active) setPlaying(isPlaying);
		};
		player.experimentalModel.detailedTimelineInfo.addFreshListener(onTimeline);
		player.experimentalModel.playingInfo.addFreshListener(onPlayingInfo);
		void Promise.all([
			player.experimentalModel.indexer.get(),
			player.experimentalModel.puzzleAlg.get(),
		])
			.then(([indexer, alg]) => {
				if (!active) return;
				if (alg.issues.errors.length || indexer.numAnimatedLeaves() !== moves.length) {
					setError(true);
					return;
				}
				indexerRef.current = indexer;
				setReady(true);
			})
			.catch(() => {
				if (active) setError(true);
			});

		return () => {
			active = false;
			paletteObserver.disconnect();
			player.pause();
			player.experimentalModel.detailedTimelineInfo.removeFreshListener(onTimeline);
			player.experimentalModel.playingInfo.removeFreshListener(onPlayingInfo);
			player.remove();
			playerRef.current = null;
			indexerRef.current = null;
		};
	}, [normalizedScramble, puzzleId, moves]);

	useEffect(() => {
		if (playerRef.current) {
			playerRef.current.visualization = visualization;
		}
	}, [visualization]);

	useEffect(() => {
		speedRef.current = speed;
		if (playerRef.current) {
			playerRef.current.tempoScale = speed;
		}
	}, [speed]);

	useEffect(() => {
		if (playerRef.current) {
			playerRef.current.hintFacelets = showHints ? 'floating' : 'none';
		}
	}, [showHints, normalizedScramble, puzzleId]);

	useEffect(() => {
		const activeMoveIndex = Math.min(step, moves.length - 1);
		if (!ready || activeMoveIndex < 0) return;
		moveButtonRefs.current[activeMoveIndex]?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center',
		});
	}, [moves.length, ready, step]);

	function getBoundaryTimestamp(
		target: number,
		indexer: Indexer,
	): ExperimentalMillisecondTimestamp | 'start' {
		if (target === 0) return 'start';
		const previous = (target - 1) as ExperimentalLeafIndex;
		return (indexer.indexToMoveStartTimestamp(previous) +
			indexer.moveDuration(previous)) as ExperimentalMillisecondTimestamp;
	}

	function goTo(next: number) {
		const player = playerRef.current;
		const indexer = indexerRef.current;
		if (!player || !indexer) return;
		const target = Math.max(0, Math.min(next, moves.length));
		player.pause();
		player.timestamp = getBoundaryTimestamp(target, indexer);
		setStep(target);
		setPlaying(false);
	}

	function animateStep(direction: 1 | -1) {
		const player = playerRef.current;
		const indexer = indexerRef.current;
		if (!player || !indexer || !ready) return;
		if (direction === 1 && step >= moves.length) return;
		if (direction === -1 && step <= 0) return;

		player.pause();
		player.timestamp = getBoundaryTimestamp(step, indexer);
		player.tempoScale = speed;
		const animationController = player.controller
			.animationController as StepAnimationController;
		animationController.play({
			direction,
			untilBoundary: 'move',
			autoSkipToOtherEndIfStartingAtBoundary: false,
		});
	}

	function centerCube() {
		const player = playerRef.current;
		if (!player) return;
		player.cameraLatitude = 35;
		player.cameraLongitude = 30;
		player.cameraDistance = 6;
	}

	function togglePlay() {
		const player = playerRef.current;
		if (!player || !ready) return;
		if (playing) {
			player.pause();
			setPlaying(false);
			return;
		}
		if (step >= moves.length) goTo(0);
		player.play();
		setPlaying(true);
	}

	if (!moves.length || !puzzleId) {
		return <p className="text-error text-sm">Esta mezcla no se puede visualizar.</p>;
	}

	return (
		<div className="space-y-4">
			<div className="border-tmo-module/15 bg-module relative h-[210px] overflow-hidden rounded-xl border sm:h-[250px]">
				<div
					ref={mountRef}
					className="flex h-full w-full items-center"
					aria-label={`${puzzleId} animado`}
				/>
				{!ready && !error && (
					<span className="text-text/60 absolute bottom-3 left-3 text-xs">
						Preparing animation…
					</span>
				)}
				<a
					className="text-text/50 hover:text-primary absolute right-3 bottom-2 z-10 text-xs underline-offset-2 hover:underline"
					href="https://github.com/cubing/cubing.js"
					target="_blank"
					rel="noreferrer"
				>
					Powered by cubing.js
				</a>
			</div>
			{error ? (
				<p className="text-error text-sm">
					Could not play this scramble. Check that the moves are valid for this puzzle.
				</p>
			) : (
				<>
					<div className="flex flex-wrap items-center gap-2">
						<Button
							variant="secondary"
							size="icon"
							title="Back to start"
							aria-label="Back to start"
							disabled={!ready || step === 0}
							onClick={() => goTo(0)}
						>
							<ArrowCounterClockwise aria-hidden="true" />
						</Button>
						<Button
							variant="secondary"
							size="icon"
							title="Previous move"
							aria-label="Previous move"
							disabled={!ready || step === 0}
							onClick={() => animateStep(-1)}
						>
							<CaretLeft aria-hidden="true" />
						</Button>
						<Button
							variant="default"
							className="min-w-32"
							disabled={!ready}
							onClick={togglePlay}
						>
							{playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
							{playing ? 'Pause' : 'Play'}
						</Button>
						<Button
							variant="secondary"
							size="icon"
							title="Next move"
							aria-label="Next move"
							disabled={!ready || step === moves.length}
							onClick={() => animateStep(1)}
						>
							<CaretRight aria-hidden="true" />
						</Button>
						<div className="ml-auto flex shrink-0 items-center gap-2">
							<span className="text-text/65 text-xs">View</span>
							<SelectField
								label="Puzzle visualization"
								value={visualization}
								text={visualization}
								noMargin
								onValueChange={(value) => {
									if (value === '3D' || value === '2D') setVisualization(value);
								}}
								options={[
									{value: '3D', text: '3D'},
									{value: '2D', text: '2D'},
								]}
								triggerProps={{className: 'h-8 w-20 px-2 text-xs'}}
							/>
						</div>
					</div>
					<div className="border-tmo-module/15 bg-module rounded-xl border p-3">
						<div className="mb-2 flex items-center justify-between gap-3">
							<p className="text-text/65 text-xs font-medium tracking-wide uppercase">
								{step < moves.length ? 'Next move' : 'Scramble complete'}
							</p>
							<span className="text-text/65 text-sm tabular-nums" role="status">
								{step} / {moves.length} moves
							</span>
						</div>
						{step < moves.length ? (
							<p className="text-sm">
								<strong className="text-primary mr-2 font-mono text-lg">
									{moves[step]}
								</strong>
								{explainMove(moves[step])}
							</p>
						) : (
							<p className="text-sm">
								The puzzle is scrambled. You can now start solving it.
							</p>
						)}
					</div>
					<div
						className="scramble-guide-scrollbar bg-module border-tmo-module/15 max-w-full overflow-x-auto overflow-y-hidden scroll-smooth rounded-lg border"
						aria-label="Move sequence"
					>
						<div className="flex w-max min-w-full snap-x flex-nowrap gap-1.5 p-2">
							{moves.map((move, index) => (
								<button
									key={index}
									ref={(element) => {
										moveButtonRefs.current[index] = element;
									}}
									type="button"
									disabled={!ready}
									onClick={() => goTo(index + 1)}
									aria-label={`Go to move ${index + 1}: ${move}`}
									aria-current={
										index === Math.min(step, moves.length - 1)
											? 'step'
											: undefined
									}
									className={`focus-visible:outline-primary shrink-0 snap-center rounded-md px-2 py-1 font-mono text-xs transition-colors focus-visible:outline-2 disabled:opacity-50 ${index === Math.min(step, moves.length - 1) ? 'bg-primary text-tmo-primary' : 'bg-module text-text hover:bg-tmo-module/15'}`}
								>
									{move}
								</button>
							))}
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
						<div className="flex min-w-44 flex-1 items-center gap-3">
							<span className="text-text/65 shrink-0 text-xs">Speed</span>
							<Slider
								value={[speed]}
								min={0.5}
								max={2}
								step={0.25}
								aria-label="Animation speed"
								onValueChange={(value) => setSpeed(value[0] ?? 1)}
							/>
							<span className="text-text/65 w-8 text-right text-xs tabular-nums">
								{speed}x
							</span>
						</div>
						<Button
							variant={showHints ? 'secondary' : 'ghost'}
							size="sm"
							title={showHints ? 'Hide face hints' : 'Show face hints'}
							aria-label="Face hints"
							aria-pressed={showHints}
							onClick={() => setShowHints((current) => !current)}
						>
							{showHints ? (
								<Eye aria-hidden="true" />
							) : (
								<EyeSlash aria-hidden="true" />
							)}
							Hints: {showHints ? 'on' : 'off'}
						</Button>
						<Button
							variant="ghost"
							size="sm"
							title="Center puzzle"
							aria-label="Center puzzle"
							onClick={centerCube}
						>
							<CameraRotate aria-hidden="true" />
							Center
						</Button>
					</div>
				</>
			)}
		</div>
	);
}
