import SolveInfo from '@/components/solve-info/SolveInfo';
import {Dialog, DialogContent, DialogTitle} from '@/components/ui/dialog';
import {Solve} from '@/types/solve';
import React from 'react';

export default function SolveInfoDialog({
	solve,
	disabled,
	onOpenChange,
	focusFallbackRef,
}: {
	solve: Solve | null;
	disabled?: boolean;
	onOpenChange: (open: boolean) => void;
	focusFallbackRef?: React.RefObject<HTMLElement | null>;
}) {
	return (
		<Dialog open={solve !== null} onOpenChange={onOpenChange}>
			<DialogContent focusFallbackRef={focusFallbackRef}>
				<DialogTitle className="sr-only">Solve details</DialogTitle>
				{solve && (
					<SolveInfo
						solveId={solve.id}
						solve={solve}
						disabled={disabled}
						onComplete={() => onOpenChange(false)}
					/>
				)}
			</DialogContent>
		</Dialog>
	);
}
