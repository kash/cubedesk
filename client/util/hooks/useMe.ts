import {UserAccount} from '@/types/user';
import {RootStateOrAny, useSelector} from 'react-redux';

export function useMe(): UserAccount {
	const {me} = useSelector((store: RootStateOrAny) => store.account);

	return me;
}
