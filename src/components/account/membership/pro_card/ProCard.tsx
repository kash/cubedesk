import React, {useState} from 'react';
import './ProCard.scss';
import block from '../../../../styles/bem';
import Tag from '../../../common/tag/Tag';
import Switch from '../../../common/switch/Switch';
import Button, {CommonType} from '../../../common/button/Button';
import {ArrowSquareOut} from 'phosphor-react';
import Module from '../../../common/module/Module';
import ProFeatureList from './pro_feature_list/ProFeatureList';
import Loading from '../../../common/loading/Loading';
import {useMe} from '../../../../lib/util/hooks/useMe';
import {api} from '@/trpc/react';

const b = block('pro-card');

enum MembershipInterval {
	YEAR = 'year',
	MONTH = 'month',
}

interface Props {
	options?: {
		month: {
			id: string;
			currency: string;
			interval: string;
			interval_count: number;
			unit_amount: number;
		};
		year: {
			id: string;
			currency: string;
			interval: string;
			interval_count: number;
			unit_amount: number;
		};
	};
}

export default function ProCard(props: Props) {
	const [selInterval, setSelInterval] = useState<MembershipInterval>(MembershipInterval.MONTH);
	const {data: memOpData, isLoading: loading} = api.membership.membershipOptions.useQuery(undefined, {
		enabled: !props.options,
	});

	const me = useMe();
	const options = props.options || memOpData;

	const yearlySelected = selInterval === MembershipInterval.YEAR;
	const genBuyLinkMut = api.membership.generateBuyLink.useMutation();

	if (!options || loading) {
		return <Loading />;
	}

	function cycleInterval() {
		if (selInterval === MembershipInterval.MONTH) {
			setSelInterval(MembershipInterval.YEAR);
		} else {
			setSelInterval(MembershipInterval.MONTH);
		}
	}

	async function openBuyLink() {
		if (!me) {
			window.location.href = '/login';
			return;
		}

		const url = await genBuyLinkMut.mutateAsync({
			priceId: options![selInterval].id,
		});

		window.location.href = url;
	}

	let price = '0';
	let interval = '-';
	let buyText = '';

	if (options) {
		price = (options[selInterval].unit_amount / 100).toFixed(2);
		interval = options[selInterval].interval;
		buyText = options[selInterval].interval === MembershipInterval.MONTH ? 'Monthly' : 'Yearly';
	}

	let upsell;
	if (selInterval === MembershipInterval.MONTH) {
		upsell = (
			<div className={b('upsell')}>
				<button onClick={cycleInterval}>Switch to yearly</button> and get 2 months free
			</div>
		);
	} else {
		upsell = <div className={b('upsold')}>You're getting 2 months free with yearly!</div>;
	}

	return (
		<Module>
			<div className={b()}>
				<Tag text="PRO" backgroundColor="green" small />
				<div className={b('price')}>
					<h2>
						<span>$</span>
						{price || '-'}
					</h2>
					<span>/{interval}</span>
				</div>
				<div className={b('interval-toggle')}>
					<span>Monthly</span>
					<Switch small onChange={cycleInterval} on={yearlySelected} />
					<span>Yearly</span>
				</div>
				{upsell}
				<Button
					fullWidth
					primary
					large
					loading={genBuyLinkMut.isPending}
					theme={CommonType.PRIMARY}
					onClick={openBuyLink}
					text={`Buy Pro - ${buyText}`}
					icon={<ArrowSquareOut />}
				/>
				<ProFeatureList />
				<Button
					fullWidth
					primary
					large
					loading={genBuyLinkMut.isPending}
					theme={CommonType.PRIMARY}
					onClick={openBuyLink}
					text={`Buy Pro - ${buyText}`}
					icon={<ArrowSquareOut />}
				/>
			</div>
		</Module>
	);
}
