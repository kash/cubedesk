import React, {ReactElement, ReactNode} from 'react';
import PageTitle from '@/components/common/page-title/PageTitle';

interface Props {
	children: ReactNode;
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
