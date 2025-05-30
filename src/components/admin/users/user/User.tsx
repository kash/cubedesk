import UserView from '@/components/admin/manage_user/ManageUser';
import Avatar from '@/components/common/avatar/Avatar';
import './User.scss';
import Emblem from '@/components/common/emblem/Emblem';
import {UserAccountForAdmin} from '@/generated/zod';
import {openModal} from '@/lib/actions/general';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

interface UserProps {
	user: UserAccountForAdmin;
	blurb?: string;
	label?: string;
	fullWidth?: boolean;
}

export default function User(props: UserProps) {
	const dispatch = useDispatch();
	const [user, setUser] = useState(props.user);
	const [banned, setBanned] = useState(props.user.banned);

	const openUser = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(openModal(<UserView userId={user.id} />));
	};

	let className = 'cd-admin__users__user';
	if (banned) {
		className += ' cd-admin__users__user--banned';
	}

	let blurb = null;
	if (props.blurb) {
		blurb = <p>{props.blurb}</p>;
	}

	let label = null;
	if (props.label) {
		label = <Emblem text={props.label} />;
	}

	const style: React.CSSProperties = {};
	if (props.fullWidth) {
		style.padding = '0';
		style.width = '100%';
	}

	return (
		<button style={style} className={className} onClick={openUser}>
			{label}
			<Avatar target="_blank" showEmail profile={user.profile} user={user} />
			{blurb}
		</button>
	);
}
