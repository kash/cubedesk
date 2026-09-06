import {Separator} from '@/components/ui/separator';
import React from 'react';

export default function HorizontalLine({text}: {text?: string}) {
	if (!text) return <Separator className="my-6" />;
	return (
		<div className="my-6 flex items-center gap-3">
			<Separator className="flex-1" />
			<span className="text-text/60 shrink-0 text-xs">{text}</span>
			<Separator className="flex-1" />
		</div>
	);
}
