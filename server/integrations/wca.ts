import {WCA_EVENT_ORDER} from '@/shared/wca';
import type {WcaBest, WcaCompetition, WcaEventRecord, WcaProfile, WcaStats} from '@/types/wca';
import axios from 'axios';
import {z} from 'zod';

// Public results API endorsed by WCA's software team. OAuth credentials never go here.
const RESULTS_API = 'https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/refs/heads/v1';
const rankSchema = z.object({
	eventId: z.string().min(1),
	best: z.number().int(),
	rank: z
		.object({
			world: z.number().int().nullable().optional(),
			country: z.number().int().nullable().optional(),
		})
		.optional(),
});
const personSchema = z.object({
	id: z.string(),
	numberOfCompetitions: z.number().int().nonnegative(),
	competitionIds: z.array(z.string().regex(/^[a-zA-Z0-9]+$/)),
	rank: z.object({singles: z.array(rankSchema), averages: z.array(rankSchema)}),
});
const competitionSchema = z.object({
	id: z.string(),
	name: z.string().min(1),
	date: z.object({from: z.iso.date()}),
});

function toBest(result: z.infer<typeof rankSchema>): WcaBest | null {
	if (result.best <= 0) return null;
	return {
		value: result.best,
		nationalRank: result.rank?.country && result.rank.country > 0 ? result.rank.country : null,
		worldRank: result.rank?.world && result.rank.world > 0 ? result.rank.world : null,
	};
}

export function normalizeWcaPerson(input: unknown, wcaId: string) {
	const person = personSchema.parse(input);
	if (person.id !== wcaId) throw new Error('Unexpected WCA identity');
	const events = new Map<string, WcaEventRecord>();
	for (const [kind, results] of [
		['single', person.rank.singles],
		['average', person.rank.averages],
	] as const) {
		for (const result of results) {
			const best = toBest(result);
			if (!best) continue;
			const row = events.get(result.eventId) ?? {
				eventId: result.eventId,
				single: null,
				average: null,
			};
			row[kind] = best;
			events.set(result.eventId, row);
		}
	}
	const order = (id: string) => {
		const index = WCA_EVENT_ORDER.indexOf(id);
		return index < 0 ? WCA_EVENT_ORDER.length : index;
	};
	return {
		records: [...events.values()].sort(
			(a, b) => order(a.eventId) - order(b.eventId) || a.eventId.localeCompare(b.eventId),
		),
		competitionCount: person.numberOfCompetitions,
		competitionIds: [...new Set(person.competitionIds)],
	};
}

async function getLatestCompetition(
	ids: string[],
): Promise<Pick<WcaStats, 'latestCompetition' | 'competitionDetailsUnavailable'>> {
	let latestCompetition: WcaCompetition | null = null;
	let failed = false;
	let nextIndex = 0;
	// Bound the entire metadata lookup as well as each request, even for prolific competitors.
	const deadline = Date.now() + 10000;
	async function worker() {
		while (!failed && nextIndex < ids.length) {
			const remaining = deadline - Date.now();
			if (remaining <= 0) {
				failed = true;
				return;
			}
			const id = ids[nextIndex++];
			try {
				const response = await axios.get(
					`${RESULTS_API}/competitions/${encodeURIComponent(id)}.json`,
					{
						timeout: Math.min(5000, remaining),
					},
				);
				const competition = competitionSchema.parse(response.data);
				if (competition.id !== id) throw new Error('Unexpected competition');
				const current = {
					id,
					name: competition.name,
					date: competition.date.from,
					url: `https://www.worldcubeassociation.org/competitions/${encodeURIComponent(id)}`,
				};
				if (
					!latestCompetition ||
					current.date > latestCompetition.date ||
					(current.date === latestCompetition.date && current.id < latestCompetition.id)
				) {
					latestCompetition = current;
				}
			} catch {
				failed = true;
			}
		}
	}
	await Promise.all(Array.from({length: Math.min(4, ids.length)}, worker));
	// Incomplete metadata cannot establish which competition is latest.
	return {
		latestCompetition: failed ? null : latestCompetition,
		competitionDetailsUnavailable: failed,
	};
}

export async function getWcaStats(wcaId: string): Promise<Pick<WcaProfile, 'status' | 'stats'>> {
	if (!/^\d{4}[A-Z]{4}\d{2}$/.test(wcaId)) return {status: 'unavailable', stats: null};
	let response;
	try {
		response = await axios.get(`${RESULTS_API}/persons/${wcaId}.json`, {timeout: 5000});
	} catch (error) {
		return {
			status:
				axios.isAxiosError(error) && error.response?.status === 404
					? 'no_results'
					: 'unavailable',
			stats: null,
		};
	}
	try {
		const {competitionIds, ...stats} = normalizeWcaPerson(response.data, wcaId);
		return {
			status: 'ready',
			stats: {...stats, ...(await getLatestCompetition(competitionIds))},
		};
	} catch {
		return {status: 'unavailable', stats: null};
	}
}
