import React from 'react';
import AccountNav from '@/components/account/AccountNav';

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
