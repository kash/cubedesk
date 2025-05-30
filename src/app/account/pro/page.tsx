'use client';

import {api} from '@/trpc/react';
import '../../../components/account/membership/Membership.scss';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import ActiveMembership from '../../../components/account/membership/active_membership/ActiveMembership';
import ProCard from '../../../components/account/membership/pro_card/ProCard';
import Loading from '../../../components/common/loading/Loading';
import {getMe} from '../../../lib/actions/account';
import {useMe} from '../../../lib/util/hooks/useMe';
import {isNotPro} from '../../../lib/util/pro';
import block from '../../../styles/bem';

const b = block('membership');

export default function ProPage() {
	const dispatch = useDispatch();
	const me = useMe();

	const {data: memData, isLoading: memDataLoading} = api.membership.membership.useQuery();
	const {data: memOpData} = api.membership.membershipOptions.useQuery();

	useEffect(() => {
		dispatch(getMe());

		if (memData && memData.status === 'ACTIVE' && isNotPro(me)) {
			dispatch(getMe());
		}
	}, [dispatch, me, memData]);

	let body = <Loading />;

	if (memData?.status === 'ACTIVE') {
		body = <ActiveMembership membership={memData} />;
	} else if (memOpData && !memDataLoading) {
		body = <ProCard options={memOpData} />;
	}

	return <div className={b()}>{body}</div>;
}
