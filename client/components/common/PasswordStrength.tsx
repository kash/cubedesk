import {validateStrongPassword} from '@/util/auth/password';
import {cn} from '@/util/cn';
import {Check} from 'phosphor-react';
import React, {ReactNode} from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
	password: string;
	confirmPassword?: string;
}

export default function PasswordStrength(props: Props) {
	const {t} = useTranslation();
	const {password, confirmPassword} = props;
	const result = validateStrongPassword(password, confirmPassword);

	let confirm: ReactNode = null;
	if (typeof confirmPassword === 'string') {
		confirm = (
			<PasswordCase
				name={t('auth.passwordStrength.matches')}
				checked={result.confirmMatches}
			/>
		);
	}

	return (
		<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
			<PasswordCase
				name={t('auth.passwordStrength.lowercase')}
				checked={result.lower1Check}
			/>
			<PasswordCase name={t('auth.passwordStrength.uppercase')} checked={result.cap1Check} />
			<PasswordCase name={t('auth.passwordStrength.number')} checked={result.number1Check} />
			<PasswordCase name={t('auth.passwordStrength.length')} checked={result.char8Check} />
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
