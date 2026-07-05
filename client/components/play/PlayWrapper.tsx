import PageTitle from '@/components/common/PageTitle';
import React, {ReactElement} from 'react';

interface Props {
	children: ReactElement;
}

export default function PlayWrapper(props: Props) {
	const {children} = props;

	return (
		<div>
			<PageTitle pageName="Play" />
			{children}
		</div>
	);
}
