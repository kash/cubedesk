import {useSyncExternalStore} from 'react';

interface ActiveDialog {
	id: string;
	order: number;
}
let dialogs: ActiveDialog[] = [];
let nextOrder = 0;
const listeners = new Set<() => void>();
const empty: ActiveDialog[] = [];
export const allocateDialogOrder = () => ++nextOrder;
export function registerDialog(id: string, order: number) {
	dialogs = [...dialogs.filter((dialog) => dialog.id !== id), {id, order}].sort(
		(a, b) => a.order - b.order,
	);
	listeners.forEach((listener) => listener());
	return () => {
		dialogs = dialogs.filter((dialog) => dialog.id !== id);
		listeners.forEach((listener) => listener());
	};
}
export function useActiveDialogs() {
	return useSyncExternalStore(
		(listener) => {
			listeners.add(listener);
			return () => {
				listeners.delete(listener);
			};
		},
		() => dialogs,
		() => empty,
	);
}
