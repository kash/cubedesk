import React, {useState} from 'react';
import './ProCard.scss';
import block from '../../../../styles/bem';
import Tag from '../../../common/tag/Tag';
import Switch from '../../../common/switch/Switch';
import {MembershipOptions} from '../../../../@types/generated/graphql';
import Button, {CommonType} from '../../../common/button/Button';
import {gql} from '@apollo/client/core';
import {ArrowSquareOut} from 'phosphor-react';
import {useMutation, useQuery} from '@apollo/client';
import Module from '../../../common/module/Module';
import {MEMBERSHIP_OPTIONS_QUERY} from '../Membership';
import ProFeatureList from './pro_feature_list/ProFeatureList';
import Loading from '../../../common/loading/Loading';
import {useMe} from '../../../../util/hooks/useMe';

const b = block('pro-card');

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

		const url = await genBuyLinkMut({
			variables: {
				priceId: options[selInterval].id,
			},
		});

		window.location.href = url.data.generateBuyLink;
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
