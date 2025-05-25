import React from 'react';
import './Account.scss';
import AccountNav from './AccountNav';
import block from '../../styles/bem';

const b = block('account');

interface Props {
	children: React.ReactNode;
}

export default function Account(props: Props) {
	return (
		<div className={b()}>
			<AccountNav />
			<div>{props.children}</div>
		</div>
	);
}
