// Puzzles smart cubes can be. Ids match cube types, so a connected cube maps straight onto the session's cube type.
//
// Every puzzle's state is a 54 character Kociemba facelets string. 2x2 cubes only track corners, so their edges and
// centers always read as solved. Their firmware reports moves relative to a fixed DBL corner (a physical L arrives as
// R), which keeps the state from drifting with whole cube rotations and matches R/U/F-only 2x2 scrambles. A 2x2 that
// reports all six faces would need its moves normalized into that frame for scramble tracking to work.

export type SmartPuzzle = '333' | '222';

type SmartPuzzleInfo = {
	/** Layers per side, for the visual */
	size: number;
	/** solvedState is the state the user last marked as solved */
	isSolved: (facelets: string, solvedState: string) => boolean;
};

// Facelet offsets of the 4 corner stickers within each 9 sticker face
const CORNER_OFFSETS = [0, 2, 6, 8];

export const SMART_PUZZLES: Record<SmartPuzzle, SmartPuzzleInfo> = {
	'333': {
		size: 3,
		isSolved: (facelets, solvedState) => facelets === solvedState,
	},
	'222': {
		size: 2,
		// Any face with matching corners counts, so solving in a different orientation still stops the timer
		isSolved: (facelets) =>
			Array.from({length: 6}, (_, face) => face * 9).every((start) =>
				CORNER_OFFSETS.every((offset) => facelets[start + offset] === facelets[start]),
			),
	},
};

export function isSmartCubeType(cubeType: string | undefined): cubeType is SmartPuzzle {
	return !!cubeType && Object.keys(SMART_PUZZLES).includes(cubeType);
}
