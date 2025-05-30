import Loading from '@/components/common/loading/Loading';
import './ProCard.scss';
import Module from '@/components/common/module/Module';
import Switch from '@/components/common/switch/Switch';
import Tag from '@/components/common/tag/Tag';
import {Button} from '@/components/ui/button';
import {useMe} from '@/lib/util/hooks/useMe';
import block from '@/styles/bem';
import {api} from '@/trpc/react';
import {ArrowSquareOut} from '@phosphor-icons/react/dist/ssr';
import React, {useCallback, useState} from 'react';
import ProFeatureList from './pro_feature_list/ProFeatureList';

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
	const {data: memOpData, isLoading: loading} = api.membership.membershipOptions.useQuery(
		undefined,
		{
			enabled: !props.options,
		},
	);

	const me = useMe();
	const options = props.options || memOpData;

	const yearlySelected = selInterval === MembershipInterval.YEAR;
	const genBuyLinkMut = api.membership.generateBuyLink.useMutation();

	if (!options || loading) {
		return <Loading />;
	}

	const cycleInterval = useCallback(() => {
		if (selInterval === MembershipInterval.MONTH) {
			setSelInterval(MembershipInterval.YEAR);
		} else {
			setSelInterval(MembershipInterval.MONTH);
		}
	}, [selInterval]);

	const openBuyLink = useCallback(async () => {
		if (!me) {
			window.location.href = '/login';
			return;
		}

		const url = await genBuyLinkMut.mutateAsync({
			priceId: options![selInterval].id,
		});

		window.location.href = url;
	}, [me, genBuyLinkMut, options, selInterval]);

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
					className="w-full"
					variant="default"
					size="lg"
					loading={genBuyLinkMut.isPending}
					onClick={openBuyLink}
				>
					<ArrowSquareOut className="mr-2" />
					{`Buy Pro - ${buyText}`}
				</Button>
				<ProFeatureList />
				<Button
					className="w-full"
					variant="default"
					size="lg"
					loading={genBuyLinkMut.isPending}
					onClick={openBuyLink}
				>
					<ArrowSquareOut className="mr-2" />
					{`Buy Pro - ${buyText}`}
				</Button>
			</div>
		</Module>
	);
}
