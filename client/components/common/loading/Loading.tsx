import React from 'react';
import {CircleNotch} from '@phosphor-icons/react';
import './Loading.scss';

export default function Loading() {
	return (
		<div className="cd-common__loading">
			<CircleNotch className="spin" weight="bold" />
		</div>
	);
}
