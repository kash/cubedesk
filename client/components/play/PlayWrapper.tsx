import PageTitle from '@/components/common/PageTitle';
import React, {ReactElement} from 'react';

interface Props {
	children: ReactElement;
}

export default function PlayWrapper(props: Props) {
	const {children} = props;

	return (
		<div className="mx-auto w-full max-w-4xl py-4 sm:py-8">
			<PageTitle pageName="Play" description="Go head-to-head or push your own limits." />
			{children}
		</div>
	);
}
