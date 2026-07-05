import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/reducers/reducers';
import {setSsrValue} from '@/actions/ssr';

export function useSsr<T>(key: string): [T | null, (value: T) => void] {
	const dispatch = useDispatch();
	const ssr = useSelector((state: RootState) => state?.ssr);

	let value: T | null = null;
	if (key && key in ssr) {
		value = ssr[key];
	}

	function setSsr(value: T) {
		dispatch(setSsrValue(key, value));
	}

	return [value, setSsr];
}
