import {RootStateOrAny, useSelector} from 'react-redux';
import {UserAccount} from '../../../server/schemas/UserAccount.schema';

export function useMe(): UserAccount {
	const {me} = useSelector((store: RootStateOrAny) => store.account);

	return me;
}
