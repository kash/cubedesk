import {MatchClientEvent} from './events';

export function getMatchClientEvent(eventName: MatchClientEvent, userId: string): string {
	return `${eventName}_${userId}`;
}
