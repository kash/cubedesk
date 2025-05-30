import {useRouter} from 'next/navigation';
import React, {ReactNode} from 'react';
import {useMe} from '../../../lib/util/hooks/useMe';
import Cover from '../cover/Cover';

interface Props {
	ignore?: boolean;
	noPadding?: boolean;
	children: ReactNode;
}

export default function LoggedInOnly(props: Props) {
	const {children, ignore, noPadding} = props;

	const router = useRouter();
	const me = useMe();

	if (me || ignore) {
		return <>{children}</>;
	}

	function onClick(e) {
		e.preventDefault();

		router.push('/signup');
	}

	return (
		<Cover tagText="Sign up" noPadding={noPadding} onClick={onClick}>
			{children}
		</Cover>
	);
}
