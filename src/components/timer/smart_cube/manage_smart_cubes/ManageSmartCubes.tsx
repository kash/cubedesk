import React from 'react';
import './ManageSmartCubes.scss';
import Empty from '../../../common/empty/Empty';
import block from '../../../../styles/bem';

const b = block('manage-smart-cubes');

export default function ManageSmartCubes() {
	return (
		<div className={b()}>
			<div className={b('body')}>
				<Empty text="Smart cube management is temporarily unavailable during the migration to tRPC. Please check back later." />
			</div>
		</div>
	);
}