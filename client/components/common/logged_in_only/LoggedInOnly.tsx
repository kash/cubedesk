import React, {ReactNode} from 'react';
import {useMe} from '../../../util/hooks/useMe';
import Cover from '../cover/Cover';
import {useHistory} from 'react-router-dom';

interface Props {
	ignore?: boolean;
	noPadding?: boolean;
	children: ReactNode;
}

export default function LoggedInOnly(props: Props) {
	const {children, ignore, noPadding} = props;

	const history = useHistory();
	const me = useMe();

	if (me || ignore) {
		return <>{children}</>;
	}

	function onClick(e) {
		e.preventDefault();

		history.push('/signup');
	}

	return (
		<Cover tagText="Sign up" noPadding={noPadding} onClick={onClick}>
			{children}
		</Cover>
	);
}
