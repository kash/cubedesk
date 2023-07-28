import React from 'react';
import {SignIn} from 'phosphor-react';
import Button from '../../common/button/Button';
import {useMe} from '../../../util/hooks/useMe';

interface Props {
	collapsed: boolean;
}

export default function LoginNav(props: Props) {
	const me = useMe();

	if (me) {
		return null;
	}

	if (props.collapsed) {
		return (
			<div className="mt-4">
				<Button icon={<SignIn weight="bold" />} to="/signup" gray />
			</div>
		);
	}

	return (
		<div className="mt-4 flex w-full flex-row gap-2">
			<Button text="Log in" to="/login" fullWidth gray />
			<Button text="Sign up" to="/signup" fullWidth primary />
		</div>
	);
}
