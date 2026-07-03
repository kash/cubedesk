import React, {ReactNode, useEffect} from 'react';
import Button from '@/components/common/Button';
import {Star} from 'phosphor-react';
import ProFeatureList from '@/components/account/membership/pro-card/ProFeatureList';
import Module from '@/components/common/Module';
import {getDateFromNow} from '@/util/dates';
import {triggerConfetti} from '@/components/timer/helpers/pb';
import {toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import {Membership} from '@/types/membership';

interface Props {
	membership: Membership;
}

export default function ActiveMembership(props: Props) {
	const {membership} = props;

	const cancelAtPeriodEnd = membership.cancel_at_period_end;
	const currentPeriodEnd = membership.current_period_end;

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const success = urlParams.get('success');
		if (success && success === 'true') {
			window.history.replaceState({}, '', window.location.pathname);
			triggerConfetti();
			setTimeout(() => {
				triggerConfetti();
			}, 300);
			setTimeout(() => {
				triggerConfetti();
			}, 600);
			toastSuccess('Thank you for buying a Pro membership and supporting development!');
		}
	}, []);

	async function cancelMembership() {
		await trpc.membership.cancel.mutate();
		window.location.reload();
	}

	let cancelBlock: ReactNode = null;
	if (cancelAtPeriodEnd && currentPeriodEnd) {
		const endsAt = getDateFromNow(currentPeriodEnd * 1000);
		cancelBlock = <div className="text-error font-bold">Membership ends {endsAt}</div>;
	}

	return (
		<Module>
			<div className="flex flex-col items-center">
				<div className="bg-primary text-tmo-primary mb-2.5 box-border flex w-full flex-row items-center justify-center rounded-md p-4 font-bold shadow-md">
					You have a Pro membership! <Star className="ml-1.5" weight="fill" />
				</div>
				{cancelBlock}
				<ProFeatureList />
				<Button
					hidden={!!cancelAtPeriodEnd}
					confirmModalProps={{
						title: 'Cancel Membership',
						description: "Be careful here. You're about to cancel your Pro membership.",
						buttonText: 'Cancel Membership',
						triggerAction: cancelMembership,
					}}
					flat
					danger
					className="mt-6"
					text="Cancel Membership"
				/>
			</div>
		</Module>
	);
}
