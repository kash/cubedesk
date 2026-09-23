import AuthDialog from '@/components/login/AuthDialog';
import {Button} from '@/components/ui/button';
import {
	TooltipContent,
	TooltipProvider,
	TooltipRoot,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import {useMe} from '@/util/hooks/useMe';
import {SignIn} from 'phosphor-react';
import React from 'react';
import {useI18n} from '@/i18n';

interface Props {
	collapsed: boolean;
}

export default function LoginNav(props: Props) {
	const me = useMe();
	const {t} = useI18n();

	if (me) {
		return null;
	}

	if (props.collapsed) {
		return (
			<div className="mt-4">
				<TooltipProvider>
					<TooltipRoot>
						<AuthDialog view="signup">
							<TooltipTrigger asChild>
								<Button variant="secondary" size="icon" aria-label={t('Sign up')}>
									<SignIn weight="bold" />
								</Button>
							</TooltipTrigger>
						</AuthDialog>
						<TooltipContent side="right">{t('Sign up')}</TooltipContent>
					</TooltipRoot>
				</TooltipProvider>
			</div>
		);
	}

	return (
		<div className="mt-4 grid w-full grid-cols-2 gap-2">
			<AuthDialog view="login">
				<Button variant="secondary" className="w-full">
					{t('Log in')}
				</Button>
			</AuthDialog>
			<AuthDialog view="signup">
				<Button variant="default" className="w-full">
					{t('Sign up')}
				</Button>
			</AuthDialog>
		</div>
	);
}
