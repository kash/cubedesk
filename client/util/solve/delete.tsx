import React from 'react';
import {getStore} from '../../components/store';
import {deleteSolveDb} from '../../db/solves/update';

export function confirmDeleteSolve() {
	const store = getStore();
	const {
		timer: {confirmDeleteSolve: cds},
	} = store.getState();

	if (!cds) {
		return;
	}

	deleteSolveDb(cds.solve);
}
