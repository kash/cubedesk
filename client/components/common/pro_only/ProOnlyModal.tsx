import React from 'react';
import block from '../../../styles/bem';
import ModalHeader from '../modal/modal_header/ModalHeader';
import ProCard from '../../account/membership/pro_card/ProCard';

const b = block('pro-only-modal');

export default function ProOnlyModal() {
	return (
		<div className={b()}>
			<ModalHeader
				title="This is a Pro feature"
				description="To access this feature and many more, please upgrade to Pro. Not only will you get access to dozens for features, but you'll also be supporting development. Thank you!"
			/>
			<ProCard />
		</div>
	);
}
