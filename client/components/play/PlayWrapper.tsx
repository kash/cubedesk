import React, {ReactElement} from 'react';
import PageTitle from '../common/page_title/PageTitle';

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
