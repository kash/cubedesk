import React, {useEffect} from 'react';
import './Membership.scss';
import block from '../../../styles/bem';
import {gql} from '@apollo/client/core';
import {MembershipOptions, Membership as MembershipType} from '../../../@types/generated/graphql';
import {useQuery} from '@apollo/client';
import ProCard from './pro_card/ProCard';
import Loading from '../../common/loading/Loading';
import ActiveMembership from './active_membership/ActiveMembership';
import {MEMBERSHIP_FRAGMENT, MEMBERSHIP_OPTIONS_FRAGMENT} from '../../../util/graphql/fragments';
import {getMe} from '../../../actions/account';
import {useDispatch} from 'react-redux';
import {useMe} from '../../../util/hooks/useMe';
import {isNotPro, isPro} from '../../../util/pro';

const b = block('membership');

const MEMBERSHIP_QUERY = gql`
	${MEMBERSHIP_FRAGMENT}

	query Query {
		membership {
			...MembershipFragment
		}
	}
`;

export const MEMBERSHIP_OPTIONS_QUERY = gql`
	${MEMBERSHIP_OPTIONS_FRAGMENT}

	query Query {
		membershipOptions {
			...MembershipOptionsFragment
		}
	}
`;

export default function Membership() {
	const dispatch = useDispatch();
	const me = useMe();

	const {data: memData, loading: memDataLoading} = useQuery<{membership: MembershipType}>(MEMBERSHIP_QUERY);
	const {data: memOpData} = useQuery<{membershipOptions: MembershipOptions}>(MEMBERSHIP_OPTIONS_QUERY);

	useEffect(() => {
		dispatch(getMe());

		if (memData?.membership && memData.membership.status === 'ACTIVE' && isNotPro(me)) {
			dispatch(getMe());
		}
	}, [isPro(me), memData?.membership]);

	let body = <Loading />;

	if (memData?.membership?.status === 'ACTIVE') {
		body = <ActiveMembership membership={memData.membership} />;
	} else if (memOpData?.membershipOptions && !memDataLoading) {
		body = <ProCard options={memOpData?.membershipOptions} />;
	}

	return <div className={b()}>{body}</div>;
}
