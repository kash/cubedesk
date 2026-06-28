import React, {useState} from 'react';
import Tag from '@/components/common/tag/Tag';
import Switch from '@/components/common/switch/Switch';
import {MembershipOptions} from '@/@types/generated/graphql';
import Button, {CommonType} from '@/components/common/button/Button';
import {gql} from '@apollo/client/core';
import {ArrowSquareOut} from 'phosphor-react';
import {useMutation, useQuery} from '@apollo/client';
import {MEMBERSHIP_OPTIONS_QUERY} from '@/components/account/membership/Membership';
import ProFeatureList from '@/components/account/membership/pro-card/ProFeatureList';
import Loading from '@/components/common/loading/Loading';
import {useMe} from '@/util/hooks/useMe';
import Module from '@/components/common/module/Module';

enum MembershipInterval {
	YEAR = 'year',
	MONTH = 'month',
}

interface GenerateBuyLinkMutData {
	generateBuyLink: string;
}

interface GenerateBuyLinkMutVars {
	priceId: string;
}

const GENERATE_BUY_LINK_MUT = gql`
	mutation Mutate($priceId: String!) {
		generateBuyLink(priceId: $priceId)
	}
`;

interface Props {
	options?: MembershipOptions;
}

export default function ProCard(props: Props) {
	const [selInterval, setSelInterval] = useState<MembershipInterval>(MembershipInterval.MONTH);
	const {data: memOpData, loading} = useQuery<{membershipOptions: MembershipOptions}>(MEMBERSHIP_OPTIONS_QUERY, {
		skip: !!props.options,
	});

	const me = useMe();
	const options = props.options || memOpData?.membershipOptions;

	const yearlySelected = selInterval === MembershipInterval.YEAR;
	const [genBuyLinkMut, genBuyLinkMutData] = useMutation<GenerateBuyLinkMutData, GenerateBuyLinkMutVars>(
		GENERATE_BUY_LINK_MUT
	);

	const selectedOption = options?.[selInterval];
	if (!selectedOption?.id || selectedOption.unit_amount == null || !selectedOption.interval || loading) {
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

		const url = await genBuyLinkMut({
			variables: {
				priceId: selectedPriceId,
			},
		});

		if (url.data?.generateBuyLink) {
			window.location.href = url.data.generateBuyLink;
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
			<div className="mb-5 mt-4 box-border rounded-2xl px-4 py-1 font-label text-sm font-semibold text-text opacity-70">
				<button className="border-b-2 border-solid border-secondary p-0 font-label text-sm font-semibold text-secondary" onClick={cycleInterval}>
					Switch to yearly
				</button>{' '}
				and get 2 months free
			</div>
		);
	} else {
		upsell = (
			<div className="mb-5 mt-4 box-border rounded-2xl px-4 py-1 font-label text-sm font-semibold text-secondary opacity-70">
				You're getting 2 months free with yearly!
			</div>
		);
	}

	return (
		<Module>
			<div className="box-border flex w-full flex-col items-center rounded p-2">
				<Tag text="PRO" backgroundColor="green" small />
				<div className="mb-4 mt-5 flex flex-row items-end text-text">
					<h2 className="mb-0 mr-1.5 text-5xl">
						<span>$</span>
						{price || '-'}
					</h2>
					<span className="relative -top-2 table font-label text-lg font-semibold text-text opacity-60">/{interval}</span>
				</div>
				<div className="flex flex-row items-center">
					<span className="mx-2.5 table font-label text-sm font-semibold text-text">Monthly</span>
					<Switch small onChange={cycleInterval} on={yearlySelected} />
					<span className="mx-2.5 table font-label text-sm font-semibold text-text">Yearly</span>
				</div>
				{upsell}
				<Button
					fullWidth
					primary
					large
					loading={genBuyLinkMutData.loading}
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
					loading={genBuyLinkMutData.loading}
					theme={CommonType.PRIMARY}
					onClick={openBuyLink}
					text={`Buy Pro - ${buyText}`}
					icon={<ArrowSquareOut />}
				/>
			</div>
		</Module>
	);
}
