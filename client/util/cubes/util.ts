import {getSettings} from '@/db/settings/query';
import {CUBE_SCRAMBLES, ScrambleType} from '@/util/cubes/cube_scrambles';
import {EVENT_TYPES, EventType} from '@/util/cubes/event_types';

export function getScrambleTypeById(scrambleId: string): ScrambleType | undefined {
	return CUBE_SCRAMBLES[scrambleId];
}

// Converts EVENT_TYPES to array
export function getDefaultEventTypes(): EventType[] {
	return Object.keys(EVENT_TYPES).map((eventType) => EVENT_TYPES[eventType]);
}

// Combines default event types and customer event types as a map
function getAllEventTypesAsMap(): Record<string, EventType> {
	return {
		...getCustomEventTypeAsMap(),
		...EVENT_TYPES,
	};
}

// Combines default event types and custom event types
export function getAllEventTypes(): EventType[] {
	return getCustomEventTypes().concat(getDefaultEventTypes());
}

export function getDefaultEventTypeNames(): string[] {
	return Object.keys(EVENT_TYPES);
}

// Combines default event types names and custom event types names
export function getAllEventTypeNames(): string[] {
	return Object.keys(getCustomEventTypeAsMap()).concat(Object.keys(EVENT_TYPES));
}

export function getAllScrambleTypeNames(): string[] {
	return Object.keys(CUBE_SCRAMBLES);
}

export function getEventTypeInfoById(id: string): EventType | undefined {
	if (!id) {
		return undefined;
	}

	const all = getAllEventTypesAsMap();
	return all[id];
}

function getEventTypeInfoByName(name: string): EventType | undefined {
	if (!name) {
		return undefined;
	}

	for (const ct of getAllEventTypes()) {
		if (ct.name === name) {
			return ct;
		}
	}

	return undefined;
}

export function getEventTypeInfo(idOrName: string): EventType | undefined {
	return getEventTypeInfoById(idOrName) || getEventTypeInfoByName(idOrName);
}

export function getEventTypeName(id: string): string | undefined {
	return getEventTypeInfoById(id)?.name;
}

function getCustomEventTypes(): EventType[] {
	const customEventTypes = getSettings()?.custom_event_types;

	if (!customEventTypes) {
		return [];
	}

	return customEventTypes.map((ct) => ({
		id: ct.id,
		name: ct.name,
		scramble: ct.scramble,
		private: ct.private,
	}));
}

function getCustomEventTypeAsMap(): Record<string, EventType> {
	const list = getCustomEventTypes();
	// Convert list to map with name as key
	const output: Record<string, EventType> = {};

	for (const ct of list) {
		output[ct.id] = ct;
	}

	return output;
}
