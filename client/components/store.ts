import {UserAccount} from '@/types/user';
import {Store} from 'redux';

let store: Store<any>;

export function setStore(s: Store<any>) {
	store = s;
}

export function getStore(): Store<any> {
	return store;
}

export function getMe(): UserAccount | null {
	return store.getState()?.account?.me ?? null;
}
