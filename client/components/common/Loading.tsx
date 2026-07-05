import {CircleNotch} from 'phosphor-react';
import React from 'react';

export default function Loading() {
	return (
		<div className="flex min-h-25 w-full items-center justify-center">
			<CircleNotch className="spin" weight="bold" />
		</div>
	);
}
