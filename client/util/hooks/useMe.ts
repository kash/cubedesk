import {UserAccount} from '@/types/user';
import {useSelector} from 'react-redux';
import {RootState} from '@/reducers/reducers';

export function useMe(): UserAccount {
	const {me} = useSelector((store: RootState) => store.account);

	return me;
}
