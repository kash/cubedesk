export interface WcaBest {
	value: number;
	nationalRank: number | null;
	worldRank: number | null;
}

export interface WcaEventRecord {
	eventId: string;
	single: WcaBest | null;
	average: WcaBest | null;
}

export interface WcaCompetition {
	id: string;
	name: string;
	date: string;
	url: string;
}

export interface WcaStats {
	records: WcaEventRecord[];
	competitionCount: number;
	latestCompetition: WcaCompetition | null;
	competitionDetailsUnavailable: boolean;
}

export interface WcaProfile {
	url: string | null;
	wcaId: string | null;
	status: 'ready' | 'no_wca_id' | 'no_results' | 'unavailable';
	stats: WcaStats | null;
}
