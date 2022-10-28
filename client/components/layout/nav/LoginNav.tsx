import React from 'react';
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
				<Button icon="ph-sign-in-bold" to="/signup" gray />
			</div>
		);
	}

	return (
		<div className="flex flex-row gap-2 w-full mt-4">
			<Button text="Log in" to="/login" fullWidth gray />
			<Button text="Sign up" to="/signup" fullWidth primary />
		</div>
	);
}
