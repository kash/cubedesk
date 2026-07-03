import React, {useEffect, useState} from 'react';
import ProCard from '@/components/account/membership/pro-card/ProCard';
import Loading from '@/components/common/Loading';
import ActiveMembership from '@/components/account/membership/ActiveMembership';
import {getMe} from '@/actions/account';
import {useDispatch} from 'react-redux';
import {useMe} from '@/util/hooks/useMe';
import {isNotPro, isPro} from '@/util/pro';
import {trpc} from '@/util/trpc';
import {Membership as MembershipType, MembershipOptions} from '@/types/membership';

export default function Membership() {
	const dispatch = useDispatch<any>();
	const me = useMe();

	const [membership, setMembership] = useState<MembershipType | null>(null);
	const [membershipLoading, setMembershipLoading] = useState(true);
	const [membershipOptions, setMembershipOptions] = useState<MembershipOptions | null>(null);

	useEffect(() => {
		trpc.membership.get
			.query()
			.then((res) => {
				setMembership(res);
			})
			.finally(() => {
				setMembershipLoading(false);
			});

		trpc.membership.options.query().then((res) => {
			setMembershipOptions(res);
		});
	}, []);

	useEffect(() => {
		dispatch(getMe());

		if (membership && membership.status === 'ACTIVE' && isNotPro(me)) {
			dispatch(getMe());
		}
	}, [isPro(me), membership]);

	let body = <Loading />;

	if (membership?.status === 'ACTIVE') {
		body = <ActiveMembership membership={membership} />;
	} else if (membershipOptions && !membershipLoading) {
		body = <ProCard options={membershipOptions} />;
	}

	return <div>{body}</div>;
}
