import Cube from 'cubejs';
import {processSmartTurns, SmartTurn} from '../../../client/util/smart_scramble';
import {getLLState, reverseTurns} from './turns';
import {getMatchingOLLState, getMatchingPLLState} from './ll_states';

export function getSolveSteps(turns) {
	const SOLVED_STATE = 'UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB';

	const cubejs = new Cube();

	// Going backwards to get the cube in the right state
	reverseTurns(cubejs, turns);

	// Per side, we need the cross, which is static
	// Depending on what side we're on, we also need the sides filled in

	const sideIndex = {
		U: 0,
		R: 1,
		F: 2,
		D: 3,
		L: 4,
		B: 5,
	};
	const sideOpposites = {
		U: 'D',
		L: 'R',
		R: 'L',
		D: 'U',
		F: 'B',
		B: 'F',
	};
	const cornerAdjSide = {
		U: {
			0: ['L:0', 'B:2'],
			2: ['B:0', 'R:2'],
			6: ['L:2', 'F:0'],
			8: ['F:2', 'R:0'],
		},
		R: {
			0: ['F:2', 'U:8'],
			2: ['U:2', 'B:0'],
			6: ['F:8', 'D:2'],
			8: ['D:8', 'B:6'],
		},
		L: {
			0: ['U:6', 'B:2'],
			2: ['U:8', 'F:0'],
			6: ['B:8', 'D:0'],
			8: ['F:6', 'D:2'],
		},
		F: {
			0: ['L:2', 'U:6'],
			2: ['U:8', 'R:0'],
			6: ['L:8', 'D:0'],
			8: ['D:2', 'R:6'],
		},
		D: {
			0: ['L:8', 'F:6'],
			2: ['F:8', 'R:6'],
			6: ['L:6', 'B:8'],
			8: ['R:8', 'B:6'],
		},
		B: {
			0: ['R:2', 'U:2'],
			2: ['U:0', 'L:0'],
			6: ['R:8', 'D:8'],
			8: ['L:6', 'D:6'],
		},
	};
	const edgeAdj = {
		U: {
			R: 1,
			F: 1,
			L: 1,
			B: 1,
		},
		R: {
			U: 5,
			F: 5,
			B: 3,
			D: 5,
		},
		L: {
			U: 3,
			F: 3,
			D: 3,
			B: 5,
		},
		F: {
			U: 7,
			R: 3,
			D: 1,
			L: 5,
		},
		D: {
			R: 7,
			F: 7,
			L: 7,
			B: 7,
		},
		B: {
			U: 1,
			R: 5,
			D: 7,
			L: 3,
		},
	};

	let stepTurns = [];
	const steps = {
		cross: null,
		f2l: null,
		oll: null,
		pll: null,
	};
	const cornerIndices = [0, 2, 6, 8];
	const edgeIndices = [1, 3, 5, 7];
	let sides = ['U', 'R', 'F', 'L', 'D', 'B'];
	let lastStepCompletedAt = new Date(turns[0].completedAt).getTime();

	for (const [index, turn] of turns.entries()) {
		const move = turn.turn;
		const completedAt = new Date(turn.completedAt).getTime();

		stepTurns.push(move);
		cubejs.move(move);

		const state = cubejs.asString();

		for (const side of sides) {
			if (!steps.cross && areEdgesSolved(side, state)) {
				setStep(completedAt, side, 'cross', 0, null, stepTurns, index);
			}

			if (steps.cross && !steps.f2l && areFirstTwoLayersSolved(side, state)) {
				setStep(completedAt, side, 'f2l', 1, null, stepTurns, index);
				populateF2lStages(index, side);
			}

			if (steps.f2l && !steps.oll && isFaceOriented(getOppositeSide(side), state)) {
				const opposite = getOppositeSide(side);
				let ollState = getCubejsWithUOnTop(side, getLLState(stepTurns));

				if (opposite !== 'U') {
					ollState = ollState.replace(/U/g, 'X');
					ollState = ollState.replace(new RegExp(opposite, 'g'), 'U');
				}

				const matchingOll = getMatchingOLLState(ollState);

				setStep(completedAt, side, 'oll', 2, null, stepTurns, index, {
					ollCaseKey: matchingOll?.key,
				});
				break;
			}

			if (steps.oll && !steps.pll && isSolved(state)) {
				const opposite = getOppositeSide(side);
				let pllState = getCubejsWithUOnTop(side, getLLState(stepTurns));

				pllState = pllState.replace(new RegExp(side, 'g'), 'X');
				pllState = pllState.replace(new RegExp(opposite, 'g'), 'X');

				const uSides = Object.keys(edgeAdj['U']);
				const baseSides = Object.keys(edgeAdj[opposite]);

				for (const [index, bs] of baseSides.entries()) {
					pllState = pllState.replace(new RegExp(bs, 'g'), index);
				}

				for (const [index, us] of uSides.entries()) {
					pllState = pllState.replace(new RegExp(String(index), 'g'), us);
				}

				const matchingPll = getMatchingPLLState(pllState);

				setStep(completedAt, side, 'pll', 3, null, stepTurns, index, {
					pllCaseKey: matchingPll?.key,
				});
			}
		}
	}

	function setStep(completedAt: number, side: string, name: string, index: number, parent: string, moves: SmartTurn[], turnsIndex: number, options?: {
		ollCaseKey?: string
		pllCaseKey?: string
	}) {
		sides = [side];
		const time = (completedAt - lastStepCompletedAt) / 1000;

		let recognitionTime = 0;

		const firstTurnIndex = turnsIndex - (moves.length - 1);
		if (firstTurnIndex > 0) {
			const lastTime = new Date(turns[firstTurnIndex - 1].completedAt).getTime();
			const firstTime = new Date(turns[firstTurnIndex].completedAt).getTime();
			recognitionTime = (firstTime - lastTime) / 1000;
		}

		const skipped = moves.length <= 2;

		let tps = 0.0;
		if (moves.length && time) {
			tps = Math.floor((moves.length / time) * 100) / 100;
		}

		steps[name] = {
			index,
			parentName: parent,
			skipped,
			turns: [...moves],
			recognitionTime,
			tps,
			turnsString: processSmartTurns(moves, true).join(' '),
			turnCount: moves.length,
			time,
			...(options || {}),
		};

		if (!parent) {
			stepTurns = [];
		}

		lastStepCompletedAt = completedAt;
	}

	function populateF2lStages(turnIndex, base) {
		const moves = steps.f2l.turns;

		turnIndex = steps.cross.turns.length;

		reverseTurns(cubejs, moves);

		let tempTurns = [];
		const cornerMem = {};
		let slotCounter = 1;

		for (const [index, turn] of moves.entries()) {
			const realTurn = turns[turnIndex + index];
			const completedAt = new Date(realTurn.completedAt).getTime();

			if (index === 0) {
				lastStepCompletedAt = completedAt;
			}

			cubejs.move(turn);
			tempTurns.push(turn);

			const state = cubejs.asString();

			for (const corner of cornerIndices) {
				const stepName = `f2l_${slotCounter}`;
				const cornerAbsIndex = getAbsoluteIndexByLocalIndex(base, corner);

				if (cornerMem[corner] || !cornerBlockCompleted(cornerAbsIndex, state)) {
					continue;
				}

				setStep(completedAt, base, stepName, slotCounter - 1, 'f2l', [...tempTurns], turnIndex + index);
				tempTurns = [];
				cornerMem[corner] = true;
				slotCounter += 1;
				break;
			}
		}
	}

	function isSolved(state) {
		return state === SOLVED_STATE;
	}

	function getOppositeSide(side) {
		return sideOpposites[side];
	}

	function areOpposites(side1, side2) {
		return sideOpposites[side1] === side2;
	}

	function getAbsoluteIndexByLocalIndex(side, localIndex) {
		if (typeof localIndex === 'string') {
			localIndex = parseInt(localIndex);
		}

		return sideIndex[side] * 9 + localIndex;
	}

	function getLocalIndexByAbsoluteIndex(absoluteIndex) {
		return absoluteIndex % 9;
	}

	// Given a piece index anywhere, it will find the side, the center of that side, and return true
	// if they are both the same color
	function pieceSameAsCenter(absoluteIndex, state) {
		const centerIndex = getCenterIndexGivenAnyIndex(absoluteIndex);
		return state[absoluteIndex] === state[centerIndex];
	}

	function getCubejsWithUOnTop(base, state) {
		const cj = Cube.fromString(state);

		if (base === 'U') {
			cj.move('x2');
		} else if (base === 'R') {
			cj.move('z');
		} else if (base === 'L') {
			cj.move("z'");
		} else if (base === 'F') {
			cj.move("x'");
		} else if (base === 'B') {
			cj.move('x');
		}

		return cj.asString();
	}

	function getCenterFromSide(side, state) {
		const first = getFirstIndexFromSide(side);
		return state[getCenterIndexGivenAnyIndex(first)];
	}

	function getCenterGivenAnyIndex(absoluteIndex, state) {
		return state[getCenterIndexGivenAnyIndex(absoluteIndex)];
	}

	// Given a piece index, it will find the face and return the index of that center piece
	function getCenterIndexGivenAnyIndex(absoluteIndex) {
		const firstPieceOfFaceIndex = 9 * Math.floor(absoluteIndex / 9);
		return firstPieceOfFaceIndex + 4;
	}

	function isFaceOriented(side, state) {
		return areCornersOriented(side, state) && areEdgesOriented(side, state);
	}

	function areFirstTwoLayersSolved(base, state) {
		const adjs = Object.keys(edgeAdj[base]);

		// Checking if edges between second layer are solved
		for (const side of adjs) {
			for (const side2 of adjs) {
				if (side === side2 || areOpposites(side, side2)) {
					continue;
				}

				const sideCenter = getCenterFromSide(side, state);
				const side2Center = getCenterFromSide(side2, state);

				if (!edgeBetweenCentersSolved(sideCenter, side2Center, state)) {
					return false;
				}
			}
		}

		return isFaceSolved(base, state);
	}

	function isFaceSolved(side, state) {
		return areCornersSolved(side, state) && areEdgesSolved(side, state);
	}

	function getFirstIndexFromSide(side) {
		return sideIndex[side] * 9;
	}

	// Checks if the corner pieces are the same as the center
	function areCornersOriented(side, state) {
		const firstIndex = getFirstIndexFromSide(side);

		for (const cornerIndex of cornerIndices) {
			const sameAsCenter = pieceSameAsCenter(firstIndex + cornerIndex, state);
			if (!sameAsCenter) {
				return false;
			}
		}

		return true;
	}

	// Checks if the corner pieces are the same as the center AND that
	function areCornersSolved(side, state) {
		for (const cornerIndex of cornerIndices) {
			const cornerAbsoluteIndex = getAbsoluteIndexByLocalIndex(side, cornerIndex);
			const center = getCenterIndexGivenAnyIndex(cornerAbsoluteIndex);

			if (state[center] !== state[cornerAbsoluteIndex]) {
				return false;
			}

			const adjFaces = Object.keys(edgeAdj[side]);

			for (const adjFace of adjFaces) {
				const adjEdgeIndex = edgeAdj[side][adjFace];
				const adjLocalIndex = getAbsoluteIndexByLocalIndex(adjFace, adjEdgeIndex);
				const corners = getEdgeAdjacentOffset(adjEdgeIndex);

				const leftIndex = adjLocalIndex + corners[0];
				const rightIndex = adjLocalIndex + corners[1];

				const leftPiece = state[leftIndex];
				const rightPiece = state[rightIndex];

				if (leftPiece !== rightPiece) {
					return false;
				}
			}
		}

		return true;
	}

	function cornerBlockCompleted(absoluteIndex, state) {
		const side = getSideFromAbsoluteIndex(absoluteIndex);
		const localIndex = getLocalIndexByAbsoluteIndex(absoluteIndex);

		const edgeLocalIndices = getCornerAdjacentOffset(localIndex);

		const side1Index = absoluteIndex + edgeLocalIndices[0];
		const side2Index = absoluteIndex + edgeLocalIndices[1];

		// Check for one square
		if (
			!pieceSameAsCenter(absoluteIndex, state) ||
			!pieceSameAsCenter(side1Index, state) ||
			!pieceSameAsCenter(side2Index, state)
		) {
			return false;
		}

		const cornerAdjacents = cornerAdjSide[side][localIndex];

		for (const sides of cornerAdjacents) {
			const [side, connectingIndex] = sides.split(':');
			const abs = getAbsoluteIndexByLocalIndex(side, connectingIndex);

			if (!pieceSameAsCenter(abs, state)) {
				return false;
			}
		}

		const adjSideToCorners = cornerAdjSide[side][localIndex].map((s) => s.split(':')[0]);
		return edgeBetweenCentersSolved(adjSideToCorners[0], adjSideToCorners[1], state);
	}

	// center1 and center2 should be side names
	function edgeBetweenCentersSolved(center1, center2, state) {
		const center1Edge = edgeAdj[center1][center2];
		const center1Abs = getAbsoluteIndexByLocalIndex(center2, center1Edge);

		const center2Edge = edgeAdj[center2][center1];
		const center2Abs = getAbsoluteIndexByLocalIndex(center1, center2Edge);

		return pieceSameAsCenter(center1Abs, state) && pieceSameAsCenter(center2Abs, state);
	}

	function getSideFromAbsoluteIndex(absoluteIndex) {
		const centerIndex = getCenterIndexGivenAnyIndex(absoluteIndex);
		return SOLVED_STATE[centerIndex];
	}

	function areEdgesOriented(side, state) {
		for (const edgeIndex of edgeIndices) {
			const index = getAbsoluteIndexByLocalIndex(side, edgeIndex);
			if (!pieceSameAsCenter(index, state)) {
				return false;
			}
		}

		return true;
	}

	function areEdgesSolved(side, state) {
		if (!areEdgesOriented(side, state)) {
			return false;
		}

		const keys = Object.keys(edgeAdj[side]);
		for (const key of keys) {
			const index = getAbsoluteIndexByLocalIndex(key, edgeAdj[side][key]);

			if (!pieceSameAsCenter(index, state)) {
				return false;
			}
		}

		return true;
	}

	function getCornerAdjacentOffset(localIndex) {
		if (localIndex === 0) {
			return [1, 3];
		} else if (localIndex === 2) {
			return [-1, 3];
		} else if (localIndex === 6) {
			return [-3, 1];
		} else if (localIndex === 8) {
			return [-1, -3];
		}
	}

	// Given a *local* index, it will find the two piece that are side by side to that piece
	function getEdgeAdjacentOffset(localIndex) {
		if (localIndex === 1 || localIndex === 7) {
			return [-1, 1];
		} else if (localIndex === 3 || localIndex === 5) {
			return [-3, 3];
		}
	}

	return steps;
}
