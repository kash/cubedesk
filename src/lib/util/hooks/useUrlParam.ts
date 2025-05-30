import {useSearchParams} from 'next/navigation';

export function useUrlParam(param: string): string {
	const searchParams = useSearchParams();

	return searchParams.get(param);
}

export function useUrlParamNumber(param: string): number {
	const val = useUrlParam(param);

	if (!val) {
		return null;
	}

	try {
		return parseInt(val, 10);
	} catch (e: unknown) {
		return null;
	}
}
