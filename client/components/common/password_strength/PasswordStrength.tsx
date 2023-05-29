import React from 'react';
import {validateStrongPassword} from '../../../util/auth/password';
import './PasswordStrength.scss';
import {Check} from '@phosphor-icons/react';
import block from '../../../styles/bem';

const b = block('password-strength');

interface Props {
	password: string;
	confirmPassword?: string;
}

export default function PasswordStrength(props: Props) {
	const {password, confirmPassword} = props;
	const result = validateStrongPassword(password, confirmPassword);

	let confirm = null;
	if (typeof confirmPassword === 'string') {
		confirm = <PasswordCase name="Passwords match" checked={result.confirmMatches} />;
	}

	return (
		<div className={b()}>
			<PasswordCase name="Lowercase letter" checked={result.lower1Check} />
			<PasswordCase name="Uppercase letter" checked={result.cap1Check} />
			<PasswordCase name="1 number" checked={result.number1Check} />
			<PasswordCase name="8 characters" checked={result.char8Check} />
			{confirm}
		</div>
	);
}

interface SingleProps {
	name: string;
	checked: boolean;
}

function PasswordCase(props: SingleProps) {
	const {name, checked} = props;

	return (
		<span className={b('case', {checked})}>
			<Check weight="bold" />
			{name}
		</span>
	);
}
