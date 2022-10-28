import {Store} from 'redux';
import {UserAccount} from '../../server/schemas/UserAccount.schema';

let store: Store<any>;

export function setStore(s: Store<any>) {
	store = s;
}

export function getStore(): Store<any> {
	return store;
}

export function getMe(): UserAccount {
	return store.getState()?.account?.me;
}
