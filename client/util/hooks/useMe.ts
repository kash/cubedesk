import {RootState} from '@/reducers/reducers';
import {UserAccount} from '@/types/user';
import {useSelector} from 'react-redux';

export function useMe(): UserAccount {
	return useSelector((store: RootState) => store.account.me);
}
