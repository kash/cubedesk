import type {AppRouter} from '@/server/trpc/router';
import type {inferRouterOutputs} from '@trpc/server';

type RouterOutputs = inferRouterOutputs<AppRouter>;

/**
 * Data the app needs before it can show anything, loaded during server rendering and embedded in the page so the
 * client doesn't have to request it after the page loads. Shapes match the equivalent tRPC queries.
 */
export interface AppBootstrap {
	settings: RouterOutputs['setting']['get'];
	statsModule: RouterOutputs['stats']['module'];
}
