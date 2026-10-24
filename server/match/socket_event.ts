import {SocketClient} from '@/server/match/init';
import {getUserFromClient} from '@/server/match/util';
import {reportError} from '@/server/services/errors';
import {logger} from '@/server/services/logger';
import {ClientToServerEvents} from '@/shared/match/socketio.types';
import {PublicUserAccount} from '@/types/user';
import {Socket} from 'socket.io';
import {z} from 'zod';

type ClientEvent = keyof ClientToServerEvents;
type EventArgs<E extends ClientEvent> = Parameters<ClientToServerEvents[E]>;
type EventSchema<E extends ClientEvent> = z.ZodType<EventArgs<E>>;

export const socketIdSchema = z.string().min(1).max(100);

export async function runSocketHandler(
	client: SocketClient,
	event: string,
	handler: () => unknown,
) {
	try {
		await handler();
	} catch (error) {
		reportError('Socket event handler failed', error, {
			socketEvent: event,
			socketClientId: client.id,
		});
	}
}

export function onSocketEvent<E extends ClientEvent>(
	client: SocketClient,
	event: E,
	schema: EventSchema<E>,
	handler: (...args: EventArgs<E>) => unknown,
) {
	const listener = (...payload: unknown[]) => {
		void runSocketHandler(client, event, async () => {
			const parsed = schema.safeParse(payload);
			if (!parsed.success) {
				logger.warn('Invalid socket event payload', {
					socketEvent: event,
					socketClientId: client.id,
					issues: parsed.error.issues,
				});
				return;
			}

			await handler(...parsed.data);
		});
	};

	const socket: Socket = client;
	const eventName: string = event;
	socket.on(eventName, listener);
}

export function onProtectedSocketEvent<E extends ClientEvent>(
	client: SocketClient,
	event: E,
	schema: EventSchema<E>,
	handler: (user: PublicUserAccount, ...args: EventArgs<E>) => unknown,
) {
	onSocketEvent(client, event, schema, async (...args) => {
		const user = await getUserFromClient(client);
		if (!user) {
			return;
		}

		await handler(user, ...args);
	});
}
