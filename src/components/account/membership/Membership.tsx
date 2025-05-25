import React, {useEffect} from 'react';
import './Membership.scss';
import block from '../../../styles/bem';
import ProCard from './pro_card/ProCard';
import Loading from '../../common/loading/Loading';
import ActiveMembership from './active_membership/ActiveMembership';
import {getMe} from '../../../lib/actions/account';
import {useDispatch} from 'react-redux';
import {useMe} from '../../../lib/util/hooks/useMe';
import {isNotPro, isPro} from '../../../lib/util/pro';
import {api} from '@/trpc/react';

const b = block('membership');

export default function Membership() {
	const dispatch = useDispatch();
	const me = useMe();

	const {data: memData, isLoading: memDataLoading} = api.membership.membership.useQuery();
	const {data: memOpData} = api.membership.membershipOptions.useQuery();

	useEffect(() => {
		dispatch(getMe());

		if (memData && memData.status === 'ACTIVE' && isNotPro(me)) {
			dispatch(getMe());
		}
	}, [isPro(me), memData]);

	let body = <Loading />;

	if (memData?.status === 'ACTIVE') {
		body = <ActiveMembership membership={memData} />;
	} else if (memOpData && !memDataLoading) {
		body = <ProCard options={memOpData} />;
	}

	return <div className={b()}>{body}</div>;
}
