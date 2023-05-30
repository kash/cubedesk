import React, {useEffect} from 'react';
import './ActiveMembership.scss';
import block from '../../../../styles/bem';
import {Membership} from '../../../../@types/generated/graphql';
import Button from '../../../common/button/Button';
import {Star} from '@phosphor-icons/react';
import {useMutation} from '@apollo/client';
import {gql} from '@apollo/client/core';
import ProFeatureList from '../pro_card/pro_feature_list/ProFeatureList';
import Module from '../../../common/module/Module';
import {getDateFromNow} from '../../../../util/dates';
import {triggerConfetti} from '../../../timer/helpers/pb';
import {toastSuccess} from '../../../../util/toast';

const b = block('active-membership');

const CANCEL_MEM_MUT = gql`
	mutation Mutate {
		cancelMembership
	}
`;

interface Props {
	membership: Membership;
}

export default function ActiveMembership(props: Props) {
	const {membership} = props;
	const [cancelMemMut] = useMutation(CANCEL_MEM_MUT);

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
		await cancelMemMut();
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
