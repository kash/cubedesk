import React from 'react';

import ModalHeader from '@/components/common/modal/ModalHeader';
import ProCard from '@/components/account/membership/pro-card/ProCard';

export default function ProOnlyModal() {
	return (
		<div>
			<ModalHeader
				title="This is a Pro feature"
				description="To access this feature and many more, please upgrade to Pro. Not only will you get access to dozens for features, but you'll also be supporting development. Thank you!"
			/>
			<ProCard />
		</div>
	);
}
