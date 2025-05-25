import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {setSsrValue} from '../../actions/ssr';

export function useSsr<T>(key: string): [T, (value: T) => void] {
	const dispatch = useDispatch();
	const ssr = useSelector((state: RootStateOrAny) => state?.ssr);

	let value: T = null;
	if (key && key in ssr) {
		value = ssr[key];
	}

	function setSsr(value: T) {
		dispatch(setSsrValue(key, value));
	}

	return [value, setSsr];
}
