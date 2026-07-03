import React from 'react';
import {CircleNotch} from 'phosphor-react';

export default function Loading() {
	return (
		<div className="flex min-h-25 w-full items-center justify-center">
			<CircleNotch className="spin" weight="bold" />
		</div>
	);
}
