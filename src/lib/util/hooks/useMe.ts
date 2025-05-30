import {RootStateOrAny, useSelector} from 'react-redux';
import {UserAccount} from '@/types/user-account';

export function useMe(): UserAccount {
	const {me} = useSelector((store: RootStateOrAny) => store.account);

	return me;
}
