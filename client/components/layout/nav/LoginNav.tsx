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
				<TooltipProvider>
					<TooltipRoot>
						<AuthDialog view="signup">
							<TooltipTrigger asChild>
								<Button variant="secondary" size="icon" aria-label="Sign up">
									<SignIn weight="bold" />
								</Button>
							</TooltipTrigger>
						</AuthDialog>
						<TooltipContent side="right">Sign up</TooltipContent>
					</TooltipRoot>
				</TooltipProvider>
			</div>
		);
	}

	return (
		<div className="mt-4 grid w-full grid-cols-2 gap-2">
			<AuthDialog view="login">
				<Button variant="secondary" className="w-full">
					{'Log in'}
				</Button>
			</AuthDialog>
			<AuthDialog view="signup">
				<Button variant="default" className="w-full">
					{'Sign up'}
				</Button>
			</AuthDialog>
		</div>
	);
}
