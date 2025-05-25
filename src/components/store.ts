import {Store, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from '../lib/reducers/reducers';
import {UserAccount} from '../generated/zod';

let store: Store<any>;

export function setStore(s: Store<any>) {
	store = s;
}

export function getStore(): Store<any> {
	return store;
}

export function getMe(): UserAccount {
	return store?.getState()?.account?.me;
}

export function createClientStoreIfNeeded(): Store<any> | null {
  // Only create store on client side
  if (typeof window === 'undefined') {
    return null;
  }

  // Check if store already exists
  if (store) {
    return store;
  }

  // Get preloaded state from window
  let preloadedState = {};
  if (typeof window !== 'undefined' && window.__STORE__) {
    preloadedState = JSON.parse(window.__STORE__);
    // Clean up global variable
    delete window.__STORE__;
  }
  
  // Create store
  const newStore = createStore(
    reducers, 
    preloadedState, 
    applyMiddleware(promise(), thunk)
  );
  
  return newStore;
}
