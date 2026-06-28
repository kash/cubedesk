import {useSelector} from 'react-redux';
import {Warning} from 'phosphor-react';
import {getDateFromNow} from '@/util/dates';
import Button from '@/components/common/button/Button';
import {logOut} from '@/util/auth/logout';

export default function Banned() {
	const me = useSelector((state: any) => state.account.me);

	let bannedText;
	if (me.banned_forever) {
		bannedText = (
			<p>
				You account has been{' '}
				<span className="box-border rounded bg-module p-1 font-semibold text-error">permanently</span> banned
			</p>
		);
	} else {
		const until = getDateFromNow(me.banned_until);
		bannedText = (
			<p>
				Ban will be automatically lifted{' '}
				<span className="box-border rounded bg-module p-1 font-semibold text-error">{until}</span>
			</p>
		);
	}

	let reason;
	if (me.bans && me.bans.length) {
		const ban = me.bans[0];
		reason = ban.reason;
	} else {
		reason = <i className="italic">No reason provided</i>;
	}

	return (
		<div className="fixed left-0 top-0 z-[100000000] flex h-screen w-screen items-center justify-center bg-background">
			<div className="flex w-[95%] max-w-[500px] flex-col items-center">
				<Warning className="mb-[15px] text-[2rem] text-error" weight="bold" />
				<h4 className="mb-5 mt-[5px] text-[1.3rem] text-text">Account banned</h4>
				{bannedText}
				<div className="mb-5 box-border w-full rounded-[10px] bg-module p-[15px] text-text">
					<span className="mb-[7px] table font-semibold text-text">Reason</span>
					<p className="m-0">{reason}</p>
				</div>
				<p>
					If you believe this is a mistake, please email{' '}
					<a className="text-text underline" href="mailto:kash@cubedesk.io">
						kash@cubedesk.io
					</a>
				</p>
				<Button text="Log out" onClick={logOut} />
			</div>
		</div>
	);
}
