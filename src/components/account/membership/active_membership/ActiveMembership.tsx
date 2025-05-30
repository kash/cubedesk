import ConfirmDialog from '@/components/common/ConfirmDialog';
import './ActiveMembership.scss';
import Module from '@/components/common/module/Module';
import {triggerConfetti} from '@/components/timer/helpers/pb';
import {Button} from '@/components/ui/button';
import {getDateFromNow} from '@/lib/util/dates';
import {toastSuccess} from '@/lib/util/toast';
import block from '@/styles/bem';
import {api} from '@/trpc/react';
import {Membership} from '@/types/memebership';
import {Star} from '@phosphor-icons/react/dist/ssr';
import React, {useCallback, useEffect} from 'react';
import ProFeatureList from '../pro_card/pro_feature_list/ProFeatureList';

const b = block('active-membership');

interface Props {
	membership: Membership;
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

	const cancelMembership = useCallback(async () => {
		await cancelMemMut.mutateAsync();
		window.location.reload();
	}, [cancelMemMut]);

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
				{!cancelAtPeriodEnd && (
					<ConfirmDialog
						title="Cancel Membership"
						description="Be careful here. You're about to cancel your Pro membership."
						buttonText="Cancel Membership"
						triggerAction={cancelMembership}
					>
						<Button variant="destructive">Cancel Membership</Button>
					</ConfirmDialog>
				)}
			</div>
		</Module>
	);
}
