import AccountNav from '@/components/account/AccountNav';
import React from 'react';

interface Props {
	children: React.ReactNode;
}

export default function Account(props: Props) {
	return (
		<div className="w-full">
			<AccountNav />
			<div className="mt-4 w-full max-w-sm">{props.children}</div>
		</div>
	);
}
