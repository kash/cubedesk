import AuthDialog from '@/components/login/AuthDialog';
import {Button} from '@/components/ui/button';
import {useTheme} from '@/util/hooks/useTheme';
import {resourceUri} from '@/util/storage';
import React from 'react';

interface Props {
	white?: boolean;
}

export default function TopNav(props: Props) {
	const {white} = props;

	const backgroundTheme = useTheme('background_color');

	let logoFile = 'cubedesk-lockup-white';
	if (!backgroundTheme.isDark || white) {
		logoFile = 'cubedesk-lockup-black';
	}

	const navClasses = [
		'fixed',
		'left-0',
		'top-0',
		'z-[10000]',
		'box-border',
		'w-full',
		white ? 'bg-white' : 'bg-tm-primary',
		'py-[15px]',
		white ? 'text-[#444]' : 'text-text',
	];

	return (
		<div className={navClasses.join(' ')}>
			<div className="mx-auto flex w-[95%] max-w-[1600px] flex-row items-center justify-between text-inherit">
				<div className="shrink-0">
					<a
						className="flex min-h-10 items-center rounded-md focus-visible:ring-2 focus-visible:ring-current"
						href="/"
					>
						<img
							className="h-auto w-[120px] sm:w-[150px]"
							src={resourceUri(`/images/branding/${logoFile}.svg`)}
							alt="CubeDesk Logo"
						/>
					</a>
				</div>

				<div className="flex shrink-0 flex-row items-center gap-2 text-inherit sm:gap-5">
					<AuthDialog view="login">
						<Button
							variant="ghost"
							size="lg"
							style={{color: white ? '#444444' : undefined}}
						>
							{'Log In'}
						</Button>
					</AuthDialog>
					<AuthDialog view="signup">
						<Button variant="default" size="lg">
							{'Sign up'}
						</Button>
					</AuthDialog>
				</div>
			</div>
		</div>
	);
}
