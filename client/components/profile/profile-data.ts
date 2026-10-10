import {setSsrValue} from '@/actions/ssr';
import {Image} from '@/types/image';
import {Profile as ProfileSchema} from '@/types/profile';
import {TopAverage, TopSolve} from '@/types/top-solve';
import {PublicUserAccount} from '@/types/user';
import {trpc} from '@/util/trpc';

export interface IProfileData {
	user: PublicUserAccount;
	profile: ProfileSchema;
	pfpImage?: Image;
	headerImage?: Image;
	pbs: {
		[key: string]: {
			single?: TopSolve;
			average?: TopAverage;
		};
	};
}

export async function getProfileData(username: string): Promise<IProfileData> {
	// Raw client (not hooks): this also runs server-side for SSR prefetch
	const profileData = (await trpc.profile.get.query({username})) as unknown as ProfileSchema;

	const topSolves = profileData.top_solves || [];
	const topAverages = profileData.top_averages || [];

	const pbs = {};

	for (const topSolve of topSolves) {
		if (!topSolve?.solve?.event_type) {
			continue;
		}

		const solve = topSolve.solve;
		const eventType = solve.event_type as string;
		if (!pbs[eventType]) {
			pbs[eventType] = {};
		}
		pbs[eventType].single = topSolve;
	}

	for (const topAverage of topAverages) {
		if (!topAverage?.event_type) {
			continue;
		}

		const eventType = topAverage.event_type as string;
		pbs[eventType] ??= {};
		pbs[eventType].average = topAverage;
	}

	return {
		user: profileData.user as PublicUserAccount,
		profile: profileData,
		pfpImage: profileData.pfp_image || undefined,
		headerImage: profileData.header_image || undefined,
		pbs,
	};
}

export async function prefetchProfileData(store, req) {
	const profileData = await getProfileData(req.params.username);
	return store.dispatch(setSsrValue(profileData.user.username as string, profileData));
}
