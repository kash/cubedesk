import {useLocation} from 'react-router-dom';

export function useUrlParam(param: string): string {
	const location = useLocation();
	const params = new URLSearchParams(location.search);

	return params.get(param);
}

export function useUrlParamNumber(param: string): number {
	const val = useUrlParam(param);

	if (!val) {
		return null;
	}

	try {
		return parseInt(val, 10);
	} catch (e) {
		return null;
	}
}
