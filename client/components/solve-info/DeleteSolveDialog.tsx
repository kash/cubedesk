import ConfirmDialog from '@/components/common/ConfirmDialog';
import {getSetting} from '@/db/settings/query';
import {deleteSolveDb} from '@/db/solves/update';
import {Solve} from '@/types/solve';
import React, {useState} from 'react';

export function useSolveDeletion(onDeleted?: () => void) {
	const [solve, setSolve] = useState<Solve | null>(null);
	function requestDelete(target: Solve) {
		if (getSetting('confirm_delete_solve')) {
			setSolve(target);
		} else {
			void deleteSolveDb(target)
				.then(() => onDeleted?.())
				.catch(() => {
					/* The mutation reports its error. */
				});
		}
	}
	return {
		requestDelete,
		dialogProps: {
			solve,
			onOpenChange: (open: boolean) => {
				if (!open) setSolve(null);
			},
			onDeleted,
		},
	};
}

export default function DeleteSolveDialog({
	solve,
	onOpenChange,
	onDeleted,
}: {
	solve: Solve | null;
	onOpenChange: (open: boolean) => void;
	onDeleted?: () => void;
}) {
	if (!solve) return null;
	return (
		<ConfirmDialog
			open
			onOpenChange={onOpenChange}
			title="Delete solve"
			description="Are you sure you want to delete this solve?"
			buttonText="Delete solve"
			hideInput
			triggerAction={() => deleteSolveDb(solve)}
			onComplete={onDeleted}
		/>
	);
}
