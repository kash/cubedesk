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
		<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
			<PasswordCase name="Lowercase" checked={result.lower1Check} />
			<PasswordCase name="Uppercase" checked={result.cap1Check} />
			<PasswordCase name="Number" checked={result.number1Check} />
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
				'text-text flex items-center gap-1 text-xs whitespace-nowrap opacity-50',
				{'text-[#2dbd61] opacity-100': checked},
			)}
		>
			<Check className="shrink-0" weight="bold" />
			{name}
		</span>
	);
}
