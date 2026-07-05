import {getSettings} from '@/db/settings/query';
import {CUBE_SCRAMBLES, ScrambleType} from '@/util/cubes/cube_scrambles';
import {CUBE_TYPES, CubeType} from '@/util/cubes/cube_types';

export function getScrambleTypeById(scrambleId: string): ScrambleType | undefined {
	return CUBE_SCRAMBLES[scrambleId];
}

// Converts CUBE_TYPES to array
export function getDefaultCubeTypes(): CubeType[] {
	return Object.keys(CUBE_TYPES).map((cubeType) => CUBE_TYPES[cubeType]);
}

// Combines default cube types and customer cube types as a map
function getAllCubeTypesAsMap(): Record<string, CubeType> {
	return {
		...getCustomCubeTypeAsMap(),
		...CUBE_TYPES,
	};
}

// Combines default cube types and custom cube types
export function getAllCubeTypes(): CubeType[] {
	return getCustomCubeTypes().concat(getDefaultCubeTypes());
}

export function getDefaultCubeTypeNames(): string[] {
	return Object.keys(CUBE_TYPES);
}

// Combines default cube types names and custom cube types names
export function getAllCubeTypeNames(): string[] {
	return Object.keys(getCustomCubeTypeAsMap()).concat(Object.keys(CUBE_TYPES));
}

export function getAllScrambleTypeNames(): string[] {
	return Object.keys(CUBE_SCRAMBLES);
}

export function getCubeTypeInfoById(id: string): CubeType | undefined {
	if (!id) {
		return undefined;
	}

	const all = getAllCubeTypesAsMap();
	return all[id];
}

function getCubeTypeInfoByName(name: string): CubeType | undefined {
	if (!name) {
		return undefined;
	}

	for (const ct of getAllCubeTypes()) {
		if (ct.name === name) {
			return ct;
		}
	}

	return undefined;
}

export function getCubeTypeInfo(idOrName: string): CubeType | undefined {
	return getCubeTypeInfoById(idOrName) || getCubeTypeInfoByName(idOrName);
}

export function getCubeTypeName(id: string): string | undefined {
	return getCubeTypeInfoById(id)?.name;
}

function getCustomCubeTypes(): CubeType[] {
	const customCubeTypes = getSettings()?.custom_cube_types;

	if (!customCubeTypes) {
		return [];
	}

	return customCubeTypes.map((ct) => ({
		id: ct.id,
		name: ct.name,
		scramble: ct.scramble,
		private: ct.private,
	}));
}

function getCustomCubeTypeAsMap(): Record<string, CubeType> {
	const list = getCustomCubeTypes();
	// Convert list to map with name as key
	const output: Record<string, CubeType> = {};

	for (const ct of list) {
		output[ct.id] = ct;
	}

	return output;
}
