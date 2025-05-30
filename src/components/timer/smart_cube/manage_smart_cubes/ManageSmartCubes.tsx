import React from 'react';
import './ManageSmartCubes.scss';
import block from '../../../../styles/bem';
import Empty from '../../../common/empty/Empty';

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
