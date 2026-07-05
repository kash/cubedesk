import {MatchClientEvent} from '@/client/shared/match/events';

export function getMatchClientEvent(eventName: MatchClientEvent, userId: string): string {
	return `${eventName}_${userId}`;
}
