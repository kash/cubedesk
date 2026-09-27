import {useTranslation} from 'react-i18next';
import {Button} from '@/components/ui/button';
import {logOut} from '@/util/auth/logout';
import {getDateFromNow} from '@/util/dates';
import {Warning} from 'phosphor-react';
import {useSelector} from 'react-redux';

export default function Banned() {
	const {t, i18n} = useTranslation();
	const me = useSelector((state: any) => state.account.me);

	let bannedText;
	if (me.banned_forever) {
		bannedText = (
			<p>
				{t('auth.ban.intro')}{' '}
				<span className="bg-module text-error box-border rounded p-1 font-semibold">
					{t('auth.ban.permanently')}
				</span>{' '}
				{t('auth.ban.banned')}
			</p>
		);
	} else {
		const until = getDateFromNow(me.banned_until, false, i18n.language);
		bannedText = (
			<p>
				{t('auth.ban.lifted')}{' '}
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
		reason = <i className="italic">{t('common.noReasonProvided')}</i>;
	}

	return (
		<div className="bg-background fixed top-0 left-0 z-[100000000] flex h-screen w-screen items-center justify-center">
			<div className="flex w-[95%] max-w-[500px] flex-col items-center">
				<Warning className="text-error mb-[15px] text-[2rem]" weight="bold" />
				<h4 className="text-text mt-[5px] mb-5 text-[1.3rem]">
					{t('admin.accountBanned')}
				</h4>
				{bannedText}
				<div className="bg-module text-text mb-5 box-border w-full rounded-[10px] p-[15px]">
					<span className="text-text mb-[7px] table font-semibold">
						{t('common.reason')}
					</span>
					<p className="m-0">{reason}</p>
				</div>
				<p>
					{t('auth.ban.contact')}{' '}
					<a className="text-text underline" href="mailto:kash@cubedesk.io">
						kash@cubedesk.io
					</a>
				</p>
				<Button variant="secondary" onClick={logOut}>
					{t('auth.logOut')}
				</Button>
			</div>
		</div>
	);
}
