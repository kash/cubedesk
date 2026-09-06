import {Spinner} from '@/components/ui/spinner';
import React from 'react';
export default function Loading() {
	return (
		<div className="flex min-h-25 w-full items-center justify-center">
			<Spinner className="size-6" />
		</div>
	);
}
