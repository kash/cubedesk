import {useTranslation} from 'react-i18next';
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
	const {t} = useTranslation();
	return (
		<Dialog open={solve !== null} onOpenChange={onOpenChange}>
			<DialogContent closeLabel={t('common.closeDialog')} focusFallbackRef={focusFallbackRef}>
				<DialogTitle className="sr-only">{t('solves.solveDetails')}</DialogTitle>
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
