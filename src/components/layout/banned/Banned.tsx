import React from 'react';
import { useSelector } from 'react-redux';
import { Warning } from '@phosphor-icons/react/dist/ssr';
import '@/components/layout/banned/Banned.scss';
import { getDateFromNow } from '@/lib/util/dates';
import { Button } from '@/components/ui/button';
import { logOut } from '@/lib/util/auth/logout';
import { UserAccount } from '@/generated/zod';

interface RootState {
	account: {
		me: UserAccount;
	};
}

export default function Banned() {
	const me = useSelector((store: RootState) => store.account.me);

	let bannedText: React.ReactNode;

	if (me.banned_forever) {
		bannedText = (
			<p>
				You account has been <span>permanently</span> banned
			</p>
		);
	} else {
		const until = getDateFromNow(me.banned_until!);
		bannedText = (
			<p>
				Ban will be automatically lifted <span>{until}</span>
			</p>
		);
	}

	let reason: React.ReactNode;
	if (me.bans && me.bans.length) {
		const ban = me.bans[0];
		reason = ban.reason;
	} else {
		reason = <i>No reason provided</i>;
	}

	return (
		<div className="cd-banned">
			<div className="cd-banned__body">
				<Warning weight="bold" />
				<h4>Account banned</h4>
				{bannedText}
				<div className="cd-banned__body__reason">
					<span>Reason</span>
					<p>{reason}</p>
				</div>
				<p>
					If you believe this is a mistake, please email{' '}
					<a href="mailto:kash@cubedesk.io">kash@cubedesk.io</a>
				</p>
				<Button onClick={logOut}>Log out</Button>
			</div>
		</div>
	);
}
