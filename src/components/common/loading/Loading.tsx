import {CircleNotch} from '@phosphor-icons/react/dist/ssr';
import React from 'react';
import '@/components/common/loading/Loading.scss';

export default function Loading() {
	return (
		<div className="cd-common__loading">
			<CircleNotch className="spin" weight="bold" />
		</div>
	);
}
