import {useSelector} from 'react-redux';
import {Warning} from 'phosphor-react';
import {getDateFromNow} from '@/util/dates';
import Button from '@/components/common/Button';
import {logOut} from '@/util/auth/logout';

export default function Banned() {
	const me = useSelector((state: any) => state.account.me);

	let bannedText;
	if (me.banned_forever) {
		bannedText = (
			<p>
				You account has been{' '}
				<span className="bg-module text-error box-border rounded p-1 font-semibold">
					permanently
				</span>{' '}
				banned
			</p>
		);
	} else {
		const until = getDateFromNow(me.banned_until);
		bannedText = (
			<p>
				Ban will be automatically lifted{' '}
				<span className="bg-module text-error box-border rounded p-1 font-semibold">
					{until}
				</span>
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
		<div className="bg-background fixed top-0 left-0 z-[100000000] flex h-screen w-screen items-center justify-center">
			<div className="flex w-[95%] max-w-[500px] flex-col items-center">
				<Warning className="text-error mb-[15px] text-[2rem]" weight="bold" />
				<h4 className="text-text mt-[5px] mb-5 text-[1.3rem]">Account banned</h4>
				{bannedText}
				<div className="bg-module text-text mb-5 box-border w-full rounded-[10px] p-[15px]">
					<span className="text-text mb-[7px] table font-semibold">Reason</span>
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
