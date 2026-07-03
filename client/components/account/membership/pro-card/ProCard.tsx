import React, {useEffect, useState} from 'react';
import Tag from '@/components/common/Tag';
import Switch from '@/components/common/Switch';
import Button, {CommonType} from '@/components/common/Button';
import {ArrowSquareOut} from 'phosphor-react';
import ProFeatureList from '@/components/account/membership/pro-card/ProFeatureList';
import Loading from '@/components/common/Loading';
import {useMe} from '@/util/hooks/useMe';
import Module from '@/components/common/Module';
import {trpc} from '@/util/trpc';
import {MembershipOptions} from '@/types/membership';

enum MembershipInterval {
	YEAR = 'year',
	MONTH = 'month',
}

interface Props {
	options?: MembershipOptions;
}

export default function ProCard(props: Props) {
	const [selInterval, setSelInterval] = useState<MembershipInterval>(MembershipInterval.MONTH);
	const [fetchedOptions, setFetchedOptions] = useState<MembershipOptions | null>(null);
	const [loading, setLoading] = useState(!props.options);
	const [buyLinkLoading, setBuyLinkLoading] = useState(false);

	useEffect(() => {
		if (props.options) {
			return;
		}

		trpc.membership.options
			.query()
			.then((res) => {
				setFetchedOptions(res);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const me = useMe();
	const options = props.options || fetchedOptions;

	const yearlySelected = selInterval === MembershipInterval.YEAR;

	const selectedOption = options?.[selInterval];
	if (
		!selectedOption?.id ||
		selectedOption.unit_amount == null ||
		!selectedOption.interval ||
		loading
	) {
		return <Loading />;
	}
	const selectedPriceId = selectedOption.id;
	const selectedUnitAmount = selectedOption.unit_amount;
	const selectedInterval = selectedOption.interval;

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

		setBuyLinkLoading(true);
		try {
			const url = await trpc.membership.generateBuyLink.mutate({
				priceId: selectedPriceId,
			});

			if (url) {
				window.location.href = url;
			}
		} finally {
			setBuyLinkLoading(false);
		}
	}

	let price = '0';
	let interval = '-';
	let buyText = '';

	price = (selectedUnitAmount / 100).toFixed(2);
	interval = selectedInterval;
	buyText = selectedInterval === MembershipInterval.MONTH ? 'Monthly' : 'Yearly';

	let upsell;
	if (selInterval === MembershipInterval.MONTH) {
		upsell = (
			<div className="font-label text-text mt-4 mb-5 box-border rounded-2xl px-4 py-1 text-sm font-semibold opacity-70">
				<button
					className="border-secondary font-label text-secondary border-b-2 border-solid p-0 text-sm font-semibold"
					onClick={cycleInterval}
				>
					Switch to yearly
				</button>{' '}
				and get 2 months free
			</div>
		);
	} else {
		upsell = (
			<div className="font-label text-secondary mt-4 mb-5 box-border rounded-2xl px-4 py-1 text-sm font-semibold opacity-70">
				You're getting 2 months free with yearly!
			</div>
		);
	}

	return (
		<Module>
			<div className="box-border flex w-full flex-col items-center rounded p-2">
				<Tag text="PRO" backgroundColor="green" small />
				<div className="text-text mt-5 mb-4 flex flex-row items-end">
					<h2 className="mr-1.5 mb-0 text-5xl">
						<span>$</span>
						{price || '-'}
					</h2>
					<span className="font-label text-text relative -top-2 table text-lg font-semibold opacity-60">
						/{interval}
					</span>
				</div>
				<div className="flex flex-row items-center">
					<span className="font-label text-text mx-2.5 table text-sm font-semibold">
						Monthly
					</span>
					<Switch small onChange={cycleInterval} on={yearlySelected} />
					<span className="font-label text-text mx-2.5 table text-sm font-semibold">
						Yearly
					</span>
				</div>
				{upsell}
				<Button
					fullWidth
					primary
					large
					loading={buyLinkLoading}
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
					loading={buyLinkLoading}
					theme={CommonType.PRIMARY}
					onClick={openBuyLink}
					text={`Buy Pro - ${buyText}`}
					icon={<ArrowSquareOut />}
				/>
			</div>
		</Module>
	);
}
