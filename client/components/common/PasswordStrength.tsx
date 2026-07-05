import {validateStrongPassword} from '@/util/auth/password';
import {cn} from '@/util/cn';
import {Check} from 'phosphor-react';
import React, {ReactNode} from 'react';

interface Props {
	password: string;
	confirmPassword?: string;
}

export default function PasswordStrength(props: Props) {
	const {password, confirmPassword} = props;
	const result = validateStrongPassword(password, confirmPassword);

	let confirm: ReactNode = null;
	if (typeof confirmPassword === 'string') {
		confirm = <PasswordCase name="Passwords match" checked={result.confirmMatches} />;
	}

	return (
		<div className="my-1.25 flex flex-col items-start">
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
		<span
			className={cn(
				'mb-1 flex flex-row items-center gap-1.25 text-sm text-text opacity-50',
				checked && 'text-[#2dbd61] opacity-100'
			)}
		>
			<Check weight="bold" />
			{name}
		</span>
	);
}
