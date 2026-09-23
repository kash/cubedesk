import type {TwistyPlayerConfig} from 'cubing/twisty';
import {Dialog, DialogContent, DialogDescription, DialogTitle} from '@/components/ui/dialog';
import React, {Suspense} from 'react';

const ScrambleGuidePlayer = React.lazy(() => import('./ScrambleGuidePlayer'));

interface Props {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	scramble: string;
	size?: number;
	puzzle?: TwistyPlayerConfig['puzzle'];
}

export default function ScrambleGuideDialog({open, onOpenChange, scramble, size, puzzle}: Props) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent
				width={720}
				className="max-h-[calc(100dvh-2rem)] overflow-y-auto p-5 sm:p-7"
			>
				<div className="mb-4 pr-10">
					<DialogTitle className="text-xl">How to scramble this puzzle</DialogTitle>
				</div>
				<Suspense
					fallback={
						<div className="text-text/60 flex h-72 items-center justify-center">
							Loading the puzzle…
						</div>
					}
				>
					<ScrambleGuidePlayer scramble={scramble} size={size} puzzle={puzzle} />
				</Suspense>
			</DialogContent>
		</Dialog>
	);
}
