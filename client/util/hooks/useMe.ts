import {RootState} from '@/reducers/reducers';
import {UserAccount} from '@/types/user';
import {useSelector} from 'react-redux';

export function useMe(): UserAccount {
	const {me} = useSelector((store: RootState) => store.account);

	return me;
}
