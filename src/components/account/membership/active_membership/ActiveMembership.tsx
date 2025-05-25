import React, {useEffect} from 'react';
import './ActiveMembership.scss';
import block from '../../../../styles/bem';
import Button from '../../../common/button/Button';
import {Star} from 'phosphor-react';
import ProFeatureList from '../pro_card/pro_feature_list/ProFeatureList';
import Module from '../../../common/module/Module';
import {getDateFromNow} from '../../../../lib/util/dates';
import {triggerConfetti} from '../../../timer/helpers/pb';
import {toastSuccess} from '../../../../lib/util/toast';
import {api} from '@/trpc/react';

const b = block('active-membership');

interface Props {
	membership: {
		status: string;
		current_period_end: number;
		cancel_at_period_end: boolean;
		canceled_at: number;
		ended_at: number;
		days_until_due: number;
		start_date: number;
		pricing: {
			id: string;
			currency: string;
			interval: string;
			interval_count: number;
			unit_amount: number;
		};
	};
}

export default function ActiveMembership(props: Props) {
	const {membership} = props;
	const cancelMemMut = api.membership.cancelMembership.useMutation();

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
		await cancelMemMut.mutateAsync();
		window.location.reload();
	}

	let cancelBlock = null;
	if (cancelAtPeriodEnd) {
		const endsAt = getDateFromNow(currentPeriodEnd * 1000);
		cancelBlock = <div className={b('cancelled')}>Membership ends {endsAt}</div>;
	}

	return (
		<Module>
			<div className={b()}>
				<div className={b('check')}>
					You have a Pro membership! <Star weight="fill" />
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
					text="Cancel Membership"
				/>
			</div>
		</Module>
	);
}
